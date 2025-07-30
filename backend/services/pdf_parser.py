from io import BytesIO
from pdfminer.high_level import extract_text

def parse_pdf(file_content: bytes) -> str:
    return extract_text(BytesIO(file_content))
