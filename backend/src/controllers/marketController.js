import MarketData from "../models/MarketData.js";

// CREATE
export const createMarketData = async (req, res) => {
  try {
    const data = await MarketData.create(req.body);

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
export const getAllMarketData = async (req, res) => {
  try {
    const data = await MarketData.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ONE
export const getMarketData = async (req, res) => {
  try {
    const data = await MarketData.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Market data not found",
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
export const updateMarketData = async (req, res) => {
  try {
    const data = await MarketData.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Market data not found",
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
export const deleteMarketData = async (req, res) => {
  try {
    const data = await MarketData.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Market data not found",
      });
    }

    res.json({
      success: true,
      message: "Market data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


