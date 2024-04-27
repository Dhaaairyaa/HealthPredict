import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
import pickle

def train_model():
    # Read the dataset
    df = pd.read_csv('healthcare-dataset-stroke-data.csv')

    # Drop the 'id' column
    df.drop(columns='id', inplace=True)

    # Handle missing values in 'bmi' column
    df['bmi'].fillna(df['bmi'].mean(), inplace=True)
    df["ever_married"] = df["ever_married"].map({"Yes": 1, "No": 0})
    # Convert categorical variables to numerical using one-hot encoding
    df = pd.get_dummies(df, columns=["gender", "work_type", "smoking_status", "Residence_type"])

    # Split the dataset into training and testing sets
    X = df.drop(columns='stroke')
    y = df['stroke']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Define a Random Forest Classifier model and set up a parameter grid for hyperparameter tuning using GridSearchCV
    clf = RandomForestClassifier(n_jobs=-1)
    param_grid = {
        'n_estimators': [100, 200, 300, 400, 500],
        'max_depth': [None, 2, 3, 4, 5]
    }

    # Perform GridSearchCV to find the best parameters for the model
    GSCV = GridSearchCV(clf, param_grid, cv=5, scoring='accuracy')
    GSCV.fit(X_train, y_train)

    # Print best parameters and score
    print('Best Params:', GSCV.best_params_)
    print('Best Score:', GSCV.best_score_)

    # Save the trained model to a file
    with open("ml_model.pkl", 'wb') as file:
        pickle.dump(GSCV, file)

    return GSCV, X_test, y_test

def load_model():
    # Load the pre-trained model from the file
    with open('ml_model.pkl', 'rb') as file:
        model = pickle.load(file)
    return model

def predict(model, data):
    # Perform prediction using the pre-trained model
    prediction = model.predict(data)
    return prediction

if __name__ == "__main__":
    trained_model, X_test, y_test = train_model()
    loaded_model = load_model()
    predictions = predict(loaded_model, X_test)
    print(predictions)
