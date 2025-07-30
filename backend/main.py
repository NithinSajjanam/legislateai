import os
import json
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Configure Gemini API (free tier - gemini-pro)
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel(model_name="models/gemini-pro")

# FastAPI app setup
app = FastAPI()

# Allow CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request schema
class LegalQuery(BaseModel):
    query: str
    jurisdiction: str

LEGAL_PROMPT_TEMPLATE = """
SYSTEM MESSAGE: ROLE & GOAL
You are LegislateAI, an expert legal assistant. Your mission is to democratize legal knowledge by translating complex legal information into accessible and reliable answers. You must cite sources and provide no legal advice.

USER QUERY:
{user_query}

CONTEXTUAL PARAMETERS:
- Jurisdiction: {jurisdiction}
- Source Corpus: {corpus}

RESPONSE FORMAT: JSON structured response with:
1. summary (1-sentence, simple paragraph, detailed breakdown with citations),
2. jargon_decoder (term, definition, example),
3. risk_factors_and_considerations (list),
4. disclaimer.
"""

# Route to handle legal queries
@app.post("/api/ask")
def ask_legal_question(payload: LegalQuery):
    prompt = LEGAL_PROMPT_TEMPLATE.format(
        user_query=payload.query,
        jurisdiction=payload.jurisdiction,
        corpus="Indian Law - IPC, CrPC, etc."
    )

    try:
        response = model.generate_content(prompt)
        return json.loads(response.text)
    except Exception as e:
        print("Gemini API Error:", e)
        return {
            "response": {
                "summary": {
                    "one_sentence": "An error occurred while generating the answer.",
                    "simple_paragraph": "The AI assistant encountered an issue and couldn't process the request.",
                    "detailed_breakdown": []
                },
                "jargon_decoder": [],
                "risk_factors_and_considerations": [],
                "disclaimer": "This is a fallback error message. Please try again later."
            }
        }

# Route to analyze uploaded document
@app.post("/api/analyze")
def analyze_document(file: UploadFile = File(...)):
    try:
        content = file.file.read().decode("utf-8")
        # You can replace this with better NLP parsing logic later
        summary = content[:500]
        return {
            "clauses": [
                {"summary": f"Preview of your document: {summary}"}
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Document analysis failed: {str(e)}")
