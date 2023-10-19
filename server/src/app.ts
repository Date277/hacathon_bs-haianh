import express from "express";
import cors from "cors"; // Import middleware CORS
import bodyParser from "body-parser";
import { sequelize } from "./config/database";
import todoRoutes from "./routes/todo.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Sử dụng middleware CORS
app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync({ force: false }).then(() => {
    console.log("Database connected");
  });
});
