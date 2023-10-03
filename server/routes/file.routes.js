const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const fileController = require("../controllers/fileController");

const router = Router();

// authMiddleware - can use app.use();
router.post('', authMiddleware, fileController.createDir);
router.get('', authMiddleware, fileController.getFiles);

module.exports = router;
