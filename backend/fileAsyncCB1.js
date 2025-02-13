const fs = require("fs");

function myReadFile(fileName) {
  try {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  } catch (err) {
    console.log(err.message);
  }
}