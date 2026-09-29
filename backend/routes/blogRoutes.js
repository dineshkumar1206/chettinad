const express = require('express');
const router = express.Router();
const multer = require('multer');
const blogController = require('../controllers/blogController');
const auth = require('../middleware/auth');

const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'uploads', 'blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', blogController.getAllBlogs); // Public
router.post('/', auth, upload.single('image'), blogController.createBlog); // Protected
router.put('/:id', auth, upload.single('image'), blogController.updateBlog); // Protected
router.delete('/:id', auth, blogController.deleteBlog); // Protected

module.exports = router;
