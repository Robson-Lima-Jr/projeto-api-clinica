import express from 'express'
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(8080, () => {
    const data = new Date();
    console.log(`O servidor foi iniado, na data de: ${data.toLocaleDateString()}`);
    
})