from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load your model
model = joblib.load('BigMart_Sales_Best_Model.pkl')

@app.route('/')
def home():
    return "Machine Learning Model API"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data
        data = request.get_json(force=True)
        
        # Convert data to a numpy array
        features = np.array(data['features']).reshape(1, -1)
        
        # Make predictions
        prediction = model.predict(features)
        
        # Respond with the prediction
        return jsonify(prediction.tolist())
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    # Run the Flask app on port 5000
    app.run(port=5000)