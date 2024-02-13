// global.__DEV__ = true


require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['module:metro-react-native-babel-preset'],
  extensions: ["ts","tsx",".es6", ".es", ".jsx", ".js", ".mjs", ".cjs"],
  plugins: [
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "react-native": "react-native-web",
        // "@react-navigation/native": "@react-navigation/native/lib/commonjs",
      }
    }],
  ],

})

require('./server')