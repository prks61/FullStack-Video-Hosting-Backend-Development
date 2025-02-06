
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";


dotenv.config({
    path:'./.env'
})

connectDB()
  .then(() => {
    
    // Start the server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed !!!", err);
  });









/* method 2 to connect database

import express from "express"
const app = express()

(async () => {

    try {
        await mongoose.connect('${process.env.MONGODB_URL}/{DB_NAME}')

        app.on("error",(error)=>{
            console.log("ERRR: ", error);
            throw error
        })


        app.listen(process.env.PORT,() => {
            console.log('App is listening on port $ {process.env.PORT}');

        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
        
    }
})()
*/