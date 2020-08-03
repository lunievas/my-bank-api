import express from 'express';
import accountsRouter from './routes/accounts.js'

const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log('API started :D')
});