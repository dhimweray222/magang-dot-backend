module.exports = {
  "development": {
    "username": "postgres",
    "password": "dimasslalu123",
    "database": "binar-todo-app-1",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "dimasslalu123",
    "database": "binar-todo-app-1",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

  "production": {
  use_env_variable : 'DATABASE_URL',
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl : {
        require : true,
        rejectUnauthorized : false
      }
    }
  }
};