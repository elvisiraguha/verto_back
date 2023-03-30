const asyncErrorHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
export default asyncErrorHandler;
