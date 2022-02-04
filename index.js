import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Man how r u");
});

app.listen(process.env.PORT || 9000, () =>
  console.log(`Listening on port 9000...`)
);
