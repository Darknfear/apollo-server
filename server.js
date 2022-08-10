const initialApp = require('./src/app');

initialApp().then((app) => {
    app.listen(3000, () => {
        console.log(`🚀 Server ready at http://localhost:3000`);
    });
}).catch((err) => {
    console.log(err);
});
