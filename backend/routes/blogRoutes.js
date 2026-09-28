const express = require('express');
const router = express.Router();
const multer = require('multer');
const blogController = require('../controllers/blogController');
const auth = require('../middleware/auth');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', blogController.getAllBlogs); // Public
router.post('/', auth, upload.single('image'), blogController.createBlog); // Protected
router.put('/:id', auth, upload.single('image'), blogController.updateBlog); // Protected
router.delete('/:id', auth, blogController.deleteBlog); // Protected

module.exports = router;
