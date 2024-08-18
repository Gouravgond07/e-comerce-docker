const app = require('./app');
const umzug = require('./migration');


app.listen(3000, async () => {
    console.log('here ')
    await umzug.up()
    console.log('listing 3000')
})