import express from 'express';
import cors from 'cors';
import { NODE_ENV, PORT } from './config/env.config.js';
import connectToDatabase from './database/database.js';


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode.`);
    await connectToDatabase();
});


