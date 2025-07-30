import pytest
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_ask_endpoint():
    response = client.post("/api/ask", json={"query": "What is a contract?", "jurisdiction": "India"})
    assert response.status_code == 200
    json_data = response.json()
    assert "response" in json_data

def test_analyze_endpoint():
    # Create a dummy PDF file content (simple PDF header)
    dummy_pdf_content = b"%PDF-1.4\n%PDF-Header\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"
    files = {"file": ("dummy.pdf", dummy_pdf_content, "application/pdf")}
    response = client.post("/api/analyze", files=files)
    assert response.status_code == 200
    json_data = response.json()
    assert "clauses" in json_data or "error" in json_data
