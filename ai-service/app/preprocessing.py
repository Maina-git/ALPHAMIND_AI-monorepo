import pandas as pd
from app.database import market_collection


def load_market_data():
    """
    Read market data from MongoDB and return a DataFrame.
    """

    data = list(market_collection.find())

    if len(data) == 0:
        raise Exception("No market data found.")

    df = pd.DataFrame(data)

    return df


def clean_market_data(df):
    """
    Remove database-specific fields and clean the dataset.
    """

    columns_to_remove = [
        "_id",
        "__v",
        "createdAt",
        "updatedAt"
    ]

    existing_columns = [
        col for col in columns_to_remove
        if col in df.columns
    ]

    df = df.drop(columns=existing_columns)

    return df


def check_missing_values(df):
    """
    Return missing value statistics.
    """

    return df.isnull().sum()


def prepare_dataset():
    """
    Complete preprocessing pipeline.
    """

    df = load_market_data()

    df = clean_market_data(df)

    return df






def create_target(df):
    """
    Create BUY(1) / SELL(0) labels based on the next candle.
    """

    # Next candle's closing price
    df["next_close"] = df["close"].shift(-1)

    # BUY if next close > current close
    df["target"] = (
        df["next_close"] > df["close"]
    ).astype(int)

    # Remove the last row because it has no next candle
    df = df.iloc[:-1]

    return df






