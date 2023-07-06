const express= require('express');
const connectDB = require('./config/connection');
const cors = require("cors")

const app= express()
//connection
connectDB()
app.use(cors({
    origin:'http://127.0.0.1:3000',
    credentials:true   
}))
// route
app.use (express.json())
//authentification
app.use('/api/auth',require('./Routes/authRoutes'));
// update , get all users and get one user
app.use('/api/user',require("./Routes/UserRoutes"))
// send email to users for confirmation 
app.use("/api/sendmail", require('./Routes/EmailRoutes'))
// send email to user for annulation 
app.use("/api/annulation", require('./Routes/EmailAnnulationRoute'))
//appoinment check

app.use("/api/appoinment", require('./Routes/AppoinmentsRoute'))
app.use("/api/product", require("./Routes/ProductRoute") )


const port=5000
app.listen(port,()=>{console.log(`server run on port ${port}`)})