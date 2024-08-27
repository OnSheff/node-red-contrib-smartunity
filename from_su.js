const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
	const subflowFile = path.join(__dirname,"json/from_su.json");
	const subflowContents = fs.readFileSync(subflowFile);
	const subflowJSON = JSON.parse(subflowContents);
	RED.nodes.registerSubflow(subflowJSON);
}
