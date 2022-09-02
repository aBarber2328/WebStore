const { db } = require("./db");
const PORT = process.env.PORT || 8080;
const app = require("./app");
const seed = require("../script/seed");

const init = async () => {
  try {
    console.log(process.env);
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();

// "test": "echo \"Error: no test specified\" && exit 1",
// "start": "node server",
// "start-dev": "JWT=secret webpack -w & nodemon server",
// "seed": "node script/seed.js"
