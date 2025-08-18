import jwt from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) { 
        return res.status(401).json({ error: 'User not authorized' });
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET);
        req.user = { userId: payload.userId}; 
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

export  {jwtAuth};


