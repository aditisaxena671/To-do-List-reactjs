const bcrypt = require('bcryptjs');
const db = require('../utils/db');

const authController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Store 'username' and 'hashedPassword' in your database (in this example, we're using an in-memory array)
      db.users.push({ username, password: hashedPassword });

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find the user by username (in this example, we're using an in-memory array)
      const user = db.users.find((u) => u.username === username);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Passwords match, user is authenticated
        // You can generate a token or session here
        res.json({ message: 'Login successful' });
      } else {
        // Passwords do not match
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = authController;
