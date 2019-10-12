
import { Plugin } from "rollup"
import { DataToEsmOptions } from "rollup-pluginutils"

declare function cson (options?: DataToEsmOptions) : Plugin

export = cson