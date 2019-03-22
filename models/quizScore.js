module.exports = function(sequelize, DataTypes) {
  var quizScore = sequelize.define("quizScore", {
    score: {
      type: DataTypes.INTEGER
    }
  });

  quizScore.associate = function(models) {
    models.quizScore.belongsTo(models.user, {
      onDelete: "cascade",
      allowNull: false
    });
    models.quizScore.belongsTo(models.quiz, {
      onDelete: "cascade",
      allowNull: false
    });
  };
  return quizScore;
};
