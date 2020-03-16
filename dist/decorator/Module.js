"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keywords_1 = require("../enum/Keywords");
var Keywords_2 = require("../enum/Keywords");
var nameFormat = function (name) {
    return name.replace(/([A-Z])/g, function (str, arg) { return ("_" + arg.toLowerCase()).replace(/^_/, ""); });
};
/**
 * app 装饰器
 * @param constructor
 */
exports.app = function (constructor) {
    constructor.prototype[Keywords_1.ModuleKeyword.MODULE_TYPE] = Keywords_2.ModuleType.APP;
    constructor.prototype[Keywords_1.ModuleKeyword.MODULE_NAME] = nameFormat(constructor.prototype.constructor.name);
};
/**
 * page 装饰器
 * @param constructor
 */
exports.page = function (constructor) {
    constructor.prototype[Keywords_1.ModuleKeyword.MODULE_TYPE] = Keywords_2.ModuleType.PAGE;
    constructor.prototype[Keywords_1.ModuleKeyword.MODULE_NAME] = nameFormat(constructor.prototype.constructor.name);
};
/**
 * 组件 装饰器
 * @param constructor
 */
exports.component = function (constructor) {
    constructor.prototype[Keywords_1.ModuleKeyword.MODULE_TYPE] = Keywords_2.ModuleType.COMPONENT;
    constructor.prototype[Keywords_1.ModuleKeyword.MODULE_NAME] = nameFormat(constructor.prototype.constructor.name);
};
//# sourceMappingURL=Module.js.map