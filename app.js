import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import express from 'express';
import dotenv from 'dotenv';
import {user} from "./controller/user.js";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    try {
        let data = plainToClass(user, req.body);
        console.log(data);
        res.send()
    } catch (error) {
        res.send(error);
    }
    res.status(200).send(":)");
});

let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});