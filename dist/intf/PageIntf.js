"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentInstanceMethods_1 = require("./ComponentInstanceMethods");
/**
 *
 *
 * @export
 * @abstract
 * @class PageIntf
 * @extends {ComponentInstanceMethods}
 * @implements {WechatMiniprogram.Page.ILifetime}
 */
var PageIntf = /** @class */ (function (_super) {
    __extends(PageIntf, _super);
    function PageIntf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 页面数据
         *
         * @description data 会触发框架的转换处理,在编译时,会将 标记 `@data` 字段的映射 装入 data 中.
         * @type {{ [key: string]: any }}
         * @memberof AppIntf
         */
        _this.data = {};
        return _this;
    }
    /**
     * 生命周期回调—监听页面加载
     *
     * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
     */
    PageIntf.prototype.onLoad = function (query) { };
    /**
     * 生命周期回调—监听页面显示
     *
     * 页面显示/切入前台时触发。
     */
    PageIntf.prototype.onShow = function () { };
    /**
     * 生命周期回调—监听页面初次渲染完成
     *
     * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
     *
     * 注意：对界面内容进行设置的 API 如`wx.setNavigationBarTitle`，请在`onReady`之后进行。
     */
    PageIntf.prototype.onReady = function () { };
    /**
     * 生命周期回调—监听页面隐藏
     *
     * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
     */
    PageIntf.prototype.onHide = function () { };
    /**
     * 生命周期回调—监听页面卸载
     *
     * 页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。
     */
    PageIntf.prototype.onUnload = function () { };
    /**
     * 监听用户下拉动作
     *
     * 监听用户下拉刷新事件。
     * - 需要在`app.json`的`window`选项中或页面配置中开启`enablePullDownRefresh`。
     * - 可以通过`wx.startPullDownRefresh`触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
     * - 当处理完数据刷新后，`wx.stopPullDownRefresh`可以停止当前页面的下拉刷新。
     */
    PageIntf.prototype.onPullDownRefresh = function () { };
    /**
     * 页面上拉触底事件的处理函数
     *
     * 监听用户上拉触底事件。
     * - 可以在`app.json`的`window`选项中或页面配置中设置触发距离`onReachBottomDistance`。
     * - 在触发距离内滑动期间，本事件只会被触发一次。
     */
    PageIntf.prototype.onReachBottom = function () { };
    /**
     * 用户点击右上角转发
     *
     * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
     * **注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮**
     * 此事件需要 return 一个 Object，用于自定义转发内容
     */
    PageIntf.prototype.onShareAppMessage = function (options) {
        return {};
    };
    /**
     * 页面滚动触发事件的处理函数
     * 监听用户滑动页面事件。
     */
    PageIntf.prototype.onPageScroll = function (options) { };
    /**
     * 当前是 tab 页时，点击 tab 时触发
     * @lowest 1.9.0
     * @param {WechatMiniprogram.Page.ITabItemTapOption} options
     * @memberof PageIntf
     */
    PageIntf.prototype.onTabItemTap = function (options) { };
    /**
     * 窗口尺寸改变时触发
     * @lowest 2.4.0
     * @param {WechatMiniprogram.Page.IResizeOption} options
     * @memberof PageIntf
     */
    PageIntf.prototype.onResize = function (options) { };
    return PageIntf;
}(ComponentInstanceMethods_1.ComponentInstanceMethods));
exports.PageIntf = PageIntf;
//# sourceMappingURL=PageIntf.js.map