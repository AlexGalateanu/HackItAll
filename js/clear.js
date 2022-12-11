const editJsonFile = require("edit-json-file");
let file = editJsonFile(`./information.json`);
file.set("planet", "Earth");
file.set("city\\.name", "anytown");
file.set("name.first", "Johnny");
file.set("name.last", "B.");
file.set("is_student", false);