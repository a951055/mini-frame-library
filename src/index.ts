/**
 * library 导出目录
 *
 * @author Halo
 * @date 2020年3月16日 12:57:25
 *
 */

/* intf */
export { AppIntf } from "./intf/AppIntf";
export { PageIntf } from "./intf/PageIntf";
export { ComponentIntf } from "./intf/ComponentIntf";

/* decorator */

export { app, page, component } from "./decorator/Module";
export { data, property, lifetimes } from "./decorator/Properties";

/* convert */
export { instantiation } from "./convert/Instantiation";
