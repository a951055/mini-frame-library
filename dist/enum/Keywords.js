"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模块键值对枚举
 *
 * @export
 * @enum {number}
 */
var ModuleKeyword;
(function (ModuleKeyword) {
    /**
     * build: 模块类型标识 - 用来标记转换格式
     */
    ModuleKeyword["MODULE_TYPE"] = "MODULE_TYPE";
    /**
     * build: 模块名称 , 一般为 className 转小写
     */
    ModuleKeyword["MODULE_NAME"] = "MODULE_NAME";
    /**
     * Page,Component: data项标识
     */
    ModuleKeyword["MODULE_DATA_KEY_LIST"] = "MODULE_DATA_KEY_LIST";
    /**
     * 组件:property项标识
     */
    ModuleKeyword["MODULE_PROPERTY_KEY_LIST"] = "MODULE_PROPERTY_KEY_LIST";
    /**
     * 组件:生命周期事件方法标识
     */
    ModuleKeyword["MODULE_LIFETIMES_FUNC_LIST"] = "MODULE_LIFETIMES_FUNC_LIST";
    /**
     * 组件:属性监听方法标识
     */
    ModuleKeyword["MODULE_OBSERVERE_FUNC_LIST"] = "MODULE_OBSERVERE_FUNC_LIST";
})(ModuleKeyword = exports.ModuleKeyword || (exports.ModuleKeyword = {}));
/**
 * 模块类型枚举
 *
 * @export
 * @enum {number}
 */
var ModuleType;
(function (ModuleType) {
    ModuleType["APP"] = "app";
    ModuleType["PAGE"] = "page";
    ModuleType["COMPONENT"] = "component";
})(ModuleType = exports.ModuleType || (exports.ModuleType = {}));
//# sourceMappingURL=Keywords.js.map