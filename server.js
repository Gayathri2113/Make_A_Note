require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const noteRouter = require("./routes/noteRouter")


const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.use('/users', userRouter) 
app.use('/api/notes', noteRouter) 

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is running on port  ", PORT)
})


const uri = process.env.MONGODB_URL

mongoose.connect(uri, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


