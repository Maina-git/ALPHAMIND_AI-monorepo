import pandas as pd
from app.database import market_collection

def load_market_data():

    data = list(market_collection.find())

    if len(data) == 0:
        raise Exception("No market data found in MongoDB.")

    df = pd.DataFrame(data)

    # Drop MongoDB fields
    columns_to_drop = ["_id", "__v", "createdAt", "updatedAt"]

    for column in columns_to_drop:
        if column in df.columns:
            df.drop(columns=column, inplace=True)

    return df