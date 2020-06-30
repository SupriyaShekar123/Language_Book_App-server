"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",

          email: "John@1234",
          password: "test1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mark",

          email: "Mark@1234",
          password: "Mark1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smita",

          email: "Smita@1234",
          password: "Smita1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rose",

          email: "Rose@1234",
          password: "Rose1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thomas",

          email: "Thomas@1234",
          password: "Tom1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
