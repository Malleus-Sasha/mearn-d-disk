const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const fileController = require("../controllers/fileController");

const router = Router();

// authMiddleware - can use app.use();
router.post('', authMiddleware, fileController.createDir);
router.get('', authMiddleware, fileController.getFiles);
router.post('/upload', authMiddleware, fileController.uploadFile);
router.post('/download', authMiddleware, fileController.downloadFile);
router.get('/search', authMiddleware, fileController.searchFile);
router.get('/avatar', authMiddleware, fileController.uploadAvatar);
router.delete('/', authMiddleware, fileController.deleteFile);
router.delete('/avatar', authMiddleware, fileController.deleteAvatar)

module.exports = router;
