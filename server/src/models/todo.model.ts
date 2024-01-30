import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

class Todo extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public isCompleted!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "Todo",
  }
);

export { Todo };
