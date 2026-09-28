// Automatically use localhost for development and the live domain for production
export const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : 'https://amigowebster.in/chettinad';
