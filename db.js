const { Pool } = require('pg');

const pool = new Pool({
  user: 'avd',
  password: 'avd',
  host: 'localhost',
  database: 'test-api',
  port: 5432,
});

module.exports = pool;