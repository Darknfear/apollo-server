const catchAsync = require('../../middlewares/catch');

const healthyCheck = async (req, res) => {
  console.log('debug2');
  await Promise.resolve(true);
  return res.json({ success: true });
};

module.exports = {
  healthyCheck
}
