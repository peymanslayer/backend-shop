const {database}=require('./database');
const { secret } = require('./jwtSecret');

module.exports={
  database,
  secret
}