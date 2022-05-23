require('./db/connection')
const express = require('express')
const cors = require('cors')
const movieRouter = require('./movie/movieRoutes')
const userRouter = require('./user/userRoutes')
const loginRouter = require('./user/loginRoutes')
const journalRouter = require('./journal/journalRoutes')

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);
app.use(loginRouter);
app.use(journalRouter);


app.listen(port, () => {
	console.log(` Listening on port ${port}`);
})





//app.use(resourceRouter);