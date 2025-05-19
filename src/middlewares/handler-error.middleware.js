const catchingError = (error, req, res, next) => {
  if (!error.status) {
    console.log('No status', error.message);
    return res.status(500).json({message: 'Server error', status: false})
  }
  return res.status(error.status).json({message: error.message, status: false});
}



module.exports = catchingError;
