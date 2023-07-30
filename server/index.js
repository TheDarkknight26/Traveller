import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from './routes/comments.js'


const PORT=6001;
const app = express();
app.use(express.json());
app.use(cors());



 app.post('/api',router);

mongoose.connect('mongodb+srv://Maverick123:Arunesh123@cluster0.urw7kzx.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    app.listen(PORT, () =>console.log(`Server Port: ${PORT}`));
    

}).catch((error) => console.log(`${error} did not connect`));

