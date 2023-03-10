const convert = require('xml-js');
const fs = require("fs");

// reads file from upper folder
const xml = fs.readFileSync('../metadata.xml', { encoding: 'utf8', flag: 'r' });
console.log(xml);
const xmlData = convert.xml2json(xml, {
    compact: true,
    space: 4
});
// use this to write a new file
// fs.writeFileSync("metadata.json", xmlData)
console.log(xmlData);