const { usersRoutes } = require("../services/users");
const { gamesRoutes } = require("../services/games");
const { questionsRoutes } = require("../services/questions");
const { gameQuestionsRoutes } = require("../services/game_questions");
const { PlayersRoutes } = require('../services/players');
const { categoryRoutes } = require('../services/category');
const { category_questionRoutes } = require('../services/category_question');
const { roomsRoutes } = require('../services/rooms/index');
const { questioAnsRoutes } = require('../services/question_ans');
const { StripeRoutes } = require('../services/stripe');

const initialize = (app) => {
  app.use("/api/users", usersRoutes);
  app.use("/api/games", gamesRoutes );
  app.use("/api/questions",questionsRoutes);
  app.use("/api/category",categoryRoutes);
  app.use("/api/category_question",category_questionRoutes);
  app.use("/api/game_questions",gameQuestionsRoutes);
  app.use("/api/players",PlayersRoutes);
  app.use("/api/rooms",roomsRoutes);
  app.use("/api/question_ans",questioAnsRoutes);
  app.use("/api/stripe", StripeRoutes);




  
  app.use("/authError", (req, res, next) => {
    return next(new Error("DEFAULT_AUTH"));
  });

  app.get("/ping", (req, res) => {
    res.status(200).send({
      success: true,
      statusCode: 200,
    });
  });
};

module.exports = { initialize };
