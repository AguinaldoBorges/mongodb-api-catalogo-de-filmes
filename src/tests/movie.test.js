const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

beforeAll(async () => {
    await mongoose.connect('mongodb+srv://root:1234@guinanews.lftlup9.mongodb.net/?retryWrites=true&w=majority&appName=GuinaNews', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterEach(async () => {
    await Movie.deleteMany();
});

afterAll(async () => {
    await mongoose.connection.close();
});

test('deve criar um novo filme', async () => {
    const newMovie = {
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi',
        releaseDate: '2010-07-16',
    };

    const response = await request(app)
        .post('/movies')
        .send(newMovie)
        .expect(201);

    expect(response.body.title).toBe(newMovie.title);
});

test('deve obter todos os filmes', async () => {
    await Movie.create({ title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: '2010-07-16' });

    const response = await request(app).get('/movies').expect(200);

    expect(response.body.length).toBe(1);
});

test('deve obter um filme pelo id', async () => {
    const movie = await Movie.create({ title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: '2010-07-16' });

    const response = await request(app).get(`/movies/${movie._id}`).expect(200);

    expect(response.body.title).toBe(movie.title);
});

test('deve atualizar um filme', async () => {
    const movie = await Movie.create({ title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: '2010-07-16' });

    const updatedMovie = { title: 'Inception Updated' };

    const response = await request(app)
        .patch(`/movies/${movie._id}`)
        .send(updatedMovie)
        .expect(200);

    expect(response.body.title).toBe(updatedMovie.title);
});

test('deve deletar um filme', async () => {
    const movie = await Movie.create({ title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: '2010-07-16' });

    await request(app).delete(`/movies/${movie._id}`).expect(200);

    const foundMovie = await Movie.findById(movie._id);
    expect(foundMovie).toBeNull();
});
