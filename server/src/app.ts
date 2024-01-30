import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./config/database";
import todoRoutes from "./routes/todo.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync({ force: false }).then(() => {
    console.log("Database connected");
  });
});
