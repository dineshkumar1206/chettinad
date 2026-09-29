const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const Blog = require('../models/Blog');

const uploadDir = path.join(__dirname, '..', 'uploads', 'blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    let imageUrl = null;

    if (req.file) {
      imageUrl = `/uploads/blogs/${req.file.filename}`;
    }

    const newBlog = await Blog.create({ title, content, image: imageUrl });
    res.status(201).json({ success: true, blog: newBlog });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const blog = await Blog.findByPk(id);

    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    let imageUrl = blog.image;
    if (req.file) {
      if (blog.image) {
        const oldPath = path.join(__dirname, '..', blog.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      imageUrl = `/uploads/blogs/${req.file.filename}`;
    }

    await blog.update({ title, content, image: imageUrl });
    res.status(200).json({ success: true, blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    if (blog.image) {
      const oldPath = path.join(__dirname, '..', blog.image);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    await blog.destroy();
    res.status(200).json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
