import { getEnv } from './environment'

export const __DEV__ = process.env.__DEV__

export const getEnvVar = envVar => getEnv()[envVar]

