from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np
import io

app = Flask(__name__)

# Load the model
model = tf.keras.models.load_model('plant_disease_model.h5')

# Classes for prediction
CLASSES = ['Healthy', 'Powdery Mildew', 'Rust']

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    
    # Read and preprocess the image
    image = Image.open(io.BytesIO(file.read()))
    image = image.resize((224, 224))  # Adjust size according to your model
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    
    # Make prediction
    prediction = model.predict(image)
    predicted_class = CLASSES[np.argmax(prediction[0])]
    confidence = float(np.max(prediction[0]))
    
    return jsonify({
        'prediction': predicted_class,
        'confidence': confidence
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)