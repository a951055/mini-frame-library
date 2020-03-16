import { ModuleKeyword } from "../enum/Keywords";

/**
 * data装饰器
 * @description 用来在对象中增加一个
 * @param target
 * @param propertyKey
 */
export const data = (target: any, propertyKey: string) => {
  if (!target[ModuleKeyword.MODULE_DATA_KEY_LIST]) target[ModuleKeyword.MODULE_DATA_KEY_LIST] = new Array<string>();
  target[ModuleKeyword.MODULE_DATA_KEY_LIST].push(propertyKey);
};
/**
 * 组件 properties 属性装饰器
 *
 * @param target
 * @param propertyKey
 */
export const property = (target: any, propertyKey: string) => {
  if (!target[ModuleKeyword.MODULE_PROPERTY_KEY_LIST]) {
    target[ModuleKeyword.MODULE_PROPERTY_KEY_LIST] = new Array<string>();
  }
  target[ModuleKeyword.MODULE_PROPERTY_KEY_LIST].push(propertyKey);
};
/**
 * component 生命周期事件事件装饰器
 * @param target
 * @param propertyKey
 */
export const lifetimes = (target: any, propertyKey: string) => {
  if (!target[ModuleKeyword.MODULE_LIFETIMES_FUNC_LIST]) {
    target[ModuleKeyword.MODULE_LIFETIMES_FUNC_LIST] = new Array<string>();
  }
  target[ModuleKeyword.MODULE_LIFETIMES_FUNC_LIST].push(propertyKey);
};
/**
 * 组件属性监听装饰器
 * @param target
 * @param propertyKey
 */
export const observer = (target: any, propertyKey: string) => {
  if (!target[ModuleKeyword.MODULE_OBSERVERE_FUNC_LIST]) {
    target[ModuleKeyword.MODULE_OBSERVERE_FUNC_LIST] = new Array<string>();
  }
  target[ModuleKeyword.MODULE_OBSERVERE_FUNC_LIST].push(propertyKey);
};
