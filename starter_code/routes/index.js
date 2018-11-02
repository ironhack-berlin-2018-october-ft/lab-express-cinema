const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
}); 

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find().then(moviesFromDb=> {
    res.render('movies', {movies:moviesFromDb});
  })
});

// The detail page of a movie
router.get('/movies/:id', (req,res,next) => {
  let id = req.params.id
  Movie.findById(id)
    .then(movieFromDb => {
      let data = {
        movie: movieFromDb
      }
      res.render('movie-detail', data)
    })
})


module.exports = router;
