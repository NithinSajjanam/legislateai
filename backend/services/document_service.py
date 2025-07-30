from fastapi import UploadFile
from utils.pdf_reader import extract_text_from_pdf
from services.ai_service import call_llm

DOCUMENT_PROMPT = """
You're a legal document summarizer. Extract key clauses, risks, and obligations from the following PDF content:

{text}
"""

async def analyze_document(file: UploadFile):
    text = await extract_text_from_pdf(file)
    prompt = DOCUMENT_PROMPT.format(text=text[:8000])  # Limit for Gemini
    result = await call_llm(prompt)
    return {"clauses": [{"summary": line} for line in result.split('\n') if line.strip()]}
