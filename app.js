import express from 'express';
import mongoose from 'mongoose';
import {mddb} from '../module/modeldb.js';

const app = express();
require ('dotenv').config();

(async () => {
    try{
        await mongoose.connect('mongodb+srv://' {process.env.USERDB} 
        : {precess.env.PWDDB}@cluster0.b07ih.mongodb.net/grades?retryWrites=true&w=majority', 
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         }
      );
      console.log('Conectado no MongoDB com sucesso');
    }catch (error) {
        console.log("Erro ao Conectar no MongoDB Atlas"+err);    
    }      
     
})();

app.use(express.json());
app.use(accountRouter);


app.get('/mddb', async(req,res) => {
    try {
        const account = await accountModel.find({});
        res.send(account);
    } catch (error) {
        res.status(500).send(error); 
    }
});

app.listen(process.env.PORT, () => console.log('API Iniciada'));