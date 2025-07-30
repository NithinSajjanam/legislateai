import os
import google.generativeai as genai
from dotenv import load_dotenv
import json

# Load .env environment variables
load_dotenv()

# Configure Gemini with API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Use free-tier model
model = genai.GenerativeModel("gemini-pro")

LEGAL_PROMPT_TEMPLATE = """
SYSTEM MESSAGE: ROLE & GOAL
You are LegislateAI, an expert legal assistant. Your mission is to explain legal concepts clearly.
Jurisdiction: {jurisdiction}

USER QUERY:
{user_query}

CORPUS:
{corpus}

INSTRUCTIONS:
Respond in JSON format with:
- summary (one_sentence, simple_paragraph, detailed_breakdown)
- jargon_decoder
- risk_factors_and_considerations
- disclaimer
"""

async def call_llm(prompt: str) -> dict:
    try:
        response = model.generate_content(prompt)
        return json.loads(response.text.strip())
    except Exception as e:
        print("Gemini API error:", e)
        return {
            "summary": {
                "one_sentence": "An error occurred while generating the answer.",
                "simple_paragraph": "The AI assistant encountered an issue and couldn't process the request.",
                "detailed_breakdown": []
            },
            "jargon_decoder": [],
            "risk_factors_and_considerations": [],
            "disclaimer": "This is a fallback error message. Please try again later."
        }
