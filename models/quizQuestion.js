module.exports = function(sequelize, DataTypes) {
  var quizQuestion = sequelize.define("quizQuestion", {
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    answerOne: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    answerTwo: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    answerThree: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 300]
      }
    },
    answerFour: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 300]
      }
    },
    correctAnswer: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 300]
      }
    },
    momResponse: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    snarkyResponse: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
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

  quizQuestion.associate = function(models) {
    models.quizQuestion.belongsTo(models.quiz, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return quizQuestion;
};
