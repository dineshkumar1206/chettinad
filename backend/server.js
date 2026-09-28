require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const sequelize = require('./config/database');
const Contact = require('./models/Contact');
const Admin = require('./models/Admin');
const Blog = require('./models/Blog');

const app = express();

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'https://chettinad.co.in',
  'https://www.chettinad.co.in',
  'https://chettinad-pi.vercel.app',
  'https://amigowebster.in',
  'https://www.amigowebster.in'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Setup uploads directory
const uploadDir = path.join(__dirname, 'uploads', 'blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer memory storage config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Test DB
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Sync DB
sequelize.sync()
  .then(async () => {
    console.log('Database synced');
    
    // Create default admin if not exists
    const adminCount = await Admin.count();
    if (adminCount === 0) {
      const defaultUser = process.env.ADMIN_USERNAME || 'admin';
      const defaultPass = process.env.ADMIN_PASSWORD || 'admin123';
      const hashedPassword = await bcrypt.hash(defaultPass, 10);
      await Admin.create({ username: defaultUser, password: hashedPassword });
      console.log(`Default admin created: ${defaultUser} / ${defaultPass}`);
    }
  })
  .catch(err => console.log('Error syncing: ' + err));

// Import Routes
const adminRoutes = require('./routes/adminRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Use Routes
app.use('/api/admin', adminRoutes);
app.use('/chettinad/api/admin', adminRoutes); // To support existing dual-route pattern
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/chettinad/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
