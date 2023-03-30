module.exports = {
  use_env_variable: true,
  development: {
    username: "elvisiraguha",
    password: null,
    database: "verto",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "elvisiraguha",
    password: null,
    database: "verto",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "POSTGRES_USER",
    password: "POSTGRES_PASSWORD",
    database: "POSTGRES_DB",
    host: "POSTGRES_HOST",
    dialect: "postgres",
  },
};
