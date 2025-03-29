import torch
import torchvision.transforms as transforms
from PIL import Image
import io
import numpy as np

def load_model():
    # Load your trained model here
    model = torch.load('c:/Users/ashwa/Downloads/plant-disease-identifier (1)/app/api/model/plant_disease_model.pth')
    model.eval()
    return model

def transform_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225]
        )
    ])
    
    image = Image.open(io.BytesIO(image_bytes))
    return transform(image).unsqueeze(0)

def get_prediction(image_bytes):
    try:
        tensor = transform_image(image_bytes)
        model = load_model()
        
        with torch.no_grad():
            outputs = model(tensor)
            _, predicted = torch.max(outputs, 1)
            
        return predicted.item()
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return None