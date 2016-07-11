	/**
 * Created by Rampage on 7/11/2016.
 */


var path = require('path');

var express = require('express');

const app = express();

    app.get('*',function (req,res) {
        res.send("hello");
    });

const port =3000;
    app.listen(port,()=> console.log('running on port'+port));





