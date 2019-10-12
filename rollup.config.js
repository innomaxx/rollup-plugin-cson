
import pkg from "./package.json"

export default {
    input: "src/plugin.js",
    external: Object.keys(pkg.dependencies),
    output: [
        { file: pkg.main, format: "cjs", sourcemap: true },
        { file: pkg.module, format: "esm", sourcemap: true }
    ]
}