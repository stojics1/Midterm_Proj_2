import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./database/database.js";
import S_router from "./routes/student.routes.js";
import C_router from "./routes/courses.routes.js";

const app = express();
const port = 8000;

connectDB();

app.use(bodyParser.json());

app.use(cors());

app.use("/students", S_router);
app.use("/courses", C_router);

app.listen(port, () => {console.log(`listening on port 8000`)});
