const express = require('express');
const router = require("express").Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
        res.render('movies', {movies});
        })
        .catch(error => {
            console.log('error movie list: ', error);
            next(error);
        });
});


module.exports = router;