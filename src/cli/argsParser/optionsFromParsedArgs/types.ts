import { MochaOptions } from 'mocha'
import { WebpackMode } from '../parseArgv/webpack/types'

export interface MochaCliOptions {
  config?: string
  exit?: boolean
  extension: string[]
  file?: string[]
  ignore?: string[]
  invert?: boolean
  package?: string
  recursive?: boolean
  reporterOption?: any
  sort?: boolean
  watch?: boolean
  watchFiles?: string[]
  watchIgnore: string[]
}

export interface MochapackMochaOptions {
  constructor: MochaOptions
  cli: MochaCliOptions
}

export interface MochapackWebpackOptions {
  include?: string[]
  mode?: WebpackMode
  config: string
  env?: string
}

export interface MochapackSpecificOptions {
  quiet?: boolean
  interactive: boolean
  clearTerminal: boolean
  glob?: string
}

export interface MochapackOptions {
  mocha: MochapackMochaOptions
  webpack: MochapackWebpackOptions
  mochapack: MochapackSpecificOptions
}
