import express from 'express';
const router = express()
import fs from "fs"
import path from "path"
import { renderToString } from "react-dom/server"
import { Helmet } from 'react-helmet';
import ServerContainer from "@react-navigation/native/lib/commonjs/ServerContainer"

import Home from "../components/Home"
import SSR from "../components/SSR"

const appRoot = (pathName) => path.join(__dirname, pathName)
const indexPath = appRoot("../build/index.html")


function Application(Component, req, res, next) {
  let html = renderToString(
    <ServerContainer location={{ pathname: req.url, search: req.query }}  >
      <Component />
    </ServerContainer>
  )
  const helmet = Helmet.renderStatic()
  let index = fs.readFileSync(indexPath, "utf8")
  return res.send(
    index
      .replace('<div dir="rtl" id="root"></div>', `<div id="root">${html}</div>`)
      .replace("</head>", `${helmet.meta.toString()}</head>`)
      .replace("</head>", `${helmet.script.toString()}</head>`)
      .replace("</head>", `${helmet.title.toString()}</head>`)
  )
}



router.get('/home', (req, res, next) => {
  Application(Home, req, res, next)
});


router.get('/ssr', (req, res, next) => {
  Application(SSR, req, res, next)
});


export default router