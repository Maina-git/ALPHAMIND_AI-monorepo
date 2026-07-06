
from fastapi import FastAPI
from app.preprocessing import prepare_dataset, check_missing_values
from app.train import prepare_training_data

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "AlphaMind AI Service Running"
    }


@app.get("/dataset")
def dataset():

    df = prepare_dataset()

    return {
        "rows": len(df),
        "columns": list(df.columns),
        "sample": df.head(10).to_dict(orient="records")
    }

@app.get("/training-data")
def training_data():

    X_train, X_test, y_train, y_test = prepare_training_data()

    return {
        "training_rows": len(X_train),
        "testing_rows": len(X_test),
        "feature_count": len(X_train.columns),
        "features": list(X_train.columns)
    }









