import express from 'express';
const router = express()
import fs from "fs"
import path from "path"
import {renderToString} from "react-dom/server"
import Home from "./components/Home"
import SSR from "./components/SSR"

router.get('/home', (req, res, next) => {
  if (req.params.key == 'home' || req.url == '/home') {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
      return res.send(data.replace('<div dir="rtl" id="root"></div>', `<div dir="rtl" id="root">${renderToString(<Home/>)}</div>`));
    })
  } else next()
});


router.get('/ssr', (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
      return res.send(data.replace('<div dir="rtl" id="root"></div>', `<div dir="rtl" id="root">${renderToString(<SSR/>)}</div>`));
    })
});


export default router