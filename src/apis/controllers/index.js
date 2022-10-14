const { HttpResponseError } = require('../../base/response.base');
const healthyCheck = async (req, res) => {
  // a
  // console.log(Boolean())
  console.log('debug2');
  // await Promise.resolve(true);
  // throw HttpResponseError(400, 'hello');
  res.json({ success: true });
};

module.exports = {
  healthyCheck
}
