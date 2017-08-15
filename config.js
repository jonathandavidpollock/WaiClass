const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development'

export const logMessage = function(message) {
  console.info(message)
}

export default {
  port: env.PORT || 1234,
  host: env.HOST || '0.0.0.0',
  get serverURL() {
    return `http://${this.host}:${this.port}`
  }
}
