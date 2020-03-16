/**
 * 模块键值对枚举
 *
 * @export
 * @enum {number}
 */
export enum ModuleKeyword {
  /**
   * build: 模块类型标识 - 用来标记转换格式
   */
  MODULE_TYPE = "MODULE_TYPE",
  /**
   * build: 模块名称 , 一般为 className 转小写
   */
  MODULE_NAME = "MODULE_NAME",
  /**
   * Page,Component: data项标识
   */
  MODULE_DATA_KEY_LIST = "MODULE_DATA_KEY_LIST",
  /**
   * 组件:property项标识
   */
  MODULE_PROPERTY_KEY_LIST = "MODULE_PROPERTY_KEY_LIST",
  /**
   * 组件:生命周期事件方法标识
   */
  MODULE_LIFETIMES_FUNC_LIST = "MODULE_LIFETIMES_FUNC_LIST",
  /**
   * 组件:属性监听方法标识
   */
  MODULE_OBSERVERE_FUNC_LIST = "MODULE_OBSERVERE_FUNC_LIST"
}
/**
 * 模块类型枚举
 *
 * @export
 * @enum {number}
 */
export enum ModuleType {
  APP = "app",
  PAGE = "page",
  COMPONENT = "component"
}
