const { body } = require('express-validator');

async function matchedPassword(){
 let data=[
  body('password').trim().isLength({min:8}).withMessage('min of 8 characters is needed'),
  body('confirmPassword').trim().custom((value, { req }) => {
 console.log(value);
 console.log(req.body.password)
 console.log(req.body.confirmPassword)
 })
]
console.log(data)
return data;
}


module.exports={matchedPassword,data};
