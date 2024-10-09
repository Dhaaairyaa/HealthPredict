from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np


def clean_stroke_input(data):
    # Define the column names for the one-hot encoded features
    one_hot_columns = ['gender', 'work_type', 'smoking_status', 'Residence_type']

    # Create a DataFrame with the given data
    df = pd.DataFrame([data])

    # Handle missing columns gracefully
    for col in one_hot_columns:
        if col not in df.columns:
            df[col] = 0  # Add missing column with default value

    # Convert categorical variables to one-hot encoded format
    df_encoded = pd.get_dummies(df, columns=one_hot_columns)

    # Define the order of features expected by the model
    expected_features = ['age', 'Hypertension', 'Heart_disease', 'ever_married', 'avg_glucose_level', 'bmi',
                         'gender_Female', 'gender_Male', 'gender_Other', 'work_type_Govt_job', 'work_type_Never_worked',
                         'work_type_Private', 'work_type_Self-employed', 'work_type_children',
                         'smoking_status_Unknown', 'smoking_status_formerly smoked', 'smoking_status_never smoked',
                         'smoking_status_smokes', 'Residence_type_Rural', 'Residence_type_Urban']

    # Reorder the columns to match the expected feature order
    df_reordered = df_encoded.reindex(columns=expected_features)

    # Replace NaN values with False
    df_reordered.fillna(False, inplace=True)

    # Extract the values from the DataFrame
    values = df_reordered.values[0]

    return values


# Initialize Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the pre-trained model
with open('heart_attack_model.pkl', 'rb') as file:
    HAmodel = pickle.load(file)
with open('stroke_prediction.pkl', 'rb') as file:
    SPmodel = pickle.load(file)
with open('tumor_tissue_model.pkl', 'rb') as file:
    TTmodel = pickle.load(file)

# Define a route for the predict stroke POST request
@app.route('/predictHeartAttack', methods=['POST'])
def predictHeartAttack():
    # Get data from the request
    data = request.json
    dataArray = []
    # change each value to float
    for key in data:
        data[key] = float(data[key])
        dataArray.append(data[key])
    print(data)
    # Perform prediction using the pre-trained model
    prediction = HAmodel.predict([dataArray])
    pred = np.where(prediction<0.5, 0,1)

    # Return the prediction as a JSON response with CORS header
    response = jsonify({'prediction': int(pred[0])})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')  # Allow requests from frontend
    return response, 200

# Define a route for the heart attack POST request
@app.route('/predictStroke', methods=['POST'])
def predictStroke():
    # Get data from the request
    data = request.json
    print(data)
    result = clean_stroke_input(data)

    # Get feature names for the model
    feature_names = SPmodel.best_estimator_.feature_names_in_

    # Create a DataFrame with the cleaned data and feature names
    df_result = pd.DataFrame([result], columns=feature_names)

    # Perform prediction using the pre-trained model
    prediction = SPmodel.predict(df_result)
    print(prediction)

    # Return the prediction as a JSON response with CORS header
    response = jsonify({'prediction': int(prediction[0])})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')  # Allow requests from frontend
    return response, 200

# Define a route for the tumor tissue POST request
@app.route('/predictTumorTissue', methods=['POST'])
def predictTumorTissue():
    # Get data from the request
    data = request.json
    dataArray = []

    # change each value to float
    for key in data:
        data[key] = float(data[key])
        dataArray.append(data[key])
    print(data)

    # Perform prediction using the pre-trained model
    prediction = TTmodel.predict([dataArray])
    print(prediction)

    # Return the prediction as a JSON response with CORS header
    response = jsonify({'prediction': int(prediction[0])})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')  # Allow requests from frontend
    return response, 200

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
