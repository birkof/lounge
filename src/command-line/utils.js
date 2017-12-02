"use strict";

const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");

let home;

class Utils {
	static extraHelp() {
		[
			"",
			"",
			"  Environment variable:",
			"",
			`    THELOUNGE_HOME   Path for all configuration files and folders. Defaults to ${colors.green(Utils.defaultHome())}.`,
			"",
		].forEach((e) => console.log(e)); // eslint-disable-line no-console
	}

	static defaultHome() {
		if (home) {
			return home;
		}

		const distConfig = path.resolve(path.join(
			__dirname,
			"..",
			"..",
			".thelounge_home"
		));

		home = fs.readFileSync(distConfig, "utf-8").trim();

		return home;
	}
}

module.exports = Utils;
