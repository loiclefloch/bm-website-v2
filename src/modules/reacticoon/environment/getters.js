import { getEnv } from './environment'

export const __DEV__ = process.env.__DEV__ || process.env.NODE_ENV !== 'production'

export const getEnvVar = envVar => getEnv()[envVar]

