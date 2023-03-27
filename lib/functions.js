require("../config");
const fs = require("fs");
const cfonts = require("cfonts");
const moment = require("moment-timezone");
const { color } = require("./color");

const banner = cfonts.render(botName, {
  font: "block",
  align: "center",
  colors: ["cyan", "white"],
});

const getGroupAdmins = (participants) => {
  admins = [];
  for (let i of participants) {
    if (i.admin == "admin") admins.push(i.id);
    if (i.admin == "superadmin") admins.push(i.id);
  }
  return admins;
};

const time2 = moment().tz(timezone).format("HH:mm:ss");
if (time2 > "00:00:00") {
  var time = "♧ Buena madrugada ♧";
}
if (time2 > "05:30:00") {
  var time = "♧ Buenos dias ♧";
}
if (time2 > "12:00:00") {
  var time = "♧ buenas tardes ♧";
}
if (time2 > "19:00:00") {
  var time = "♧ Buenas noches ♧";
}

const banner2 = cfonts.render(`${time}`, {
  font: "console",
  align: "center",
});

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const getExtension = async (type) => {
  return await mimetype.extension(type);
};

const isUrl = (url) => {
	return url.match(
	  new RegExp(
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
		"gi"
	  )
	);
  };

module.exports = {
  banner,
  banner2,
  getGroupAdmins,
  getRandom,
  getExtension,
  isUrl,
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`${color(`Atualizando: ${__filename} \n ~>𝑲𝒀𝑼𝑹𝑨-𝑩𝑶𝑻`, "cyan")}`);
  delete require.cache[file];
  require(file);
});
