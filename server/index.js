const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get("serverPort");

const start = async () => {
    try {
        await mongoose.connect(config.get("dbURL"))

        app.listen(PORT, () => {
            console.log("Server started on port ", PORT)
        });

        app.get('/api/getMembers', (res, req)=>{
            res.json('/dataBase/members.json')
        });
    } catch (e) {
        
    }
}

start();



