import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema({
  name: {type:String, required:true, trim:true},
  email: {type:String, required:true, trim:true},
  message: {type:String, required:true, trim:true},
  createdAt: {type:Date, default:Date.now}
});
const Contact = mongoose.model('Contact', contactSchema);

app.get('/api/health', (_,res)=>res.json({ok:true, service:'rahul-portfolio-api'}));
app.post('/api/contact', async (req,res)=>{
  try {
    const {name,email,message}=req.body;
    if(!name || !email || !message) return res.status(400).json({message:'All fields are required.'});
    if(!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({message:'Please provide a valid email.'});
    if(process.env.MONGODB_URI) {
      await Contact.create({name,email,message});
      return res.status(201).json({message:'Thanks — your message has been received.'});
    }
    console.log('Contact message:', {name,email,message});
    return res.status(201).json({message:'Message received. Configure MongoDB to persist it.'});
  } catch(e) { console.error(e); res.status(500).json({message:'Unable to send message.'}); }
});

const PORT = process.env.PORT || 5000;
async function start(){
  if(process.env.MONGODB_URI){
    try { await mongoose.connect(process.env.MONGODB_URI); console.log('MongoDB connected'); }
    catch(e){ console.error('MongoDB connection failed:',e.message); }
  }
  app.listen(PORT,()=>console.log(`API running on http://localhost:${PORT}`));
}
start();
