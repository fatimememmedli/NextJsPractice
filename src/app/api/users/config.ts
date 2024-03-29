const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  console.log("salam");
  console.log(process.env.MONGODB_URI);
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("qosuldu");
    })
    .catch((err) => {
      console.log("error", err);
    });

  // use `await mongoose.connect('mongodb://user:password@127).0.0.1:27017/test');` if your database has auth enabled
}

export default main;
