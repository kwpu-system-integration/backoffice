const express = require('express');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const app = express();

db.sequelize.sync().then(() => {
    console.log('DB connection success.');
    console.log('Press CTRL-C to stop\n')
}).catch(err => {
    console.error(err);
    console.log('DB connection Error');
    process.exit();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/user',userAPIRouter);

app.listen(8080, ()=> {
   console.log('server is running on localhost:8080')
});