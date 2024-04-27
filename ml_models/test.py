

import pandas as pd

# Given data
data = {'gender': 'Female', 'age': '12', 'Hypertension': '0', 'Heart_disease': '1', 'ever_married': '1',
        'work_type': 'Private', 'Residence_type': 'Rural', 'smoking_status': 'formerly smoked',
        'avg_glucose_level': '32', 'bmi': '23'}

# Define the column names for the one-hot encoded features
one_hot_columns = ['gender', 'work_type', 'smoking_status', 'Residence_type']

# Create a DataFrame with the given data
df = pd.DataFrame([data])

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

# Get the former values as a list
former_values = list(data.values())

print("Former Values:", former_values)
print("Mapped Values:", values.tolist())