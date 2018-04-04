import wepy from 'wepy'

/*
  - 获取当前时间戳
 */
function now () {
  return new Date().getTime()
}

/*
  - 随机数
 */
function random (min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

/*
  - 跳转链接
 */
function goto (url) {
  wepy.navigateTo({url: url})
}

module.exports = {
  now: now,
  random: random,
  goto: goto
}