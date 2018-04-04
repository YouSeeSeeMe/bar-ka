const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const domains = {
  dev: 'http://localhost:10086',
  prod: ''
}
export const domain = domains[env]