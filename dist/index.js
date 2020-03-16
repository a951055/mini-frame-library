"use strict";
/**
 * library 导出目录
 *
 * @author Halo
 * @date 2020年3月16日 12:57:25
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* intf */
var AppIntf_1 = require("./intf/AppIntf");
exports.AppIntf = AppIntf_1.AppIntf;
var PageIntf_1 = require("./intf/PageIntf");
exports.PageIntf = PageIntf_1.PageIntf;
var ComponentIntf_1 = require("./intf/ComponentIntf");
exports.ComponentIntf = ComponentIntf_1.ComponentIntf;
/* decorator */
var Module_1 = require("./decorator/Module");
exports.app = Module_1.app;
exports.page = Module_1.page;
exports.component = Module_1.component;
var Properties_1 = require("./decorator/Properties");
exports.data = Properties_1.data;
exports.property = Properties_1.property;
exports.lifetimes = Properties_1.lifetimes;
/* convert */
var Instantiation_1 = require("./convert/Instantiation");
exports.instantiation = Instantiation_1.instantiation;
//# sourceMappingURL=index.js.map