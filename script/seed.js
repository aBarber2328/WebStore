"use strict";

const fs = require("fs");
const { parse } = require("csv-parse");

const {
  db,
  models: { User, Product, OrderSession, ProductOrderSession },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  //Creating Users, carts automatically made
  const users = await Promise.all([
    User.create({
      username: "AB",
      password: "abc123",
      email: "ab@godaddy.com",
      type: "siteAdmin",
    }),
    User.create({
      username: "KY",
      password: "abc123",
      email: "ky@godaddy.com",
      type: "siteAdmin",
    }),
  ]);

  // Start of Creating Products

  const emojis = [];
  const parseProviders = () => {
    return new Promise((accept, reject) => {
      fs.readFile(`${__dirname}/full_emoji.csv`, (error, data) => {
        data
          .toString()
          .split("\n")
          .forEach((line) => {
            const row = line.split(",");
            emojis.push([row[1], row[2], row[3]]);
          });

        emojis.shift();

        accept();
      });
    });
  };

  await (async () => {
    console.log("Start Update Product:");
    await parseProviders();
    for (let i = 0; i < emojis.length; i++) {
      const [img, unicode, name] = emojis[i];

      if (!img || !unicode || !name) continue;

      await Product.create({
        name: name,
        price: Math.floor(Math.random() * 100),
        imageURL: img,
        stockQuantity: 100,
        description: unicode,
      });
    }
    console.log("Complete Update Product!");
  })();

  // End of creating products

  // seeding has completed
  //console.log(`seeded ${users.length} users, ${Product.length} Products,`);

  console.log(`seeded successfully`);

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
