import cors from "cors";
import express from "express";
import { dbCon } from "./database/db.js";
import router from "./routers/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static("images"));

dbCon();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
