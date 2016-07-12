	/**
 * Created by Rampage on 7/11/2016.
 */


import express from 'express'
import db from 'sequelize-connect'
import path from 'path'


    async function demo() {
        db.discover = path.join(__dirname, 'models')
        db.matcher = function shouldImportModel (modelFileName) {
            return true
        }
        await db.connect('andvote_schema', 'root', 'root')
    }


    (async function () {
    try{
        await demo()
    } catch(err){
        console.log("An error occured connecting to database "+err);
    }
    const app = express()
    const port =3000
    app.listen(port,()=> console.log('Running on port '+port))

})()


   /* var Connection 		= require('sequelize-connect');

    var discover = [__dirname + '/models'];
    var orm = new Connection(
        'andvote_schema',
        'root',
        '',
        {
            dialect: "mysql",
            port:    3306
        },
        discover,
    )
        .then(function(instance){
            console.log("established")
        });*/








