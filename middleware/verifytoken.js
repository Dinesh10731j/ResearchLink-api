const VerifyToken = (req, res, next) => {
  
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Token is not provided' });
    }

    const token = authHeader.split(' ')[1];
    console.log("The token is here ",token )
  
    
    try {
      const decoded = jwt.verify(token, process.env.SecretKey);
      req.user = decoded.user;  

      console.log('This is decoded jwt info',decoded)
      next(); 
    } catch (error) {
      console.error('Error verifying token:', error.message);
      return res.status(401).json({ msg: 'Token is not valid' });
    }
  };
  
  module.exports = VerifyToken;
  