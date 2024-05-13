//
import express, { Express } from "express";
import mongoose from "mongoose";
import FinancialRecordModel from "./Schema/financial-record";
import FinancialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const mongoURL: string =
  "mongodb+srv://vijaynaidu095:vijayfinance@personalfinancetracker.kdchcnv.mongod";

mongoose
  .connect(mongoURL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Failed to connect to MOngoDB", err));


app.use('/financial-records', FinancialRecordRouter)

app.listen(port, () => {console.log(`Server running on port: ${port}`);
})
