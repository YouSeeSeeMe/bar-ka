import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'ttp://127.0.0.1:8081/sunbar-bar-service/bar'

/**
 * 
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
//查询福建酒吧列表列表
const getBarList = (params) => wxRequest(params, apiMall + '?barName=&cityName=%E5%8E%A6%E9%97%A8&latitude=24.489183&longitude=118.183623&isEnableJiubaka=true');

module.exports = {
  getBarList
}
