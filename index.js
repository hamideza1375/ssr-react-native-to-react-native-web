global.__DEV__ = true


require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['module:metro-react-native-babel-preset'],
    extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],
      plugins: [
        ["module-resolver", {
          "root": ["."],
          "alias": {
            "react-native": "react-native-web",
          }
        }],
      ]
})

require('./server')