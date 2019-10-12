
import CSON from "cson"
import { createFilter, dataToEsm } from "rollup-pluginutils"

export default function cson (options = {}) {
    const filter = createFilter(options.include, options.exclude)
    const { preferConst, compact, namedExports = false, indent = "\t" } = options
    
    return {
        name: "cson",
        transform (cson, id) {
            if (id.slice(-5) !== ".cson" || !filter(id)) return null

            return {
                code: dataToEsm(CSON.parse(cson), {
                    namedExports,
                    preferConst,
                    compact,
                    indent
                }),
                map: { mappings: "" }
            }
        }
    }
}