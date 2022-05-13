const Movie = require("./movieModel");

// CREATE operation POST
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie})
    }   catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

// READ operation GET
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find( req.body );
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

// READ operation GET
exports.findMovie = async (req, res) => {
    try {
        const movies = await Movie.findOne( req.body );
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

// UPDATE operation PUT
exports.updateMovie = async (req, res, filter) => {
    try {
        const filter = { title: req.body.title }
        const update = { actors: req.body.actors }
        const updateMovie = await Movie.updateOne(filter, update );
        res.status(200).send(`movie ${req.body.title} updated with ${req.body.actors}`);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

// DELETE operation DELETE
exports.deleteOneMovie = async (req, res) => {
    const b = req.body;
    const id = req.params.id;
    try {
        const movie = await Movie.findOne({title: b.title});
        // check movie exists in database
        if(!movie){
          res.status(404).send({ message: `movie not found.` });
        } else {
          // if movie exists then delete movie
          await movie.deleteOne(id);
          console.log(`movie ${movie.title} deleted`);
          res.status(202).send({ message: `movie ${movie.title} deleted` });
        }
    
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    };
}