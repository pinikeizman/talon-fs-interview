"use strict";
const { v4: uuidv4 } = require("uuid");

const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      eventType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      severity: {
        type: DataTypes.ENUM,
        values: ["high", "medium", "low"],
        allowNull: false,
      },
      time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    const events = require("../../libs/data");
    const data = events.map(({ user, os, ...e }) => ({
      id: uuidv4(),
      ...e,
      userName: user.name,
      userEmail: user.email,
    }));
    await queryInterface.bulkInsert("Events", data);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events");
  },
};
