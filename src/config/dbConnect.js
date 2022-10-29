import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGODB_REMOTO_key);

let db = mongoose.connection;

export default db;