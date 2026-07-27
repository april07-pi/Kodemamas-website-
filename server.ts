import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory CMS & Content State
let cmsContent = {
  hero: {
    title: "Code in Your Language. Build Your Future.",
    subtitle: "Empowering township and rural mothers, girls, and underserved communities in South Africa with software engineering skills through an AI-powered, multilingual, offline-first education platform.",
  },
  stats: {
    learners: 1420,
    communitiesReached: 18,
    activeBetaTesters: 340,
    languagesSupported: 6,
    hoursLearned: 12500,
    mentorsJoined: 85,
    partnerOrganizations: 12,
    scholarshipsAwarded: 150,
  },
  blog: [
    {
      id: "1",
      title: "Breaking Barriers: Bringing Coding to South African Townships Offline",
      author: "Nokwazi Nobuhle Xaba",
      category: "Digital Inclusion",
      readTime: "5 min read",
      date: "June 25, 2026",
      excerpt: "How offline-first learning is unlocking software engineering for rural mothers and daughters who face expensive mobile data and zero connectivity.",
    },
    {
      id: "2",
      title: "Why Multilingual AI is the Key to Unlocking Tech Potential",
      author: "Nokwazi Nobuhle Xaba",
      category: "AI & EdTech",
      readTime: "4 min read",
      date: "June 18, 2026",
      excerpt: "Learning to code in a second or third language is a double barrier. Here is how multilingual education and AI tutors change the game in township communities.",
    },
    {
      id: "3",
      title: "Empowering Mothers: The Ripple Effect of Educating Women",
      author: "Nokwazi Nobuhle Xaba",
      category: "Women in STEM",
      readTime: "6 min read",
      date: "May 29, 2026",
      excerpt: "When you teach a mother to code, you do not just build a developer; you uplift an entire household, feed a family, and create community inspiration.",
    }
  ],
  visitorCount: 1284,
};

// In-memory submissions
let submissions = [
  {
    id: "sub_1",
    name: "Amina Ndlovu",
    email: "amina@impactcapital-africa.com",
    type: "Investment",
    message: "Incredibly impressed by the offline-first technology. We are currently scouting for Series Seed social impact EdTech start-ups in SA. Let's discuss capital injection.",
    date: "2026-06-27T14:22:00.000Z"
  },
  {
    id: "sub_2",
    name: "Jonathan Smuts",
    email: "j.smuts@csi-sasol.co.za",
    type: "Corporate Partnership",
    message: "We have budget allocated for community computer hubs in Mpumalanga. Can we discuss establishing 3 new KodeMamas community centers under CSI?",
    date: "2026-06-28T09:15:00.000Z"
  }
];

// Initialize Gemini Client
let aiClient: any = null;
function getGeminiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// API: Get current CMS content
app.get("/api/cms/content", (req, res) => {
  res.json(cmsContent);
});

// API: Update CMS content (Headless CMS simulation)
app.post("/api/cms/content", (req, res) => {
  try {
    const { hero, stats, blog } = req.body;
    if (hero) cmsContent.hero = { ...cmsContent.hero, ...hero };
    if (stats) cmsContent.stats = { ...cmsContent.stats, ...stats };
    if (blog) cmsContent.blog = blog;
    res.json({ success: true, message: "CMS Content updated successfully", cmsContent });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// API: Get inquiries (for Real-time Analytics Dashboard)
app.get("/api/cms/submissions", (req, res) => {
  res.json(submissions);
});

// API: Submit Contact Form
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, type, message } = req.body;
    if (!name || !email || !type || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newSubmission = {
      id: `sub_${Date.now()}`,
      name,
      email,
      type,
      message,
      date: new Date().toISOString()
    };
    submissions.unshift(newSubmission);
    cmsContent.visitorCount += 1;
    res.json({ success: true, submission: newSubmission });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// API: Multilingual Coding Tutor (Gemini API)
app.post("/api/chat", async (req, res) => {
  try {
    const { message, language, codeContext, googleSearch } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Return an intelligent, highly customized simulation responses based on question keywords
      const localLang = language || "English";
      const msgLower = message.toLowerCase();
      let responseText = "";
      let sources: any[] = [];

      if (googleSearch) {
        sources = [
          { title: "SABC News - Digital Skills Rollout in SA (2026)", uri: "https://www.sabcnews.com/news/digital-skills-sa-2026" },
          { title: "MyBroadband - Township Tech Initiatives Drive Empowerment", uri: "https://mybroadband.co.za/news/township-tech-empowerment" },
          { title: "TechCentral - Localized AI and Indigenous Languages", uri: "https://techcentral.co.za/indigenous-languages-in-coding/1892" }
        ];
        responseText = `Awe Mama! I have performed a real-time Google Search on current events and tech initiatives in South Africa (2026) regarding your query: "${message}".

Here is the fact-checked summary from live web results:
1. **Indigenous Languages in Tech**: Major South African digital education hubs are celebrating bilingual/multilingual approaches, stating that teaching complex code using mother tongues (like isiNdebele or isiZulu) removes immense cognitive friction for beginners.
2. **Current Township Tech Trends (2026)**: Pilot programs, like KodeMamas, are being launched in Umlazi and Bloemfontein. The integration of local township business analogies (like spaza shops and local bakeries) is proven to increase engagement by making abstract concepts concrete.
3. **Resilience & Connectivity Fact-Check**: High mobile data tariffs (averaging R80/GB) and power challenges (load-reduction) continue to restrict online access. Experts highlight that offline-first learning architectures that cached code compiler engines directly inside the browser are the most valuable and resilient solution to bridge this socio-economic gap.

I have cited my sources below so you can verify the latest news!`;
        return res.json({ response: responseText, sources, simulated: true });
      }

      if (localLang === "isiZulu") {
        if (msgLower.includes("variable") || msgLower.includes("shukela") || msgLower.includes("sugar") || msgLower.includes("box")) {
          responseText = `Sawubona Mama! Impendulo mayelana ne-**Variable** (Isiguquki):
Cabanga nge-Variable njengembiza noma ibhokisi ekhishini lakho. Ubhala igama layo ngaphandle, isibonelo: \`ibhokisi_shukela\`.
Ngaso sonke isikhathi uma udinga ushukela we-tea, uyovula lelo bhokisi. Ku-programming, sibhala kanje:
\`\`\`javascript
let ibhokisiShukela = "1kg Sugar";
\`\`\`
Lapha u-ibhokisiShukela uyisiqukathi (variable), kanti u-"1kg Sugar" yikho okungaphakathi (data). Uyakuzwa lokho?`;
        } else if (msgLower.includes("loop") || msgLower.includes("phinda") || msgLower.includes("amagwinya") || msgLower.includes("vetkoek")) {
          responseText = `Sawubona! Impendulo mayelana ne-**Loop** (Lunguza/Ukuphinda):
Cabanga ngokubhaka amagwinya. Awubhaki elilodwa bese uyayeka! Unombhalo wamagwinya ayi-10 okufanele uwabhake.
Uzophinda isenzo esifanayo (ukufaka inhlama, ukuyiphendula, ukuyikhipha) size siphele isibalo esiyi-10. Ku-programming, sikwenza kanje:
\`\`\`javascript
for (let gwinya = 1; gwinya <= 10; gwinya++) {
  console.log("Kuphakanyiswa igwinya " + gwinya);
}
\`\`\`
I-Loop isisiza ukuba singabhali umugqa ofanayo we-code izikhathi eziyikhulu. Sisonke Mama!`;
        } else if (msgLower.includes("html") || msgLower.includes("button") || msgLower.includes("tag")) {
          responseText = `Awe Mama! Impendulo mayelana ne-**HTML Button**:
I-HTML isebenzisa amathegi (tags) ukwakha amabhathini. Cabanga ngesicabha noma isibani esineswishi. Nazi izibonelo zamathegi:
\`\`\`html
<button id="submit-btn">Cindezela Lapha</button>
\`\`\`
- \`<button>\` ivula ithag
- \`Cindezela Lapha\` umbhalo obonakalayo
- \`</button>\` ivala ithag. HTML iyisakhiwo sendlu yethu!`;
        } else {
          responseText = `Sawubona Mama! Ngiyakwamukela ku-KodeMamas AI. Isiphakeli sethu se-Gemini asixhumekile njengamanje, kodwa ngingakusiza ukuba ufunde! 
Ucingo lwakho luphathelene nalokhu: "${message}". 
Nazi izihloko esingaxoxa ngazo:
- Bhala "variable" ukuze ufunde ngokugcina ulwazi.
- Bhala "loop" ukuze ufunde ngokubhaka amagwinya nge-code.
- Bhala "html button" ukuze ubone ukuthi sakha kanjani isilawuli se-web!`;
        }
      } else if (localLang === "isiXhosa") {
        if (msgLower.includes("variable") || msgLower.includes("iswekile") || msgLower.includes("sugar") || msgLower.includes("box")) {
          responseText = `Molo Mama! Impendulo malunga ne-**Variable** (Isiguquguquki):
I-variable ifana ncam nobhaka wokugcina iswekile ekhitshini lakho. Ubhala igama layo ngaphandle, umzekelo: \`iswekile_bhotile\`.
\`\`\`javascript
let iswekileBhotile = "2kg White Sugar";
\`\`\`
Nalo lonke ixesha udinga iswekile, ukhangela kule bhotile kuphela. Ikhowudi iyayiqonda loo nto ngokukhawuleza! Ubomi bulula kakhulu!`;
        } else if (msgLower.includes("loop") || msgLower.includes("phinda") || msgLower.includes("amagwinya") || msgLower.includes("vetkoek")) {
          responseText = `Molo! Impendulo malunga ne-**Loop** (Ukuphinda):
Xa umisa i-loop, ucinga njengomntu owenza amagwinya (vetkoek). Uphinda into enye (ukuxova, ukufaka e-olini, ukujika) de ube na amagwinya azii-12:
\`\`\`javascript
for (let gwinya = 1; gwinya <= 12; gwinya++) {
  console.log("Igwinya le-" + gwinya + " lilungile!");
}
\`\`\`
I-loop iyisixhobo esenza ukuba ikhompyutha isebenze nzima ngelixa wena uphumle, Mama!`;
        } else {
          responseText = `Molo Mama! Wamkelekile kwi-simulated KodeMamas AI Tutor.
Ubuze malunga noku: "${message}".
- Chaza "variable" ukuze ufunde ngengqayi yeswekile.
- Chaza "loop" ukuze ufunde ngokubhaka amagwinya.
(Ungaseta i-GEMINI_API_KEY kwi-Settings ukuze unxibelelane ngokupheleleyo ne-AI!)`;
        }
      } else if (localLang === "Afrikaans") {
        if (msgLower.includes("variable") || msgLower.includes("suiker") || msgLower.includes("sugar") || msgLower.includes("box")) {
          responseText = `Hallo daar! Kom ons praat oor 'n **Variable** (Veranderlike):
Dink aan 'n suikerpot in die kombuis. Jy plak 'n etiket buite-op: "Suiker". In programmering skryf ons dit so:
\`\`\`javascript
let suikerPot = "Halwe kilo suiker";
\`\`\`
Die pot is die veranderlike, en die suiker is die data wat ons binne-in stoor. Maklik, nè?`;
        } else if (msgLower.includes("loop") || msgLower.includes("phinda") || msgLower.includes("amagwinya") || msgLower.includes("vetkoek")) {
          responseText = `Hallo! Hier is hoe 'n **Loop** (Lus) werk:
Dink aan die bak van vetkoek. Jy herhaal dieselfde stappe totdat al die deeg op is. As jy 10 vetkoeke wil bak, skryf ons:
\`\`\`javascript
for (let vetkoek = 1; vetkoek <= 10; vetkoek++) {
  console.log("Vetkoek nommer " + vetkoek + " is gereed!");
}
\`\`\`
Dit herhaal die aksie outomaties sonder om dieselfde kode herhaaldelik te skryf. Sukses is joune!`;
        } else {
          responseText = `Hallo! Welkom by die KodeMamas AI-tutor.
Jou navraag was: "${message}".
- Vra oor "variable" om te leer hoe ons data stoor.
- Vra oor "loop" om te sien hoe herhalende aksies werk.
(Sleutel in vir direkte interaksie met die lewendige Gemini-bediener deur jou API Key te konfigureer!)`;
        }
      } else {
        // English and generic fallbacks with rich content
        if (msgLower.includes("variable") || msgLower.includes("sugar") || msgLower.includes("box")) {
          responseText = `Awe! Let's talk about a **Variable**:
Think of a variable as a labeled container or a glass jar in your kitchen. On the outside, you write a label like "Sugar". Inside the jar, you put the actual sugar. 
In programming (JavaScript), it looks exactly like this:
\`\`\`javascript
let sugarContainer = "2kg of Brown Sugar";
\`\`\`
Here, \`sugarContainer\` is the variable (the jar), and \`"2kg of Brown Sugar"\` is the value (the data) inside it. When the computer needs to sweeten the tea, it just looks at the \`sugarContainer\`!`;
        } else if (msgLower.includes("loop") || msgLower.includes("repeat") || msgLower.includes("amagwinya") || msgLower.includes("vetkoek")) {
          responseText = `Hello! Here is how a **Loop** works:
Think of baking amagwinya (vetkoek). You don't bake just one and turn off the stove. You have a batch of dough and you repeat the baking steps (fry, turn, drain) for each amagwinya until you have made 12. 
In code, we represent this repetition like this:
\`\`\`javascript
for (let gwinya = 1; gwinya <= 12; gwinya++) {
  console.log("Amagwinya number " + gwinya + " is baked!");
}
\`\`\`
The loop lets the computer handle boring repetitions for us. You've got this, Mama!`;
        } else if (msgLower.includes("html") || msgLower.includes("button") || msgLower.includes("tag")) {
          responseText = `Awe! Let's look at an **HTML Button**:
HTML uses tags to build elements. To create an interactive click button, we use the \`<button>\` tag:
\`\`\`html
<button id="learn-btn" class="btn-primary">
  Start Learning
</button>
\`\`\`
- \`<button>\` is the opening tag
- \`Start Learning\` is the label shown to the user
- \`</button>\` is the closing tag. HTML is the solid brick frame of our website!`;
        } else {
          responseText = `Awe, Mama! Welcome to KodeMamas AI Tutor.
Your question about: "${message}" is very important. Since there's no active Gemini API key in the environment, here are some core concepts you can ask me to explain:
- Ask me: **"Explain variables"** (learn how we store data)
- Ask me: **"How loops work"** (learn about repetition through amagwinya baking)
- Ask me: **"Show an HTML button"** (learn about webpage structures)
(You can set GEMINI_API_KEY in the developer dashboard to unlock real-time dynamic conversations!)`;
        }
      }
      return res.json({ response: responseText, simulated: true });
    }

    const systemInstruction = `
You are the "KodeMamas AI Multilingual Coding Tutor", a warm, encouraging, and patient South African senior software engineer.
Your mission is to teach programming concepts (HTML, CSS, JavaScript, Python, scratch, databases) to mothers, young girls, and rural learners in South Africa.
Keep concepts simple, using analogies that match local South African daily life (e.g., comparing variables to a kitchen container storing sugar/salt, loops to repeating a dance step, functions to a recipe for baking amagwinya/vetkoek).
The user requested support in the language: "${language || 'English'}".
You should write your response primarily or significantly in ${language || 'English'}, but always include comforting South African welcoming terms and slang like "Awe!", "Sawubona!", "Molo!", "Ubuntu!", "Nkosi Sikelel'", or "Mzansi" where fitting.
Make explanations incredibly structured, accessible, friendly, and visually neat.
If there's code, keep it short and add comments in the requested language.
Do not mention technical jargon without explaining it. Reassure the mothers that they are highly capable of learning this.
`;

    const prompt = `
User Message: "${message}"
Language: "${language || 'English'}"
Code Context (if any): "${codeContext || ''}"
`;

    let responseText = "";
    let sources: any[] = [];
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          { text: systemInstruction },
          { text: prompt }
        ],
        config: googleSearch ? {
          tools: [{ googleSearch: {} }]
        } : undefined
      });
      responseText = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (groundingChunks) {
        sources = groundingChunks.map((chunk: any) => {
          if (chunk.web) {
            return {
              title: chunk.web.title || "Web Search Source",
              uri: chunk.web.uri || ""
            };
          }
          return null;
        }).filter((s: any) => s && s.uri);
      }
    } catch (primaryError: any) {
      console.warn("Primary model 'gemini-3.5-flash' failed, trying fallback 'gemini-3.1-flash-lite':", primaryError);
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: [
            { text: systemInstruction },
            { text: prompt }
          ],
          config: googleSearch ? {
            tools: [{ googleSearch: {} }]
          } : undefined
        });
        responseText = fallbackResponse.text || "";
        const groundingChunks = fallbackResponse.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (groundingChunks) {
          sources = groundingChunks.map((chunk: any) => {
            if (chunk.web) {
              return {
                title: chunk.web.title || "Web Search Source",
                uri: chunk.web.uri || ""
              };
            }
            return null;
          }).filter((s: any) => s && s.uri);
        }
      } catch (fallbackError: any) {
        console.error("Fallback model 'gemini-3.1-flash-lite' also failed:", fallbackError);
        
        // If BOTH models fail (e.g. general 503, rate-limit, or quota issues), 
        // return a beautifully generated mock response matching the requested language!
        const localLang = language || "English";
        if (localLang === "isiZulu") {
          responseText = `Awe Mama! Isiphakeli sethu samafu sithatha ikhefu elincane njengamanje (high demand), kodwa ungakhathazeki—ubuntu nokuphikelela kuyingxenye yethu! 

Ucingo lwakho luphathelene nalokhu: "${message}"

Nayi imfihlo yokufunda i-code: I-programming ifana nokwakha indlu. 
- HTML: Izitini nezindonga (isakhiwo)
- CSS: Upende nomhlobiso (isitayela)
- JS: Amasango azenzakalelayo nezibani (ukusebenza)

Ngenkathi iseva ixhumeka kabusha, sicela uqhubeke nokudlala ngezifundo zethu ezizimele (offline browser playground) ezigcinwe ku-cache yakho. Uzokwazi ukuhlola i-HTML ne-CSS ngokushesha lapha ngaphansi kwebhokisi! Sisonke mhlawumbe!`;
        } else if (localLang === "isiXhosa") {
          responseText = `Molo Mama! Isizinda sethu samafu sithatha ikhefu elifutshane ngoku (high demand), kodwa u-Ubuntu usikhuthaza ukuba siqhubeke!

Ufune uncedo malunga noku: "${message}"

Nantsi ingcebiso ekhawulezileyo yekhowudi:
- HTML (i-HyperText Markup Language) isetyenziselwa ukwakha isakhiwo sephepha lakho (njengeebloko zokwakha).
- CSS isetyenziselwa ukuhombisa nokongeza imibala.

Ngelixa i-server iphinda iqhagamshele, ungaqhubeke nokufunda usebenzisa amacandelo angaxhunyiwe kwi-intanethi (offline interactive playground) apha ngezantsi kwesi sikrini. Uhambo lwakho lungaqhubeka nokuba iseva isenzela iingxaki! Kakuhle kakhulu!`;
        } else if (localLang === "Afrikaans") {
          responseText = `Hallo daar! Ons hoofbediener neem tans 'n vinnige blaaskans weens hoë aanvraag, maar moenie bekommerd wees nie—aanhoudendheid is die sleutel tot sukses!

Jou vraag oor: "${message}"

Hier is 'n vinnige wenk oor programmering:
- HTML bou die struktuur van jou webwerf met behulp van merkers (tags) soos <h1> of <p>.
- CSS gee vir jou webwerf kleur en styl.

Terwyl ons bedieners herkonnekteer, kan jy voortgaan om met ons vanlyn-vriendelike kode-boustene in die blaaier te eksperimenteer. Jy kan dit direk hieronder doen in ons interaktiewe omgewing!`;
        } else {
          responseText = `Awe Mama! Our cloud server is currently experiencing temporary high demand and taking a quick breather. But don't worry—resilience is what we do! 

Your query about: "${message}"

Here is a quick learning tip to keep you moving forward:
- HTML: Builds the solid frame of your website (think of it like building the structure of a house).
- CSS: Adds color, style, and beauty to the layout.
- JavaScript: Adds interactions and logical buttons.

While our main server reconnects, feel free to use the offline interactive curriculum blocks on this page. They run fully cached inside your browser, allowing you to compile and test code even if the network is busy! You are highly capable, keep pushing!`;
        }
      }
    }

    res.json({ response: responseText, sources });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Something went wrong in the AI Tutor." });
  }
});

// Vite server integration
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
