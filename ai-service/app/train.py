from sklearn.model_selection import train_test_split

from app.preprocessing import prepare_dataset


def prepare_training_data():

    df = prepare_dataset()

    feature_columns = [
        "open",
        "high",
        "low",
        "close",
        "volume",
        "rsi",
        "macd",
        "ema20",
        "ema50"
    ]

    X = df[feature_columns]

    y = df["target"]

    return train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
        shuffle=True
    )