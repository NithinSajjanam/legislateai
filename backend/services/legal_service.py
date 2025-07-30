from ..schemas import LegalQuery
from .ai_service import call_llm

LEGAL_PROMPT_TEMPLATE = """
**SYSTEM MESSAGE: ROLE & GOAL**
You are LegislateAI, an expert legal assistant. Your mission to explain legal concepts clearly.
Jurisdiction: {jurisdiction}

**USER QUERY:**
{query}

**INSTRUCTIONS:**
Respond in the following JSON format with:
- one_sentence summary
- simple_paragraph
- detailed_breakdown with citations
- glossary (legal terms)
- risks
- disclaimer
"""

async def process_legal_query(query: LegalQuery):
    prompt = LEGAL_PROMPT_TEMPLATE.format(
        query=query.query, jurisdiction=query.jurisdiction
    )
    result = await call_llm(prompt)
    return {"response": result}
