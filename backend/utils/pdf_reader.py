import fitz  # PyMuPDF
from fastapi import UploadFile

async def extract_text_from_pdf(file: UploadFile):
    contents = await file.read()
    with open("temp.pdf", "wb") as f:
        f.write(contents)
    doc = fitz.open("temp.pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    doc.close()
    return text
