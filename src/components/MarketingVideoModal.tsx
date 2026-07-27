import React, { useState, useRef, useEffect } from "react";
import { X, Play, Pause, Download, Video, Sparkles, RefreshCw, Layers, ShieldCheck, CheckCircle2, Laptop, Maximize2, Minimize2 } from "lucide-react";

interface MarketingVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

interface Slide {
  title: string;
  subtitle: string;
  badge: string;
  points: string[];
  duration: number; // in ms
  mockup: "app" | "playground" | "none";
}

export default function MarketingVideoModal({ isOpen, onClose, userEmail = "xabanokwazi008@gmail.com" }: MarketingVideoModalProps) {
  const [agencyName, setAgencyName] = useState("Our Design Agency");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [useParticles, setUseParticles] = useState(true);
  const [aspectRatio, setAspectRatio] = useState<"16:9" | "9:16">("16:9");
  const [isIframe, setIsIframe] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isPlayingRef = useRef(false);
  const isRecordingRef = useRef(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      if (videoContainerRef.current?.requestFullscreen) {
        videoContainerRef.current.requestFullscreen().catch(() => {});
      }
    } else {
      setIsFullscreen(false);
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };
  const startTime = useRef<number | null>(null);
  const accumulatedTime = useRef<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);

  // Asset pre-loading
  const appImageRef = useRef<HTMLImageElement | null>(null);
  const playgroundImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Detect iframe sandboxing
    if (typeof window !== "undefined") {
      setIsIframe(window.self !== window.top);
    }

    // Pre-load assets (no crossOrigin = "anonymous" for local relative paths)
    const appImg = new Image();
    appImg.src = "/src/assets/images/kodemamas_android_app_1782749713558.jpg";
    appImg.onload = () => {
      appImageRef.current = appImg;
    };

    const playImg = new Image();
    playImg.src = "/src/assets/images/kodemamas_offline_playground_1782749731186.jpg";
    playImg.onload = () => {
      playgroundImageRef.current = playImg;
    };
  }, []);

  const slides: Slide[] = [
    {
      title: "EXCLUSIVE WEB PORTFOLIO",
      subtitle: "Designing Digital Ecosystems with Purpose",
      badge: "CASE STUDY SHOWCASE",
      points: [
        "Architecting bespoke, high-performance web products",
        "Crafting intuitive user interfaces and layouts",
        "Blending modern tech with localized user intent"
      ],
      duration: 4500,
      mockup: "none"
    },
    {
      title: "PREMIUM DESIGN CRAFTSMANSHIP",
      subtitle: "KodeMamas Client-Side Interface",
      badge: "PIXEL-PERFECT ACCENTS",
      points: [
        "Deep Indigo and Metallic Gold color balance",
        "Fluid grid architectures and custom displays",
        "Clean, eye-safe dark theme typography pairing"
      ],
      duration: 5000,
      mockup: "app"
    },
    {
      title: "OFFLINE-FIRST WEB ARCHITECTURE",
      subtitle: "High Reliability in Extreme Environments",
      badge: "ELITE ENGINEERING",
      points: [
        "Service Workers for secure asset indexing",
        "IndexedDB integration for persistent local caching",
        "Ultra-light code paths requiring minimal data loads"
      ],
      duration: 5000,
      mockup: "playground"
    },
    {
      title: "INTELLIGENT AI PROXY INTEGRATION",
      subtitle: "Bespoke Server-Side AI Capabilities",
      badge: "AI-POWERED EDUCATION",
      points: [
        "Real-time Google Gemini SDK integration",
        "Proxy API endpoints to protect sensitive credentials",
        "Indigenous South African language translation matrices"
      ],
      duration: 5000,
      mockup: "none"
    },
    {
      title: "READY TO ELEVATE YOUR PROJECT?",
      subtitle: "Bespoke Web Design & Development",
      badge: "PARTNER WITH US",
      points: [
        `Engineered with pride by ${agencyName}`,
        `Connect for clean, performant web applications`,
        `Contact direct: ${userEmail}`
      ],
      duration: 5000,
      mockup: "none"
    }
  ];

  const totalDuration = slides.reduce((acc, slide) => acc + slide.duration, 0);

  // Background particles state
  const particles = useRef<Array<{ x: number; y: number; r: number; dx: number; dy: number; color: string }>>([]);

  const initParticles = (width: number, height: number) => {
    particles.current = [];
    const colors = ["rgba(124, 58, 237, 0.25)", "rgba(212, 175, 55, 0.25)", "rgba(75, 0, 130, 0.25)", "rgba(255, 255, 255, 0.1)"];
    for (let i = 0; i < 40; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 4 + 1,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };

  const drawFrame = (ctx: CanvasRenderingContext2D, width: number, height: number, timeMs: number) => {
    // 1. Calculate slide index and local slide progress
    let elapsed = timeMs % totalDuration;
    let tempSum = 0;
    let slideIdx = 0;
    for (let i = 0; i < slides.length; i++) {
      if (elapsed >= tempSum && elapsed < tempSum + slides[i].duration) {
        slideIdx = i;
        break;
      }
      tempSum += slides[i].duration;
    }

    const currentSlide = slides[slideIdx];
    const slideElapsed = elapsed - tempSum;
    const slideProgress = slideElapsed / currentSlide.duration;

    // Trigger state update safely outside rendering cycle
    if (currentSlideIndex !== slideIdx) {
      setCurrentSlideIndex(slideIdx);
    }

    // 2. Draw Background
    // Deep dark background gradient
    const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.8);
    bgGrad.addColorStop(0, "#12101a");
    bgGrad.addColorStop(1, "#07060a");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle Grid pattern
    ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw background particles
    if (useParticles) {
      if (particles.current.length === 0) {
        initParticles(width, height);
      }
      particles.current.forEach((p) => {
        // Move particle
        p.x += p.dx;
        p.y += p.dy;

        // Bounce borders
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
    }

    // Decorative glowing orbs
    ctx.beginPath();
    const glowGrad1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 0, width * 0.2, height * 0.3, 300);
    glowGrad1.addColorStop(0, "rgba(75, 0, 130, 0.15)");
    glowGrad1.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glowGrad1;
    ctx.arc(width * 0.2, height * 0.3, 300, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    const glowGrad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 0, width * 0.8, height * 0.7, 300);
    glowGrad2.addColorStop(0, "rgba(212, 175, 55, 0.08)");
    glowGrad2.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glowGrad2;
    ctx.arc(width * 0.8, height * 0.7, 300, 0, Math.PI * 2);
    ctx.fill();

    // 3. Slide Transitions
    // Simple fade-in & out interpolation
    let contentOpacity = 1;
    if (slideProgress < 0.1) {
      contentOpacity = slideProgress / 0.1; // Fade in
    } else if (slideProgress > 0.9) {
      contentOpacity = (1 - slideProgress) / 0.1; // Fade out
    }

    ctx.save();
    ctx.globalAlpha = contentOpacity;

    // 4. Draw Slide Content
    const paddingLeft = width * 0.08;
    const isLandscape = aspectRatio === "16:9";

    if (isLandscape) {
      // LANDSCAPE LAYOUT: Split Screen (Left: Text, Right: Visual Mockup)
      const textWidth = currentSlide.mockup !== "none" ? width * 0.48 : width * 0.84;

      // Draw Badge Label
      ctx.fillStyle = "#D4AF37";
      ctx.font = "bold 11px 'JetBrains Mono', monospace";
      ctx.fillText(currentSlide.badge, paddingLeft, height * 0.24);

      // Draw Accent Line under Badge
      ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(paddingLeft, height * 0.26);
      ctx.lineTo(paddingLeft + 60, height * 0.26);
      ctx.stroke();

      // Draw Main Title
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 32px 'Space Grotesk', sans-serif";
      // Handle word wrapping for title if too long
      const titleWords = currentSlide.title.split(" ");
      let line1 = "";
      let line2 = "";
      if (titleWords.length > 3) {
        line1 = titleWords.slice(0, 3).join(" ");
        line2 = titleWords.slice(3).join(" ");
        ctx.fillText(line1, paddingLeft, height * 0.35);
        ctx.fillText(line2, paddingLeft, height * 0.42);
      } else {
        ctx.fillText(currentSlide.title, paddingLeft, height * 0.38);
      }

      // Draw Subtitle
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "medium 15px 'Space Grotesk', sans-serif";
      const subtitleY = line2 ? height * 0.49 : height * 0.45;
      ctx.fillText(currentSlide.subtitle, paddingLeft, subtitleY);

      // Draw Bullet Points
      ctx.font = "normal 12px 'Space Grotesk', sans-serif";
      const startBulletY = line2 ? height * 0.58 : height * 0.53;
      currentSlide.points.forEach((point, pIdx) => {
        const bulletY = startBulletY + pIdx * 25;
        // Bullet point icon (Golden Dot)
        ctx.beginPath();
        ctx.arc(paddingLeft + 4, bulletY - 4, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#D4AF37";
        ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fillText(point, paddingLeft + 18, bulletY);
      });

      // Draw Mockup Visual (on the right if enabled)
      if (currentSlide.mockup !== "none") {
        const img = currentSlide.mockup === "app" ? appImageRef.current : playgroundImageRef.current;
        const mockupX = width * 0.62;
        const mockupY = height * 0.16;
        const mockupW = width * 0.28;
        const mockupH = height * 0.68;

        // Shadow box
        ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 15;

        // Draw outer glass bezel
        ctx.fillStyle = "#191624";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(mockupX, mockupY, mockupW, mockupH, 24);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0; // Reset shadow

        if (img) {
          // Clip & draw image
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(mockupX + 6, mockupY + 6, mockupW - 12, mockupH - 12, 18);
          ctx.clip();
          ctx.drawImage(img, mockupX + 6, mockupY + 6, mockupW - 12, mockupH - 12);
          ctx.restore();
        } else {
          // Placeholder gradient if image loading delayed
          const placeGrad = ctx.createLinearGradient(mockupX, mockupY, mockupX, mockupY + mockupH);
          placeGrad.addColorStop(0, "#2c1e4d");
          placeGrad.addColorStop(1, "#12101a");
          ctx.fillStyle = placeGrad;
          ctx.beginPath();
          ctx.roundRect(mockupX + 6, mockupY + 6, mockupW - 12, mockupH - 12, 18);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          ctx.font = "bold 10px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillText("LOADING MOCKUP ASSET...", mockupX + mockupW / 2, mockupY + mockupH / 2);
          ctx.textAlign = "left"; // reset alignment
        }

        // Inner glare overlay
        const glare = ctx.createLinearGradient(mockupX, mockupY, mockupX + mockupW, mockupY);
        glare.addColorStop(0, "rgba(255, 255, 255, 0.1)");
        glare.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glare;
        ctx.beginPath();
        ctx.roundRect(mockupX + 6, mockupY + 6, mockupW - 12, mockupH - 12, 18);
        ctx.fill();
      } else {
        // Draw decorative abstract graphics when mockup is "none"
        const visualX = width * 0.65;
        const visualY = height * 0.45;
        
        ctx.strokeStyle = "rgba(124, 58, 237, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(visualX, visualY, 120, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
        ctx.beginPath();
        ctx.arc(visualX, visualY, 80, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.beginPath();
        ctx.arc(visualX, visualY, 40, 0, Math.PI * 2);
        ctx.stroke();

        // Glowing center core
        const coreGrad = ctx.createRadialGradient(visualX, visualY, 0, visualX, visualY, 50);
        coreGrad.addColorStop(0, "rgba(124, 58, 237, 0.2)");
        coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(visualX, visualY, 50, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // VERTICAL LAYOUT (9:16 optimized for mobile stories, reels, or TikTok)
      // Draw Badge Label
      ctx.fillStyle = "#D4AF37";
      ctx.font = "bold 10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(currentSlide.badge, width / 2, height * 0.12);

      // Draw Line
      ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 30, height * 0.14);
      ctx.lineTo(width / 2 + 30, height * 0.14);
      ctx.stroke();

      // Title
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 24px 'Space Grotesk', sans-serif";
      ctx.textAlign = "center";
      const titleWords = currentSlide.title.split(" ");
      let line1 = "";
      let line2 = "";
      if (titleWords.length > 2) {
        line1 = titleWords.slice(0, 2).join(" ");
        line2 = titleWords.slice(2).join(" ");
        ctx.fillText(line1, width / 2, height * 0.22);
        ctx.fillText(line2, width / 2, height * 0.28);
      } else {
        ctx.fillText(currentSlide.title, width / 2, height * 0.24);
      }

      // Subtitle
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "medium 12px 'Space Grotesk', sans-serif";
      const subtitleY = line2 ? height * 0.33 : height * 0.30;
      ctx.fillText(currentSlide.subtitle, width / 2, subtitleY);

      // Visual / Mockup or decorative core
      const visualY = height * 0.52;
      const visualH = height * 0.28;
      const visualW = width * 0.64;
      const visualX = width * 0.18;

      if (currentSlide.mockup !== "none") {
        const img = currentSlide.mockup === "app" ? appImageRef.current : playgroundImageRef.current;
        ctx.fillStyle = "#191624";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(visualX, visualY, visualW, visualH, 16);
        ctx.fill();
        ctx.stroke();

        if (img) {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(visualX + 4, visualY + 4, visualW - 8, visualH - 8, 12);
          ctx.clip();
          ctx.drawImage(img, visualX + 4, visualY + 4, visualW - 8, visualH - 8);
          ctx.restore();
        }
      } else {
        // Decorative atomic orbit
        ctx.strokeStyle = "rgba(124, 58, 237, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(width / 2, visualY + visualH / 2, 70, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(212, 175, 55, 0.12)";
        ctx.beginPath();
        ctx.arc(width / 2, visualY + visualH / 2, 45, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bullet Points
      ctx.font = "normal 11px 'Space Grotesk', sans-serif";
      ctx.textAlign = "left";
      const startBulletY = height * 0.74;
      currentSlide.points.forEach((point, pIdx) => {
        const bulletY = startBulletY + pIdx * 22;
        ctx.beginPath();
        ctx.arc(width * 0.14, bulletY - 3, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#D4AF37";
        ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fillText(point, width * 0.19, bulletY);
      });

      ctx.textAlign = "left"; // reset
    }

    ctx.restore(); // Restore globalAlpha

    // 5. Corporate Footer/Branding Overlay (Always present at the very bottom)
    const watermarkY = height * 0.92;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.05, watermarkY - 12);
    ctx.lineTo(width * 0.95, watermarkY - 12);
    ctx.stroke();

    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "normal 10px 'Space Grotesk', sans-serif";
    ctx.fillText(`Design Architecture Showcase  |  KodeMamas Portfolio Project`, width * 0.08, watermarkY + 4);

    ctx.textAlign = "right";
    ctx.fillText(`Development Partner: ${agencyName}`, width * 0.92, watermarkY + 4);
    ctx.textAlign = "left"; // Reset

    // Progress Bar Indicator at the absolute bottom
    const progressHeight = 4;
    const currentTotalProgress = timeMs / totalDuration;
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fillRect(0, height - progressHeight, width, progressHeight);

    ctx.fillStyle = "#D4AF37";
    ctx.fillRect(0, height - progressHeight, width * (currentTotalProgress % 1.0), progressHeight);
  };

  const animationLoop = (timestamp: number) => {
    if (!startTime.current) {
      startTime.current = timestamp;
    }

    const elapsed = timestamp - startTime.current + accumulatedTime.current;
    
    // Update recording progress state using ref to avoid stale closure
    if (isRecordingRef.current) {
      const prog = Math.min((elapsed / totalDuration) * 100, 100);
      setRecordingProgress(Math.floor(prog));

      if (elapsed >= totalDuration) {
        stopRecording();
        return;
      }
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawFrame(ctx, canvas.width, canvas.height, elapsed);
      }
    }

    if (isPlayingRef.current || isRecordingRef.current) {
      animationFrameId.current = requestAnimationFrame(animationLoop);
    }
  };

  // Play controls
  const handlePlayPause = () => {
    if (isPlayingRef.current) {
      // Pause
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (startTime.current !== null) {
        accumulatedTime.current += performance.now() - startTime.current;
      }
      startTime.current = null;
    } else {
      // Play
      isPlayingRef.current = true;
      setIsPlaying(true);
      startTime.current = null;
      animationFrameId.current = requestAnimationFrame(animationLoop);
    }
  };

  const handleReset = () => {
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    startTime.current = null;
    accumulatedTime.current = 0;
    setCurrentSlideIndex(0);
    
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawFrame(ctx, canvas.width, canvas.height, 0);
      }
    }
    
    if (isPlayingRef.current) {
      animationFrameId.current = requestAnimationFrame(animationLoop);
    }
  };

  // Adjust canvas size when aspect ratio changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      if (aspectRatio === "16:9") {
        canvas.width = 1280;
        canvas.height = 720;
      } else {
        canvas.width = 720;
        canvas.height = 1280;
      }
      
      // Re-initialize particles
      initParticles(canvas.width, canvas.height);

      // Redraw static frame
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawFrame(ctx, canvas.width, canvas.height, accumulatedTime.current);
      }
    }
  }, [aspectRatio]);

  // Record functionality using MediaRecorder API
  const startRecording = () => {
    setErrorMsg(null);
    setVideoBlobUrl(null);
    const canvas = canvasRef.current;
    if (!canvas) {
      setErrorMsg("Canvas element is not available.");
      return;
    }

    // Reset playhead before recording
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    startTime.current = null;
    accumulatedTime.current = 0;
    setCurrentSlideIndex(0);
    recordedChunks.current = [];
    
    isRecordingRef.current = true;
    isPlayingRef.current = true;
    setIsRecording(true);
    setIsPlaying(true);
    setRecordingProgress(0);

    try {
      // Capture canvas stream at 30fps
      let stream: MediaStream;
      if (typeof (canvas as any).captureStream === "function") {
        stream = (canvas as any).captureStream(30);
      } else if (typeof (canvas as any).mozCaptureStream === "function") {
        stream = (canvas as any).mozCaptureStream(30);
      } else {
        throw new Error("Your browser security or configuration blocks canvas.captureStream() or video capture.");
      }
      
      // Choose preferred mimeType with robust cross-platform compatibility
      const preferredTypes = [
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm",
        "video/mp4;codecs=avc1",
        "video/mp4"
      ];
      let mimeType = "";
      for (const type of preferredTypes) {
        if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(type)) {
          mimeType = type;
          break;
        }
      }
      const options = mimeType ? { mimeType } : undefined;

      const recorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunks.current.push(event.data);
        }
      };

      recorder.onerror = (event: any) => {
        console.error("MediaRecorder error:", event);
        setErrorMsg("MediaRecorder encountered an error while recording.");
        isRecordingRef.current = false;
        setIsRecording(false);
      };

      recorder.onstop = () => {
        try {
          const finalMime = mimeType || "video/webm";
          const blob = new Blob(recordedChunks.current, { type: finalMime });
          const url = URL.createObjectURL(blob);
          setVideoBlobUrl(url);
          
          // Trigger automatic download
          const a = document.createElement("a");
          a.href = url;
          const ext = finalMime.includes("mp4") ? "mp4" : "webm";
          a.download = `kodemamas_agency_portfolio_${aspectRatio.replace(":", "_")}.${ext}`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } catch (err: any) {
          console.error("Failed to construct download blob: ", err);
          setErrorMsg(err.message || "Failed to trigger file download due to sandboxing.");
        }
        isRecordingRef.current = false;
        isPlayingRef.current = false;
        setIsRecording(false);
        setRecordingProgress(0);
        setIsPlaying(false);
      };

      // Start recording with 100ms timeslices for smooth data collection
      recorder.start(100);

      // Kick off animation loop
      animationFrameId.current = requestAnimationFrame(timestamp => {
        startTime.current = timestamp;
        animationLoop(timestamp);
      });

    } catch (err: any) {
      console.error("Failed to start MediaRecorder: ", err);
      setErrorMsg(err.message || "MediaRecorder is not supported or was blocked by iframe sandbox rules.");
      isRecordingRef.current = false;
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    isRecordingRef.current = false;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
  };

  useEffect(() => {
    if (isOpen) {
      // Draw initial frame when opened
      const timer = setTimeout(() => {
        const canvas = canvasRef.current;
        if (canvas) {
          const w = aspectRatio === "16:9" ? 1280 : 720;
          const h = aspectRatio === "16:9" ? 720 : 1280;
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            initParticles(w, h);
            drawFrame(ctx, w, h, 0);
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Cleanup animation when closed
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      setIsFullscreen(false);
    }
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isOpen, aspectRatio, isFullscreen]);

  if (!isOpen) return null;

  if (isFullscreen) {
    return (
      <div ref={videoContainerRef} className="fixed inset-0 z-[100] bg-gray-950 flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none animate-fade-in">
        {/* Fullscreen Header Bar */}
        <div className="flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-[10px] font-bold text-purple-300 uppercase">
              <Video className="w-3 h-3 text-[#D4AF37]" />
              <span>Full Screen Video View</span>
            </div>
            <span className="text-xs font-mono text-slate-300 hidden sm:inline">
              SCENE {currentSlideIndex + 1} OF {slides.length}: {slides[currentSlideIndex].title}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer border border-white/10"
              title="Exit Full Screen"
            >
              <Minimize2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Exit Full Screen</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Canvas Viewport */}
        <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden py-3 my-2">
          <canvas
            ref={canvasRef}
            width={aspectRatio === "16:9" ? 1280 : 720}
            height={aspectRatio === "16:9" ? 720 : 1280}
            className={`max-w-full max-h-[78vh] sm:max-h-[82vh] w-auto h-auto object-contain shadow-2xl rounded-2xl border border-white/10 ${
              aspectRatio === "16:9" ? "aspect-video" : "aspect-[9/16]"
            }`}
          />

          {/* Live Recording Progress Overlay in Full Screen */}
          {isRecording && (
            <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 rounded-2xl">
              <div className="relative flex items-center justify-center w-24 h-24 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin" />
                <span className="font-mono text-lg font-bold text-white">{recordingProgress}%</span>
              </div>
              <h4 className="font-display font-extrabold text-lg text-white">Exporting Video Matrix...</h4>
              <p className="text-xs text-slate-400 font-normal mt-1 max-w-sm">
                Recording and compiling full-screen video slides at 30fps stream.
              </p>
            </div>
          )}
        </div>

        {/* Fullscreen Player Controls Bar */}
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePlayPause}
              disabled={isRecording}
              className={`p-3.5 rounded-xl font-bold flex items-center justify-center transition-all cursor-pointer ${
                isPlaying 
                  ? "bg-white/20 hover:bg-white/30 text-white" 
                  : "bg-[#4B0082] hover:bg-[#5C00A3] text-white"
              } disabled:opacity-50`}
              title={isPlaying ? "Pause Preview" : "Play Preview"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
            </button>
            <button
              onClick={handleReset}
              disabled={isRecording}
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-all cursor-pointer"
              title="Reset Timeline"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-slate-300">
              {agencyName} | Timeline: {Math.floor(totalDuration / 1000)}s total
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={startRecording}
              disabled={isRecording}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-gray-950 font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-gray-950" />
              <span>Record & Download Video</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer border border-white/10 flex items-center space-x-1.5"
            >
              <Minimize2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden md:inline">Exit Full Screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#191624] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-left flex flex-col md:flex-row">
        
        {/* Left Side: Parameters Form / Config */}
        <div className="w-full md:w-[320px] bg-[#09080c]/80 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-800/30 text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-2">
                <Video className="w-3 h-3 text-[#D4AF37]" />
                <span>Web Studio v1.1</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Agency Video Studio</h3>
              <p className="text-[11px] text-slate-400 font-normal mt-1 leading-normal">
                Export a bespoke high-definition video marketing your web design and engineering capabilities. Perfect for LinkedIn, WhatsApp, or email campaigns.
              </p>
            </div>

            <div className="space-y-4">
              {/* Agency Name Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Your Business / Agency Name</label>
                <input
                  type="text"
                  value={agencyName}
                  onChange={(e) => setAgencyName(e.target.value)}
                  placeholder="e.g. Elite Digital Agency"
                  className="w-full bg-[#12101a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 font-sans"
                />
              </div>

              {/* Aspect Ratio Config */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Video Format</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setAspectRatio("16:9")}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      aspectRatio === "16:9"
                        ? "bg-[#4B0082] text-white border-purple-500/30"
                        : "bg-white/5 text-slate-400 border-white/5 hover:text-white"
                    }`}
                  >
                    Landscape (16:9)
                  </button>
                  <button
                    onClick={() => setAspectRatio("9:16")}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      aspectRatio === "9:16"
                        ? "bg-[#4B0082] text-white border-purple-500/30"
                        : "bg-white/5 text-slate-400 border-white/5 hover:text-white"
                    }`}
                  >
                    Vertical (9:16)
                  </button>
                </div>
              </div>

              {/* Particle Overlay Toggle */}
              <div className="flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5">
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Ambient Particle Backgrounds
                </span>
                <input
                  type="checkbox"
                  checked={useParticles}
                  onChange={(e) => setUseParticles(e.target.checked)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
              <Laptop className="w-3 h-3 text-[#D4AF37]" />
              <span>Full Browser-Side Rendering</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Player Studio */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Header Close & Full Screen buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5 text-slate-400">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono">SCENE {currentSlideIndex + 1} OF {slides.length}: {slides[currentSlideIndex].title}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleFullscreen}
                className="px-2.5 py-1.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 hover:text-white transition-all border border-purple-800/40 text-xs font-semibold flex items-center space-x-1.5 cursor-pointer shadow-sm"
                title="View Full Screen"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden sm:inline">Full Screen</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sandboxed iframe warning */}
          {isIframe && (
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 leading-normal">
              <div>
                <span className="font-bold flex items-center gap-1.5 text-amber-300">
                  ⚠️ AI Studio Sandbox Restriction Active
                </span>
                <p className="mt-1 font-normal text-amber-200/80">
                  Your browser restricts direct video downloads from sandboxed code editors. To download your video successfully, open the app directly in a new tab!
                </p>
              </div>
              <a
                href={window.location.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-[#D4AF37] hover:bg-[#F3C63F] text-gray-950 font-bold rounded-xl transition-all shadow-md flex items-center gap-1 cursor-pointer"
              >
                <span>Open in New Tab</span>
              </a>
            </div>
          )}

          {/* Download ready banner */}
          {videoBlobUrl && (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 leading-normal animate-fade-in">
              <div>
                <span className="font-bold flex items-center gap-1.5 text-emerald-300">
                  🎉 Video Export Successfully Generated!
                </span>
                <p className="mt-1 font-normal text-emerald-200/80">
                  If the download did not begin automatically, click the button to save your marketing video.
                </p>
              </div>
              <a
                href={videoBlobUrl}
                download={`kodemamas_agency_portfolio_${aspectRatio.replace(":", "_")}.webm`}
                className="shrink-0 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-gray-950 font-bold rounded-xl transition-all shadow-md flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save File</span>
              </a>
            </div>
          )}

          {/* Dynamic error display banner */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs leading-normal">
              <span className="font-bold flex items-center gap-1.5 text-rose-300">
                ❌ Video Recording Error
              </span>
              <p className="mt-1 font-normal text-rose-200/80">{errorMsg}</p>
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={() => setErrorMsg(null)}
                  className="px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 font-semibold rounded-lg transition-all text-[11px] cursor-pointer"
                >
                  Dismiss
                </button>
                <a
                  href={window.location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white hover:bg-white/90 text-gray-950 font-bold rounded-lg transition-all text-[11px] cursor-pointer"
                >
                  Try in New Tab
                </a>
              </div>
            </div>
          )}

          {/* Canvas Wrapper / Preview Frame */}
          <div className="flex items-center justify-center bg-[#09080c] rounded-2xl border border-white/10 overflow-hidden shadow-inner relative max-h-[440px] group">
            <canvas
              ref={canvasRef}
              width={aspectRatio === "16:9" ? 1280 : 720}
              height={aspectRatio === "16:9" ? 720 : 1280}
              className={`max-w-full h-auto shadow-2xl object-contain ${
                aspectRatio === "16:9" ? "aspect-video" : "aspect-[9/16] max-h-[380px]"
              }`}
              style={{ width: aspectRatio === "16:9" ? "100%" : "auto" }}
            />

            {/* Floating Full Screen button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 hover:bg-black/90 backdrop-blur-md text-white border border-white/15 opacity-90 hover:opacity-100 transition-all flex items-center space-x-1.5 text-xs font-semibold cursor-pointer shadow-lg"
              title="Expand to Full Screen"
            >
              <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden sm:inline">Full Screen</span>
            </button>

            {/* Live Recording Progress Overlay */}
            {isRecording && (
              <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                <div className="relative flex items-center justify-center w-20 h-20 mb-4">
                  {/* Outer spinning ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin" />
                  <span className="font-mono text-sm font-bold text-white">{recordingProgress}%</span>
                </div>
                <h4 className="font-display font-extrabold text-base text-white">Exporting Video Matrix...</h4>
                <p className="text-xs text-slate-400 font-normal mt-1 max-w-sm">
                  Please keep this browser tab open. We are recording and compiling the slides at a smooth 30fps stream.
                </p>
              </div>
            )}
          </div>

          {/* Player controls & export bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Interactive Timeline controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePlayPause}
                disabled={isRecording}
                className={`p-3 rounded-xl font-bold flex items-center justify-center transition-all cursor-pointer ${
                  isPlaying 
                    ? "bg-white/10 hover:bg-white/15 text-white" 
                    : "bg-[#4B0082] hover:bg-[#5C00A3] text-white"
                } disabled:opacity-50`}
                title={isPlaying ? "Pause Preview" : "Play Preview"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
              <button
                onClick={handleReset}
                disabled={isRecording}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Reset Timeline"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono text-slate-400 pl-2">
                Timeline Loop: {Math.floor(totalDuration / 1000)}s total duration
              </div>
            </div>

            {/* Download Export Button */}
            <button
              onClick={startRecording}
              disabled={isRecording}
              className="flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-gray-950 font-bold text-xs shadow-lg shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-gray-950" />
              <span>Record & Download Marketing Video</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
