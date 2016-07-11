	/**
 * Created by Rampage on 7/11/2016.
 */


import express from 'express'
import db from 'sequelize-connect'


async function connect () {
    await db.connect('andvote_schema','admin','root')

}

(async function () {
    await connect()
    const app = express()
    const port =3000
    app.listen(port,()=> console.log('Running on port '+port))
})()









