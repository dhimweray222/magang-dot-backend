const request = require('supertest')
const {
  sequelize
} = require('../models/index')
const {
  queryInterface
} = sequelize
const bcrypt = require('bcryptjs')
const app = require('../app')

beforeEach(async () => {
  // memasukkan data dummy ke database testing
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync("Qweqwe123", salt)
  await queryInterface.bulkInsert('Users', [{
    email: "lifan@mail.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  }])
})

afterEach(async () => {
  await queryInterface.bulkDelete('Users', {}, {
    truncate: true,
    restartIdentity: true
  })
})

describe('Login User API', () => {
  it('Success', (done) => {
    request(app)
      .post('/user/login')
      .send({
        email: "lifan@mail.com",
        password: "Qweqwe123"
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(200)
          done()
        }
      })
  })

  it('Wrong password', (done) => {
    request(app)
      .post('/user/login')
      .send({
        email: "lifan@gmail.com",
        password: "Qweqwe"
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(401)
          done()
        }
      })
  })

  it('Wrong email', (done) => {
    request(app)
      .post('/user/login')
      .send({
        email: "lifan@mail.co",
        password: "Qweqwe123"
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(401)
          done()
        }
      })
  })
})

describe('Register User API', () => {
  it('Success', (done) => {
    request(app)
      .post('/user/register')
      .send({
        email: "lifana@mail.com",
        password: "Qweqwe123"
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(200)
          done()
        }
      })
  })
  it('Email already user', (done) => {
    request(app)
      .post('/user/register')
      .send({
        email: "lifan@mail.com",
        password: "Qweqwe123"
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(400)
          expect(res.body).toHaveProperty('message')
          expect(res.body.message).toBe('Email already used')
          done()
        }
      })
  })
})

describe('Update User API', () => {
  it('Success', (done) => {
    request(app)
      .put('/user/update')
      .send({
        email: "lifan@mail.com",
        password:'123'
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(200)
          done()
        }
      })
  })
  it('Data user not found', (done) => {
    request(app)
      .put('/user/update')
      .send({
        email: "lifanasda@mail.com",
        password: "Qweqwe123"
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(404)
          expect(res.body).toHaveProperty('message')
          expect(res.body.message).toBe('Data user is not found')
          done()
        }
      })
  })
})

describe('Delete User API', () => {
  it('Success', (done) => {
    request(app)
      .delete('/user/delete')
      .send({
        email: "lifan@mail.com",
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(200)
          done()
        }
      })
  })
  it('Data user not found', (done) => {
    request(app)
      .delete('/user/update')
      .send({
        email: "lifanasda@mail.com",
      })
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(404)
          done()
        }
      })
  })
})