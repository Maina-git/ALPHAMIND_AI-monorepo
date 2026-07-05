import mongoose from "mongoose";

const marketDataSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      trim: true,
    },

    timeframe: {
      type: String,
      required: true,
      enum: ["1m", "5m", "15m", "30m", "1h", "4h", "1d"],
    },

    open: {
      type: Number,
      required: true,
    },

    high: {
      type: Number,
      required: true,
    },

    low: {
      type: Number,
      required: true,
    },

    close: {
      type: Number,
      required: true,
    },

    volume: {
      type: Number,
      required: true,
    },

    rsi: Number,
    macd: Number,
    ema20: Number,
    ema50: Number,

    prediction: {
      type: String,
      enum: ["BUY", "SELL", "HOLD", null],
      default: null,
    },

    confidence: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MarketData", marketDataSchema);