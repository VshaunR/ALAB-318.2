import express from 'express';
import ejs from 'ejs'
const router = express.Router();






router.get('/gallery',(req,res)=>{

  try{
    res.render('gallery')
  }catch(err){
    console.error(err);
  }


});

router.get('/login',(req,res)=>{
  
  try{
    res.render('login')
  }catch(err){
    console.error(err);
  }
});












export default router;