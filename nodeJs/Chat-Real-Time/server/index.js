import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server, createServer} from 'node:http';


const PORT = process.env.PORT || 3000;


const app = express();
app.use(cors());



app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/cliente/index.html');
});

app.listen(PORT, () => {
    console.log(`Server listo en el puerto ${PORT}`);
});
