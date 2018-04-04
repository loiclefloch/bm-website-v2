import { getEnv } from './environment'
import defaultLogger from './defaultLogger'

export const __DEV__ = process.env.__DEV__

export const getEnvVar = envVar => getEnv()[envVar]

export const getLogger = () => defaultLogger
