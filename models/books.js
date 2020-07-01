"use strict";

module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define(
    "books",
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      language: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {}
  );
  books.associate = function (models) {
    books.belongsTo(models.user);

    // associations can be defined here
  };

  return books;
};
