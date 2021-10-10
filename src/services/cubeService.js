const Cube = require('../models/Cube.js');

const cubeDb = [{
    name: 'mirror rubik cube',
    description: 'mirror rubik cube',
    imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._SL1000_.jpg',
    difficulty: '4'
}];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll,
};

module.exports = cubeService;