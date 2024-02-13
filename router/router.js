import express from 'express';
const router = express()
import fs from "fs"
import path from "path"
import { renderToString } from "react-dom/server"
import { Helmet } from 'react-helmet';
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer"
import ServerContainer from "@react-navigation/native/lib/commonjs/ServerContainer"

import App from "../components/App"

const appRoot = (pathName) => path.join(__dirname, pathName)
const indexPath = appRoot("../build/index.html")


function Application(req, res, next) {
  let html = renderToString(
    <ServerContainer location={{ pathname: req.url, search: req.query }}  >
      <NavigationContainer>
      <App url={req.url} />
    </NavigationContainer>
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
  Application(req, res, next)
});


router.get('/ssr', (req, res, next) => {
  Application(req, res, next)
});


export default router