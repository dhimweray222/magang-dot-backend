const {
  User
} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class AuthController {
  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      if (!user) {
        throw {
          status: 401,
          message: 'Invalid email or password'
        }
      }
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({
          id: user.id,
          email: user.email
        }, 'qweqwe')

        res.status(200).json({
          token
        })
      } else {
        throw {
          status: 401,
          message: 'Invalid email or password'
        }
      }
    } catch (err) {
      next(err)
    }
  }
  static async register(req, res, next) {
    try {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.password, salt)

      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user) {
        throw {
          status: 400,
          message: 'Email already used'
        }
      }

      await User.create({
        email: req.body.email,
        password: hash
      })
      res.status(200).json({
        message: "Successfully create user"
      })
    } catch (err) {
      next(err)
    }
  }
  static async update(req, res, next) {
    try {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.password, salt)

      let findUser = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (findUser == null) {
        res.status(404).send({
          message: "Data user is not found",
          status: 404,
        })
      } else {
        await User.update({
          password: hash
        }, {
          where: {
            email: req.body.email
          }
        })
        res.status(200).send({
          message: "Successfully update data user",
          status: 200,
        })
      }
    } catch (err) {
      next(err)
    }
  }
  static async delete(req, res, next) {
    try {
      let findUser = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (findUser == null) {
        res.status(404).send({
          message: "Data user is not found",
          status: 404,
        })
      } else { 
        await User.destroy({
          where: {
            email:req.body.email
          }
        })
        res.status(200).json({
          message:"Successfully delete user"
        })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AuthController