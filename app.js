import express from 'express';
import {Router} from './routes/defaultRoute.js'

const app = express();
app.use(express.json());

app.use('/default', Router)

const port = 3000;

app.listen(port, () => { 
    console.log(`listening in port ${port}`);
});