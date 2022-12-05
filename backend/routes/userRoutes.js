const {
  addToLikeVideo,
  removeFromLikedMovies,
  getLikedMovies,
} = require("../controller/userController");

const router = require("express").Router();
router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikeVideo);
router.put("/remove", removeFromLikedMovies);

module.exports = router;
