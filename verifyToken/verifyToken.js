const jwt=require('jsonwebtoken')

module.exports=function(req,res,next){
    const token=req.header('auth-token');
    if(!token){res.status(401).send('access denied')}
    else{
        try {
            const verified=jwt.verify(token,process.env.TOKEN_SECRET)
            req.userdt=verified;
            next();
        } catch (error) {
            res.status(500).send('invalid token')
        }
    }
}

