import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose' 
import cors from 'cors'

import cookieParser from 'cookie-parser';
import { notFound,errorHandler} from "./middleware/errorMiddleware.js";
dotenv.config(); 

const port =process.env.PORT  


const mongoString = process.env.DATABASE_URL 
const app = express(); 
mongoose.connect(mongoString);
const database = mongoose.connection 



import userRoutes from "./routes/userRoutes.js";
import designRoute from "./routes/designRoute.js";
import orderRoute from "./routes/orderRoute.js";
import router from './routes/userRoutes.js';
import PaymentRoute from './routes/PaymentRoute.js'; // Import the new routes

app.use(express.json());
app.use(express.urlencoded( {extended: true }))
app.use(cookieParser())

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );




  
app.use("/api/users",userRoutes);
app.use("/api/design", designRoute); 
router.use("/api/order",orderRoute);
app.use('/api/payment', PaymentRoute); // Use the new payment routes


app.get("/",(req,res) => res.send("server is ready"));

app.use(notFound)
app.use(errorHandler)

 


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
}) 
database.on('error', (error) => {
    console.log(error)
})



database.once('connected', () => {
    console.log('Database Connected');
})


