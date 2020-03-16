"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keywords_1 = require("../enum/Keywords");
/**
 * data装饰器
 * @description 用来在对象中增加一个
 * @param target
 * @param propertyKey
 */
exports.data = function (target, propertyKey) {
    if (!target[Keywords_1.ModuleKeyword.MODULE_DATA_KEY_LIST])
        target[Keywords_1.ModuleKeyword.MODULE_DATA_KEY_LIST] = new Array();
    target[Keywords_1.ModuleKeyword.MODULE_DATA_KEY_LIST].push(propertyKey);
};
/**
 * 组件 properties 属性装饰器
 *
 * @param target
 * @param propertyKey
 */
exports.property = function (target, propertyKey) {
    if (!target[Keywords_1.ModuleKeyword.MODULE_PROPERTY_KEY_LIST]) {
        target[Keywords_1.ModuleKeyword.MODULE_PROPERTY_KEY_LIST] = new Array();
    }
    target[Keywords_1.ModuleKeyword.MODULE_PROPERTY_KEY_LIST].push(propertyKey);
};
/**
 * component 生命周期事件事件装饰器
 * @param target
 * @param propertyKey
 */
exports.lifetimes = function (target, propertyKey) {
    if (!target[Keywords_1.ModuleKeyword.MODULE_LIFETIMES_FUNC_LIST]) {
        target[Keywords_1.ModuleKeyword.MODULE_LIFETIMES_FUNC_LIST] = new Array();
    }
    target[Keywords_1.ModuleKeyword.MODULE_LIFETIMES_FUNC_LIST].push(propertyKey);
};
/**
 * 组件属性监听装饰器
 * @param target
 * @param propertyKey
 */
exports.observer = function (target, propertyKey) {
    if (!target[Keywords_1.ModuleKeyword.MODULE_OBSERVERE_FUNC_LIST]) {
        target[Keywords_1.ModuleKeyword.MODULE_OBSERVERE_FUNC_LIST] = new Array();
    }
    target[Keywords_1.ModuleKeyword.MODULE_OBSERVERE_FUNC_LIST].push(propertyKey);
};
//# sourceMappingURL=Properties.js.map