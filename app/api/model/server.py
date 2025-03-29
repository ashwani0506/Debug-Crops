from fastapi import FastAPI, File
from fastapi.middleware.cors import CORSMiddleware
from predict import get_prediction

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: bytes = File(...)):
    prediction = get_prediction(file)
    if prediction is None:
        return {"error": "Prediction failed"}
    return {"prediction": prediction}