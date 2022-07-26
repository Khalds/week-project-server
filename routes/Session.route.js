const { Router } = require("express")
const { sessionController } = require("../controllers/Session.controller")

const router = Router()

router.post("/session/:id", sessionController.postSession)
router.get("/session", sessionController.getSession)
router.patch("/session/:id", sessionController.patchSessionById)
router.delete("/session/:id", sessionController.deleteSessionById)

module.exports = router