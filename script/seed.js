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
      username: "Tomkin Winkle",
      password: "DlBh2fxZ84",
      email: "twinkle0@godaddy.com",
      type: "customer",
    }),
    User.create({
      username: "Karoly Fills",
      password: "KWWMuauWW9",
      email: "kfills1@sbwire.com",
      type: "customer",
    }),
    User.create({
      username: "Thurstan Gruby",
      password: "bPIMNKb",
      email: "tgruby2@upenn.edu",
      type: "customer",
    }),
    User.create({
      username: "Robby Eggleson",
      password: "yG1zRI",
      email: "reggleson3@ning.com",
      type: "customer",
    }),
    User.create({
      username: "Kaja Stracey",
      password: "qq44IhSGy",
      email: "kstracey4@prnewswire.com",
      type: "customer",
    }),
    User.create({
      username: "Darrick Clows",
      password: "kQbl8oG",
      email: "dclows5@seattletimes.com",
      type: "customer",
    }),
    User.create({
      username: "Dew Ledwith",
      password: "o9XVzS",
      email: "dledwith6@answers.com",
      type: "customer",
    }),
    User.create({
      username: "Dennis Saggers",
      password: "IlYGT41nFJT",
      email: "dsaggers7@answers.com",
      type: "customer",
    }),
    User.create({
      username: "Jesus MacRorie",
      password: "NItYo47e01k",
      email: "jmacrorie8@csmonitor.com",
      type: "customer",
    }),
    User.create({
      username: "Antin Brood",
      password: "O8PHgkfGNfiS",
      email: "abrood9@miibeian.gov.cn",
      type: "customer",
    }),
    User.create({
      username: "Ericha Joffe",
      password: "6e85n5jl2HT7",
      email: "ejoffea@go.com",
      type: "customer",
    }),
    User.create({
      username: "Shelia HURLeston",
      password: "5IGRxF",
      email: "shURLestonb@naver.com",
      type: "customer",
    }),
    User.create({
      username: "Janna Craigg",
      password: "meFIUnMC6fL",
      email: "jcraiggc@cafepress.com",
      type: "customer",
    }),
    User.create({
      username: "Tammy Stanesby",
      password: "aLZLVCJO",
      email: "tstanesbyd@github.io",
      type: "customer",
    }),
    User.create({
      username: "Zonnya Dulinty",
      password: "Y4PiMO",
      email: "zdulintye@tamu.edu",
      type: "customer",
    }),
    User.create({
      username: "Sterne Prangnell",
      password: "amyQCr5w5A7c",
      email: "sprangnellf@newyorker.com",
      type: "customer",
    }),
    User.create({
      username: "Hailey McCombe ",
      password: "K1cZ5UkZ2Xz",
      email: "hmcg@hibu.com",
      type: "customer",
    }),
    User.create({
      username: "Leshia Milesop",
      password: "WYqhzSeix",
      email: "lmilesoph@goodreads.com",
      type: "customer",
    }),
    User.create({
      username: "Shannah Bernardino",
      password: "K0nZDcvsDXxL",
      email: "sbernardinoi@shinystat.com",
      type: "customer",
    }),
    User.create({
      username: "Hildegarde Sorbey",
      password: "IznGUjk",
      email: "hsorbeyj@odnoklassniki.ru",
      type: "customer",
    }),
    User.create({
      username: "Sibylle Rounsefell",
      password: "eXARqIcBhKTJ",
      email: "srounsefellk@microsoft.com",
      type: "customer",
    }),
    User.create({
      username: "Roxy Skeldinge",
      password: "P2PYJukMGkz",
      email: "rskeldingel@harvard.edu",
      type: "customer",
    }),
    User.create({
      username: "Hernando Bonnett",
      password: "wj3AbGX",
      email: "hbonnettm@amazon.co.uk",
      type: "customer",
    }),
    User.create({
      username: "Abigale Pedlingham",
      password: "wnFWUqhTfL2M",
      email: "apedlinghamn@huffingtonpost.com",
      type: "customer",
    }),
    User.create({
      username: "Ranee Yoxall",
      password: "2R2QIKGs8MkC",
      email: "ryoxallo@msn.com",
      type: "customer",
    }),
    User.create({
      username: "Paddie LeFranc ",
      password: "eQdKz73O",
      email: "plep@usa.gov",
      type: "customer",
    }),
    User.create({
      username: "Connor Hickisson",
      password: "3HczDg",
      email: "chickissonq@loc.gov",
      type: "customer",
    }),
    User.create({
      username: "Merill McIsaac",
      password: "9YjsNVtZm",
      email: "mmcisaacr@quantcast.com",
      type: "customer",
    }),
    User.create({
      username: "Cinderella Veeler",
      password: "eOLGiXgKlYL",
      email: "cveelers@cnn.com",
      type: "customer",
    }),
    User.create({
      username: "Violette Drawmer",
      password: "cHhXs9",
      email: "vdrawmert@vimeo.com",
      type: "customer",
    }),
    User.create({
      username: "Andree Ettery",
      password: "hNXUp9G97K8",
      email: "aetteryu@ebay.com",
      type: "customer",
    }),
    User.create({
      username: "Klarika Mirams",
      password: "9riSve",
      email: "kmiramsv@a8.net",
      type: "customer",
    }),
    User.create({
      username: "Stevana Dibbe",
      password: "7cLUdcL7up",
      email: "sdibbew@unblog.fr",
      type: "customer",
    }),
    User.create({
      username: "Mayne Badsworth",
      password: "4TdDBSH9N",
      email: "mbadsworthx@feedburner.com",
      type: "customer",
    }),
    User.create({
      username: "Odele Isacsson",
      password: "TpK14K",
      email: "oisacssony@bravesites.com",
      type: "customer",
    }),
    User.create({
      username: "Justis Mabbutt",
      password: "goykc71s",
      email: "jmabbuttz@hubpages.com",
      type: "customer",
    }),
    User.create({
      username: "Osmond Lintall",
      password: "Du2X7wyhlBJ2",
      email: "olintall10@auda.org.au",
      type: "customer",
    }),
    User.create({
      username: "Francine Charette",
      password: "rasOBF08n",
      email: "fcharette11@csmonitor.com",
      type: "customer",
    }),
    User.create({
      username: "Clarita Jacks",
      password: "GhFyAc",
      email: "cjacks12@earthlink.net",
      type: "customer",
    }),
    User.create({
      username: "Maximo Goodbar",
      password: "28EeTaX",
      email: "mgoodbar13@google.ru",
      type: "customer",
    }),
    User.create({
      username: "Milt Pelfer",
      password: "Hid6RFQop",
      email: "mpelfer14@skype.com",
      type: "customer",
    }),
    User.create({
      username: "Hobey Shory",
      password: "0du7ar",
      email: "hshory15@arstechnica.com",
      type: "customer",
    }),
    User.create({
      username: "Geneva Leemans",
      password: "Qvf1KoQrTTMY",
      email: "gleemans16@rediff.com",
      type: "customer",
    }),
    User.create({
      username: "Kerri Tembey",
      password: "7Is1LZo",
      email: "ktembey17@loc.gov",
      type: "customer",
    }),
    User.create({
      username: "Amandi Mathieu",
      password: "HiRwolWNMVNG",
      email: "amathieu18@addthis.com",
      type: "customer",
    }),
    User.create({
      username: "Roldan Fogarty",
      password: "evM8xhPx",
      email: "rfogarty19@chronoengine.com",
      type: "customer",
    }),
    User.create({
      username: "Gayle Padson",
      password: "LnDyGleeNQsb",
      email: "gpadson1a@instagram.com",
      type: "customer",
    }),
    User.create({
      username: "Cornelius Lethardy",
      password: "ejqMtE",
      email: "clethardy1b@merriam-webster.com",
      type: "customer",
    }),
    User.create({
      username: "Shel Balharry",
      password: "XeKup9C",
      email: "sbalharry1c@sbwire.com",
      type: "customer",
    }),
    User.create({
      username: "Nappie Peatt",
      password: "vRWq5gKw",
      email: "npeatt1d@blinklist.com",
      type: "customer",
    }),
    User.create({
      username: "Christoper Scole",
      password: "WhnISlA",
      email: "cscole1e@issuu.com",
      type: "customer",
    }),
    User.create({
      username: "Martyn Orchart",
      password: "w0p5wMRjjc",
      email: "morchart1f@noaa.gov",
      type: "customer",
    }),
    User.create({
      username: "Gennifer Andreasen",
      password: "3ATbvkiS",
      email: "gandreasen1g@feedburner.com",
      type: "customer",
    }),
    User.create({
      username: "Shane McDonough",
      password: "hQhfCK5gPqi",
      email: "smcdonough1h@theglobeandmail.com",
      type: "customer",
    }),
    User.create({
      username: "Gillie Knell",
      password: "isRsehj",
      email: "gknell1i@boston.com",
      type: "customer",
    }),
    User.create({
      username: "Diandra Brewis",
      password: "sviHW5j3H3yG",
      email: "dbrewis1j@columbia.edu",
      type: "customer",
    }),
    User.create({
      username: "Nickie Ianitti",
      password: "Q4YA0ImrOeHs",
      email: "nianitti1k@ftc.gov",
      type: "customer",
    }),
    User.create({
      username: "Johnette Penrice",
      password: "Z1CuGkUz3Gu",
      email: "jpenrice1l@elegantthemes.com",
      type: "customer",
    }),
    User.create({
      username: "Lise Lowre",
      password: "O31wbp5FrbKs",
      email: "llowre1m@imageshack.us",
      type: "customer",
    }),
    User.create({
      username: "Cyrus Daile",
      password: "S2PPXA",
      email: "cdaile1n@alibaba.com",
      type: "customer",
    }),
    User.create({
      username: "Eilis Filasov",
      password: "KfuvpoV3s",
      email: "efilasov1o@reverbnation.com",
      type: "customer",
    }),
    User.create({
      username: "Diena Tulleth",
      password: "iD5MPZrOYUn",
      email: "dtulleth1p@zdnet.com",
      type: "customer",
    }),
    User.create({
      username: "Shaylah Stearne",
      password: "0dV8r84YCf41",
      email: "sstearne1q@chicagotribune.com",
      type: "customer",
    }),
    User.create({
      username: "Belvia OKielt",
      password: "NKuuv79",
      email: "bokielt1r@google.com.br",
      type: "customer",
    }),
    User.create({
      username: "Ranee Benedite",
      password: "N8gFsI",
      email: "rbenedite1s@nationalgeographic.com",
      type: "customer",
    }),
    User.create({
      username: "Imogene Delnevo",
      password: "apA9lnCT2PIJ",
      email: "idelnevo1t@sphinn.com",
      type: "customer",
    }),
    User.create({
      username: "Cora MacAree",
      password: "AGeqGepEH",
      email: "cmacaree1u@seattletimes.com",
      type: "customer",
    }),
    User.create({
      username: "Cullan Drogan",
      password: "BUH3v7IborC0",
      email: "cdrogan1v@ocn.ne.jp",
      type: "customer",
    }),
    User.create({
      username: "Lutero Kardos-Stowe",
      password: "uQJlrQyc",
      email: "lkardosstowe1w@shutterfly.com",
      type: "customer",
    }),
    User.create({
      username: "Alissa Matousek",
      password: "MRCYzQ",
      email: "amatousek1x@princeton.edu",
      type: "customer",
    }),
    User.create({
      username: "Elisha Couthard",
      password: "WEqavVx",
      email: "ecouthard1y@reference.com",
      type: "customer",
    }),
    User.create({
      username: "Fidelio Erricker",
      password: "hUQPtw62x0ld",
      email: "ferricker1z@forbes.com",
      type: "customer",
    }),
    User.create({
      username: "Rockie Greatbatch",
      password: "2kxEdHQMXG",
      email: "rgreatbatch20@ft.com",
      type: "customer",
    }),
    User.create({
      username: "Candida Rollinshaw",
      password: "3jbPfl27rG",
      email: "crollinshaw21@ibm.com",
      type: "customer",
    }),
    User.create({
      username: "Domeniga Bartkiewicz",
      password: "9kKsM6I7",
      email: "dbartkiewicz22@canalblog.com",
      type: "customer",
    }),
    User.create({
      username: "Abeu Glanester",
      password: "nOrlTGVAsE3G",
      email: "aglanester23@baidu.com",
      type: "customer",
    }),
    User.create({
      username: "Chiarra Philcock",
      password: "JFzkChsfNj",
      email: "cphilcock24@over-blog.com",
      type: "customer",
    }),
    User.create({
      username: "Bonny Waadenburg",
      password: "5vjyZAD",
      email: "bwaadenburg25@a8.net",
      type: "customer",
    }),
    User.create({
      username: "Seward Tern",
      password: "29eUpmxJyx",
      email: "stern26@parallels.com",
      type: "customer",
    }),
    User.create({
      username: "Pebrook Harbisher",
      password: "C4Q2JLRsd",
      email: "pharbisher27@redcross.org",
      type: "customer",
    }),
    User.create({
      username: "Arlee Hallifax",
      password: "YU0tYRb12g9",
      email: "ahallifax28@livejournal.com",
      type: "customer",
    }),
    User.create({
      username: "Dawn Stollman",
      password: "fmnW1J2vIM",
      email: "dstollman29@twitter.com",
      type: "customer",
    }),
    User.create({
      username: "Carmelle Lenormand",
      password: "wFk98NFDwI",
      email: "clenormand2a@wsj.com",
      type: "customer",
    }),
    User.create({
      username: "Demetris McElmurray",
      password: "ZZyKZlE4BSJv",
      email: "dmcelmurray2b@blogger.com",
      type: "customer",
    }),
    User.create({
      username: "Reiko Whitmarsh",
      password: "gSShQkujoOrB",
      email: "rwhitmarsh2c@ucsd.edu",
      type: "customer",
    }),
    User.create({
      username: "Hillary Blaxley",
      password: "84bd9sgr",
      email: "hblaxley2d@japanpost.jp",
      type: "customer",
    }),
    User.create({
      username: "Adelind Hearle",
      password: "f02lH5gYd",
      email: "ahearle2e@sitemeter.com",
      type: "customer",
    }),
    User.create({
      username: "Leontyne Tebbet",
      password: "2ve1LL",
      email: "ltebbet2f@usda.gov",
      type: "customer",
    }),
    User.create({
      username: "Ed Gori",
      password: "YLlzdtgLP",
      email: "egori2g@mit.edu",
      type: "customer",
    }),
    User.create({
      username: "Blake Jewell",
      password: "nK13030cIoTG",
      email: "bjewell2h@cbslocal.com",
      type: "customer",
    }),
    User.create({
      username: "Winn Snazel",
      password: "tudAmEichx",
      email: "wsnazel2i@posterous.com",
      type: "customer",
    }),
    User.create({
      username: "Simone Menendez",
      password: "eBlGTQyPSOe",
      email: "smenendez2j@creativecommons.org",
      type: "customer",
    }),
    User.create({
      username: "Carena Strutz",
      password: "tuUG8gfK",
      email: "cstrutz2k@wunderground.com",
      type: "customer",
    }),
    User.create({
      username: "Corrie Jefferson",
      password: "22bHUeyZTN",
      email: "cjefferson2l@mysql.com",
      type: "customer",
    }),
    User.create({
      username: "Keen Gussin",
      password: "NfCluanqxW",
      email: "kgussin2m@merriam-webster.com",
      type: "customer",
    }),
    User.create({
      username: "Leigh Cosgrave",
      password: "y0qCfVHLdC",
      email: "lcosgrave2n@forbes.com",
      type: "customer",
    }),
    User.create({
      username: "Gigi Bofield",
      password: "pCZzsmvr7B",
      email: "gbofield2o@indiatimes.com",
      type: "customer",
    }),
    User.create({
      username: "Minna Leathe",
      password: "sHoQ1uLH",
      email: "mleathe2p@amazonaws.com",
      type: "customer",
    }),
    User.create({
      username: "Carlee Stallan",
      password: "ukJbu0",
      email: "cstallan2q@answers.com",
      type: "customer",
    }),
    User.create({
      username: "Beverly Fincke",
      password: "uVQoIaDH",
      email: "bfincke2r@shinystat.com",
      type: "customer",
    }),
  ]);

  //Creating Products

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
