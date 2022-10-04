require('dotenv').config();
const initialApp = require('./src/app');
const { HOST, PORT } = require('./config');

initialApp().then((app) => {
    app.listen(PORT, HOST, () => {
        console.log(`🚀 Server ready at http://${HOST}:${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});
