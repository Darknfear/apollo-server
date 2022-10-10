const catchAsync = (req, res, func) => async (req, res, args) => {
  console.log('debug', func)
  next();
}

module.exports = catchAsync;
