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
 * Component 接口
 *
 * @export
 * @abstract
 * @class ComponentIntf
 */
var ComponentIntf = /** @class */ (function (_super) {
    __extends(ComponentIntf, _super);
    function ComponentIntf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lifetimes = {};
        /** 类似于mixins和traits的组件间代码复用机制，参见 [behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html) */
        _this.behaviors = [];
        /**
         * 组件数据字段监听器，用于监听 properties 和 data 的变化，参见 [数据监听器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)
         *
         * 最低基础库版本：[`2.6.1`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
         */
        _this.observers = {};
        /** 组件间关系定义，参见 [组件间关系](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html) */
        _this.relations = {};
        /** 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举） */
        _this.options = {};
        return _this;
    }
    /**
     * 在组件实例刚刚被创建时执行，注意此时不能调用 `setData`
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ComponentIntf.prototype.created = function () { };
    /**
     * 在组件实例进入页面节点树时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ComponentIntf.prototype.attached = function () { };
    /**
     * 在组件在视图层布局完成后执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ComponentIntf.prototype.ready = function () { };
    /**
     * 在组件实例被移动到节点树另一个位置时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ComponentIntf.prototype.moved = function () { };
    /**
     * 在组件实例被从页面节点树移除时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ComponentIntf.prototype.detached = function () { };
    /**
     * 每当组件方法抛出错误时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`2.4.1`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ComponentIntf.prototype.error = function (err) { };
    return ComponentIntf;
}(ComponentInstanceMethods_1.ComponentInstanceMethods));
exports.ComponentIntf = ComponentIntf;
//# sourceMappingURL=ComponentIntf.js.map