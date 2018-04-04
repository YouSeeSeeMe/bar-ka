export default class Tips {
  constructor () {
    this.isLoading = false;
  }

  /*
    － 弹出提示框
    － await TIPS.success([string],[int])
   */

  static success (title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: "success",
        mask: true,
        duration: duration
      });
    }, 300);
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
  }

  /*
    － 弹出确认窗口
    － await TIPS.confirm([string],[JSON Object],[string])
   */
  
  static confirm (text, payload = {}, title = "提示") {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload);
          } else if (res.cancel) {
            reject(payload);
          }
        },
        fail: res => {
          reject(payload);
        }
      });
    });
  }

  /*
    - toast
    - TIPS.toast([string], [Function], ['success' or 'loading'])
   */
  
  static toast (title, onHide, icon = "success") {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
    }, 300);

    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /*
    - 警告框
    - TIPS.alert([string])
   */
  
  static alert (title) {
    wx.showToast({
      title: title,
      image: "../images/alert.png",
      mask: true,
      duration: 1500
    });
  }

  /*
    - 错误框
    - TIPS.error([string], [Function])
   */
  
  static error (title, onHide) {
    wx.showToast({
      title: title,
      image: "../images/error.png",
      mask: true,
      duration: 500
    });
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /*
    - 弹出加载提示
    - TIPS.loading([string])
   */
  
  static loading (title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }

  /*
    - 跳转
    - TIPS.go([string])
   */

  static go (url) {
    wx.navigateTo({
      url: url
    })
  }

  /*
    - 设置 Title
    - TIPS.setTitle([string])
   */

  static setTitle (title) {
    wx.setNavigationBarTitle({
      title: title
    })
  }

  // 加载完毕
  static loaded () {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }
}

// 静态变量，是否加载中 
Tips.isLoading = false;