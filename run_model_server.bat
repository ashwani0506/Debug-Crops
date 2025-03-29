@echo off
python -m uvicorn app.api.model.server:app --reload --port 8000