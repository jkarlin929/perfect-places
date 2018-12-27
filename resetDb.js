const { sequelize } = require('./models');

async function resetDb() {
  try {
    await sequelize.sync({force: true})
  } catch(e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

resetDb();
