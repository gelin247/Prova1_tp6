const service = require('../service/subject.service');

const ValidMovie = (res, movie) => {
    if (!movie.id) {
        res.status(400).send('Id is mandatory')
        return false;
    }
    if (!movie.title) {
        res.status(400).send('Title is mandatory')
        return false;
    }
    return true;
}

const create = (req, res) => {
    const subject = req.body;
    if (res, subject) {
        service.create(subject);
        res.status(201).send('subject created successfully');
    } else {
        res.status(400).send('Invalid data');
    }
}



const getAll = (req, res) => {
    res.status(200).send(service.getAll());
}

const update = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const updatemovie = service.getById(id);
    if (ValidMovie(res, data) && updatemovie) {
        service.updateMovie(id, data);
        res.status(200).send('Movie updated successfully');
    } else {
        if (!updatemovie) {
            res.status(404).send('Movie not found');
        } else {
            res.status(400).send('Invalid data');
        }
    }
}

const getById = (req, res) => {
    const id = req.params.id;
    const subject = service.getById(id);
    if (subject) {
        res.status(200).send(subject);
    } else {
        res.status(404).send('subject not found');
    }
}


const remove = (req, res) => {
    const id = req.params.id;
    const movieToDelete = service.getById(id);
    if (movieToDelete) {
        service.remove(id);
        res.status(204).send('Movie deleted successfully');
    } else {
        res.status(404).send('Movie not found');
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
