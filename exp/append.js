const fs = require("fs");
const { exec } = require("child_process");
const stream = require("stream");

const fileName = "new.txt";
const data = "lolololololololol\n";

const rStream = fs.createReadStream("read.txt");
const wStream = fs.createWriteStream(fileName, { flags: "a" });

rStream.pipe(wStream);

// wStream.write(data, (err) => {
// 	err ? err : console.log("data appended successfully\n");

// 	exec(`cat ${fileName}`, (err, stdout, stderr) => {
// 		console.log(stdout);
// 	});
// });
//