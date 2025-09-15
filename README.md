# 🏛️ LegislateAI

**LegislateAI** is an intelligent legal assistant powered by Google’s Gemini API, designed to simplify complex legal information into structured, reliable, and accessible responses.

---

## 🚀 Features

- Ask natural language legal questions
- Structured JSON responses (summary, jargon decoder, risk factors, disclaimer)
- Jurisdiction-aware answers
- Rate limiting & request queue system
- Health check & status monitoring
- Responsive frontend dashboard

---

## ⚡ Tech Stack

| Frontend | Backend | AI API |
|----------|---------|--------|
| React.js | Node.js + Express | Gemini API (Google Generative Language) |

---

## ⚙️ Installation

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Valid Gemini API Key

### Setup Steps

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/legislateai.git
   cd legislateai
cd backend
npm install

cd ../frontend
npm install
GEMINI_API_KEY=YOUR_VALID_GEMINI_API_KEY
# Backend
cd backend
npm run start

# Frontend
cd frontend
npm run start

{
  "message": "What are the tenant rights in India?"
}

{
  "reply": "Under Indian law, a tenant has the right to... [structured legal response]",
  "timestamp": "2025-09-15T12:34:56Z"
}


---

## 📝 Short Concise README

```markdown
# 🏛️ LegislateAI

LegislateAI is a legal assistant powered by Google Gemini API that answers legal questions in a structured JSON format.

---

## 🚀 Features

- Natural language legal query
- Jurisdiction-based responses
- Rate limiting and queue handling

---

## ⚙️ Quick Start

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/legislateai.git


