import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todolist_ts", "root", "haianh123", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
