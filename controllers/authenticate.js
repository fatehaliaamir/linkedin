const jwt = require('jsonwebtoken');

const secretKey = 'e9k6R#pG2tY^wBz$L&nN8fA!dH'; // Replace with a strong secret key

// Middleware to authenticate using JWT
exports.authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token is not valid' });
        }

        req.user = user;
        next();
    });
}
