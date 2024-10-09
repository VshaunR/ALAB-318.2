import express from 'express';
import ejs from 'ejs';
import router from './routes/routes.mjs';

const app = express();
const PORT =3000;

app.use(router);
app.use(express.static('public'));
app.set('views','./views');
app.set('view engine','ejs');





app.get('/',(req,res)=>{

  try{
    res.render('home')


  }catch(err){
    console.error(err);
  }

});



app.listen(PORT,()=>{

  console.log(`Listening to ${PORT}`);


});