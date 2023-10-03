const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");


const router = Router();

// authMiddleware - can use app.use();
router.post('', authMiddleware);
router.get('', authMiddleware);
