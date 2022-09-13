const { serverConfig } = require('./config');

const initialApp = require('./src/app');

initialApp().then((app) => {
    app.get('/healthy-check', (req, res) => {
        return res.status(200).json({
            success: true
        })
    })
    app.listen(serverConfig.PORT, () => {
        console.log(`🚀 Server ready at http://localhost:3000`);
    });
}).catch((err) => {
    console.log(err);
});
