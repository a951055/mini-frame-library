import { ModuleKeyword } from "../enum/Keywords";
import { ModuleType } from "../enum/Keywords";

const nameFormat = (name: string) => {
  return name.replace(/([A-Z])/g, (str, arg: string) => `_${arg.toLowerCase()}`.replace(/^_/, ""));
};

/**
 * app 装饰器
 * @param constructor
 */
export const app = (constructor: Function) => {
  constructor.prototype[ModuleKeyword.MODULE_TYPE] = ModuleType.APP;
  constructor.prototype[ModuleKeyword.MODULE_NAME] = nameFormat(constructor.prototype.constructor.name);
};

/**
 * page 装饰器
 * @param constructor
 */
export const page = (constructor: Function) => {
  constructor.prototype[ModuleKeyword.MODULE_TYPE] = ModuleType.PAGE;
  constructor.prototype[ModuleKeyword.MODULE_NAME] = nameFormat(constructor.prototype.constructor.name);
};

/**
 * 组件 装饰器
 * @param constructor
 */
export const component = (constructor: Function) => {
  constructor.prototype[ModuleKeyword.MODULE_TYPE] = ModuleType.COMPONENT;
  constructor.prototype[ModuleKeyword.MODULE_NAME] = nameFormat(constructor.prototype.constructor.name);
};
