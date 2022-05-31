require('./db/connection')
const express = require('express')
const cors = require('cors')
const movieRouter = require('./movie/movieRoutes')
const userRouter = require('./user/userRoutes')
// const loginRouter = require('./user/loginRoutes') // using userRoutes
const journalRouter = require('./journal/journalRoutes')
const resourceRouter = require('./resources/resourceRoutes')

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);
// app.use(loginRouter); // using userRoutes
app.use(journalRouter);
app.use(resourceRouter);


app.listen(port, () => {
	console.log(` Listening on port ${port}`);
})





