import express from 'express';
const router = express()
import fs from "fs"
import path from "path"
import { renderToString } from "react-dom/server"
import { Helmet } from 'react-helmet';
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer"

import App from "./App"

const appRoot = (pathName) => path.join(__dirname, pathName)
const indexPath = appRoot("../build/index.html")

module.exports = function Application(req, res, next) {
  const location = new URL(req.url, 'http:localhost:3001')
  let html = renderToString(
    <NavigationContainer>
      <App location={location} />
    </NavigationContainer>
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

export default router