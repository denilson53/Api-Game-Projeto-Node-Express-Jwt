const express = require("express")
const router = express.Router();
const Auth = require("../middleware/AdminAuth")

const GameController = require("../controllers/GameController");

router.get("/game",Auth, GameController.index)
router.get("/game/:id",Auth, GameController.findGame)
router.post("/game",Auth, GameController.create)
router.delete("/game/:id",Auth,GameController.remove)
router.put("/game/:id",Auth, GameController.edit)

const jwtController = require("../controllers/jwtController")

router.post("/auth",jwtController.auth)

module.exports = router;