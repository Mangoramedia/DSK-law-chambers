import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client
  let ai: GoogleGenAI | null = null;
  function getAiClient(): GoogleGenAI | null {
    if (!ai && process.env.GEMINI_API_KEY) {
      ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return ai;
  }

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", firm: "DSK LAW CHAMBERS" });
  });

  // Server-side AI Legal & Due Diligence Assistant API
  app.post("/api/legal-assistant", async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Valid message string is required." });
      }

      const client = getAiClient();
      if (!client) {
        // Fallback helpful message if GEMINI_API_KEY is not yet configured in environment
        return res.json({
          reply: `Thank you for contacting DSK Law Chambers. Our legal team specializes in Real Estate Law, Property Due Diligence, Civil Litigation, DRT & SARFAESI matters, and High Court Writs. For immediate legal advice, please book an appointment or call us directly at +91 7019302979 or email adv.kumudapriyadarshini@gmail.com. (Note: AI Assistant requires GEMINI_API_KEY configured in Secrets panel).`
        });
      }

      const systemInstruction = `You are the official AI Senior Legal Consultant for DSK LAW CHAMBERS, a premier full-service law firm.
Firm Details & 9 Core Practice Areas:
1. Real Estate Law & Property Due Diligence (Flagship Practice): Title Verification, 30-year Search, Legal Opinions, Sale Deeds, JDA/JVA, Leases, Power of Attorney, Gift/Partition/Settlement Deeds, Wills, Khata/RTC/Mutation verification, Conversion Orders, RERA Reviews, Property Document Audits.
2. Civil Litigation: Declaration Suits, Injunctions, Specific Performance, Money Recovery, Partition Suits, Eviction, Easements, Boundary Disputes, Appeals & Revisions.
3. Family & Matrimonial Law: Mutual & Contested Divorce, Child Custody, Maintenance, Domestic Violence, Restitution, Adoption, Family Settlements, Probate & Letters of Administration.
4. Criminal Law: Cheque Bounce (Sec 138 NI Act), Anticipatory & Regular Bail, Sessions Trials, Appeals, White Collar Crime, Fraud, Economic Offences.
5. High Court Practice: Writ Petitions (Art 226/227), RFA, RSA, MFA, Civil/Criminal Revisions, Quashing Petitions, PILs.
6. Arbitration & ADR: Domestic Arbitration, Appointment of Arbitrators, Enforcement & Challenge of Awards, Mediation, Conciliation, Settlement Negotiations.
7. Banking, DRT & Financial Litigation: DRT/DRAT Appeals, SARFAESI Sec 13(2)/13(4) Defense & Stays, Loan Recovery Suits, Banking Disputes.
8. Land & Revenue Matters: Mutation Disputes, RTC/Revenue Record Issues, Agricultural Land Conversion, Survey/Boundary Disputes, Revenue Appeals.
9. Legal Drafting & Documentation: Commercial Agreements, MOUs, NDAs, Employment/Consultancy Contracts, Vendor/Service Agreements, Partnership Deeds, Rental Agreements, Affidavits, Legal Notices & Replies, Board Resolutions.

Approach: Meticulous legal analysis combined with practical solutions for individuals, businesses, developers, and institutions.
Phone: +91 7019302979 | Email: adv.kumudapriyadarshini@gmail.com | Office: #432, 1st Main, 9th Cross, Panchasheelanagar, Nagarabhavi, Bangalore – 560072.

Instructions:
1. Provide authoritative, clear, and professional information regarding Indian legal procedures across all 9 practice areas.
2. Maintain a professional, reassuring, and meticulous tone appropriate for a senior advocate chamber.
3. Keep responses structured with bullet points or step-by-step guidance when explaining legal documents or procedures.
4. Always include a disclaimer that AI responses are for informational orientation and recommend booking a formal chamber consultation with our advocate team for tailored legal advice.`;

      const contents = [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...(conversationHistory || []).map((msg: any) => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ];

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
      });

      const replyText = response.text || "Thank you for contacting DSK Law Chambers. Please allow our legal team to assist you further.";
      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Error in /api/legal-assistant:", err);
      return res.status(500).json({
        error: "Failed to process legal query",
        details: err?.message || String(err)
      });
    }
  });

  // Vite development middleware or production static build serving
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
    console.log(`DSK Law Chambers Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
