const VerifyToken = (req, res, next) => {
    // Extract token from Authorization header
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Token is not provided' });
    }
  
    // Extract the token
    const token = authHeader.split(' ')[1];
  
    // Check if token is valid (e.g., verify with JWT library)
    // Example with JWT library (jsonwebtoken)
    try {
      const decoded = jwt.verify(token, process.env.SecretKey);
      req.user = decoded.user;  // Attach decoded user information to request object
      next(); // Pass control to the next middleware
    } catch (error) {
      console.error('Error verifying token:', error.message);
      return res.status(401).json({ msg: 'Token is not valid' });
    }
  };
  
  module.exports = VerifyToken;
  