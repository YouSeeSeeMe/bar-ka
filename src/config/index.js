const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const domains = {
  dev: 'http://40.125.175.160:8081',
  prod: 'http://40.125.175.160:8081'
}
export const domain = domains[env]