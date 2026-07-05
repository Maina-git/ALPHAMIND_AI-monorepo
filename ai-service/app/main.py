from fastapi import FastAPI
from app.preprocessing import load_market_data

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "FastAPI AI Service Running"
    }

@app.get("/dataset")
def dataset():

    df = load_market_data()

    return {
        "rows": len(df),
        "columns": list(df.columns),
        "sample": df.head(5).to_dict(orient="records"),
        "data_types": df.dtypes.astype(str).to_dict()
    }