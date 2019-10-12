Convert `.cson` files to ES6 modules:

```js
// import a single property from a CSON file,
// discarding the rest
import { serverPort } from "./config.cson"
console.log( `Server port: ${serverPort}` )

// import the whole file as an object
import cfg from "./config.cson"
console.log( `Server port: ${cfg.serverPort}` )
```


## Installation

Using Yarn (recommended)

```bash
yarn add --dev rollup-plugin-cson
```

Or NPM

```bash
npm install --save-dev rollup-plugin-cson
```


## Usage

```js
// rollup.config.js
import cson from "rollup-plugin-cson"

export default {
  input: "src/main.mjs",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    exports: "named"
  },

  plugins: [
    cson({
      // All CSON files will be parsed by default,
      // but you can also specifically include/exclude files
      include: "node_modules/**",
      exclude: [ "node_modules/foo/**", "node_modules/bar/**" ],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to "\t"
      indent: "  ",

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the CSON object
      namedExports: true // Default: false
    })
  ]
}
```


## License

MIT