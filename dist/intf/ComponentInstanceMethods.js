"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 组件实例支持方法
 * @description 这里是组件的原生方法,如 setData(). 这里留一个空方法壳子,编译时根据prototype移除对应function ,(因为没有想到其他不影响小程序代码结构的方法实现ts下,通过this 调用对象方法)
 * @export
 * @class ComponentSysFunc
 * @implements {WechatMiniprogram.Component.InstanceMethods<Object>}
 */
var ComponentInstanceMethods = /** @class */ (function () {
    function ComponentInstanceMethods() {
    }
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.setData = function (data, callback) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.hasBehavior = function (behavior) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.triggerEvent = function (name, detail, options) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.createSelectorQuery = function () {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.createIntersectionObserver = function (options) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.selectComponent = function (selector) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.selectAllComponents = function (selector) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.selectOwnerComponent = function () {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.getRelationNodes = function (relationKey) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.groupSetData = function (callback) {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.getTabBar = function () {
        throw new Error("Method not implemented.");
    };
    /** 原生方法引用 - 编译时移除 */
    ComponentInstanceMethods.prototype.getPageId = function () {
        throw new Error("Method not implemented.");
    };
    ComponentInstanceMethods.prototype.animate = function (selector, keyFrames, duration, scrollTimeline) {
        throw new Error("Method not implemented.");
    };
    ComponentInstanceMethods.prototype.clearAnimation = function (selector, options, callback) {
        throw new Error("Method not implemented.");
    };
    return ComponentInstanceMethods;
}());
exports.ComponentInstanceMethods = ComponentInstanceMethods;
//# sourceMappingURL=ComponentInstanceMethods.js.map