
import express from "express"
import fs from "fs"
import path from "path"
import router from "./router/router"
const app = express();
app.use(express.static(path.resolve('./', "build")));
app.use(router)
app.listen(3001, () => { console.log("App is launched to port 3001") });
app.use((req, res) => {
	const data = fs.readFileSync(path.resolve("./build/index.html"), "utf-8")
	res.send(data.replace('<div dir="rtl" id="root"></div>', `<div dir="rtl" id="root"><h2 style="color:red;margin:0 auto;width:100px" >404</h2></div>`));
});

