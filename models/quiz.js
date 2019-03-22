module.exports = function(sequelize, DataTypes) {
  var quiz = sequelize.define("quiz", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isAlphanumeric: true
      }
    },
    reward: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
  quiz.associate = function(models) {
    models.quiz.hasMany(models.quizQuestion, {
      onDelete: "cascade"
    });
  };

  return quiz;
};
