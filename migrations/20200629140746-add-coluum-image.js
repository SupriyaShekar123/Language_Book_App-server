"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "books",
      "imageUrl",
      { type: Sequelize.STRING },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("books", "imageUrl", {});
  },
};
