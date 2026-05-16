import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "src");

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(tsx|ts|jsx|js)$/.test(name)) continue;
    let text = fs.readFileSync(full, "utf8");
    const original = text;
    text = text.replaceAll("</mot" + "ion>", "</d" + "iv>");
    text = text.replaceAll("<mot" + "ion", "<d" + "iv");
    if (text !== original) {
      fs.writeFileSync(full, text);
      console.log("fixed", full);
    }
  }
}

walk(root);
