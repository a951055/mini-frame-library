/**
 * App 接口
 *
 * @export
 * @abstract
 * @class AppIntf
 */
export abstract class AppIntf implements WechatMiniprogram.App.Option {
  /**
   * 全局数据
   *
   * @description globalData 会触发框架的转换处理,在编译时,会将 标记 `@data` 字段的映射 装入 globalData 中.
   * @type {{ [key: string]: any }}
   * @memberof AppIntf
   */
  globalData: { [key: string]: any } = {};
  /**
   * 小程序初始化完成时触发，全局只触发一次。参数也可以使用 [wx.getLaunchOptionsSync](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) 获取。
   *
   * @param {WechatMiniprogram.App.LaunchShowOption} options
   * @memberof AppIntf
   */
  onLaunch(options: WechatMiniprogram.App.LaunchShowOption): void {}
  /**
   *  小程序启动，或从后台进入前台显示时触发。也可以使用 [wx.onAppShow](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html) 绑定监听。
   *
   * @param {WechatMiniprogram.App.LaunchShowOption} options
   * @memberof AppIntf
   */
  onShow(options: WechatMiniprogram.App.LaunchShowOption): void {}
  /**
   * 小程序从前台进入后台时触发。也可以使用 [wx.onAppHide](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html) 绑定监听。
   *
   * @memberof AppIntf
   */
  onHide() {}
  /**
   * 小程序发生脚本错误或 API 调用报错时触发。也可以使用 [wx.onError](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html) 绑定监听。
   *
   * @param {*} error
   * @memberof AppIntf
   */
  onError(error: string): void {}
  /**
   * 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
   *
   * **注意：**
   * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
   * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
   *
   * 最低基础库： 1.9.90
   *
   * @param {WechatMiniprogram.App.PageNotFoundOption} options
   * @memberof AppIntf
   */
  onPageNotFound(options: WechatMiniprogram.App.PageNotFoundOption): void {}
  /**
   * 小程序有未处理的 Promise 拒绝时触发。也可以使用 [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html) 绑定监听。注意事项请参考 [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html)。
   * **参数**：与 [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html) 一致
   */
  onUnhandledRejection: WechatMiniprogram.OnUnhandledRejectionCallback = (
    result: WechatMiniprogram.OnUnhandledRejectionCallbackResult
  ) => {};
}
