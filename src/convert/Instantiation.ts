import { ComponentInstanceMethods } from "./../intf/ComponentInstanceMethods";
import { AppIntf } from "../intf/AppIntf";
import { ComponentIntf } from "../intf/ComponentIntf";
import { ModuleKeyword } from "../enum/Keywords";
import { PageIntf } from "../intf/PageIntf";

const exportPage = <T extends { new (...args: any[]): {} }>(intf: T) => {
  let options: any = <PageIntf>new intf();
  if (!options.data) options.data = {};
  // write or read data
  for (let key of options[ModuleKeyword.MODULE_DATA_KEY_LIST]) {
    console.log(key, options[key]);
    let obj = new Proxy(options[key], {
      set(target: any, p: PropertyKey, value: any, receiver: any) {
        options.groupSetData(() => options.setData({ [p.toString()]: value }));
        return Reflect.set(target, p, value, receiver);
      },
      get(target: T, p: PropertyKey, receiver: any) {
        return options.data[p];
      }
    });
    options.data[key] = obj;
  }
  // clean instance methods
  for (let key in options) {
    if (Object.keys(ComponentInstanceMethods.prototype).indexOf(key) !== -1) delete options[key];
  }
  console.log("options", options);
  // gen
  // Page(options);
};

export const instantiation = <T extends { new (...args: any[]): AppIntf | PageIntf | ComponentIntf }>(intf: T) => {
  /** check and invoke related methods */
  if (intf.prototype instanceof AppIntf) exportPage(intf);
  if (intf.prototype instanceof PageIntf) exportPage(intf);
  if (intf.prototype instanceof ComponentIntf) exportPage(intf);
};
