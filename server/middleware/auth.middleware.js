const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
       return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(':Auth.M:', req.headers.authorization);
        if (!token) {
            return res.status(401).json({message: 'Auth error'});
        }
        const decoded = jwt.verify(token, config.get('secretKey'));
        console.log(':AUTH:MidW:decode.', decoded);
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }
}
