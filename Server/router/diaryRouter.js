const express = require("express");
const router = express.Router();
const { postImg } = require("../utils/multer");
const {
	deleteDiary,
	getDiary,
	updateDiary,
	getSingleDiary,
	createDiary,
} = require("../controller/diaryController");

router.route("/:id").post(postImg, createDiary);
router.route("/:id").get(getDiary);

router
	.route("/:id/:diary")
	.get(getSingleDiary)
	.delete(deleteDiary)
	.patch(updateDiary);

module.exports = router;
