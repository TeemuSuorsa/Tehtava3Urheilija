const express = require("express");
const router = express.Router();
const uControllers = require("../controllers/uControllers");

router.route("/").get(uControllers.getAll).post(uControllers.create);

router
  .route("/:id")
  .get(uControllers.getById)
  .put(uControllers.update)
  .delete(uControllers.remove);

module.exports = router;
