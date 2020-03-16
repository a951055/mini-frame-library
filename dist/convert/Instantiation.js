"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentInstanceMethods_1 = require("./../intf/ComponentInstanceMethods");
var AppIntf_1 = require("../intf/AppIntf");
var ComponentIntf_1 = require("../intf/ComponentIntf");
var Keywords_1 = require("../enum/Keywords");
var PageIntf_1 = require("../intf/PageIntf");
var exportPage = function (intf) {
    var options = new intf();
    if (!options.data)
        options.data = {};
    // write or read data
    for (var _i = 0, _a = options[Keywords_1.ModuleKeyword.MODULE_DATA_KEY_LIST]; _i < _a.length; _i++) {
        var key = _a[_i];
        console.log(key, options[key]);
        var obj = new Proxy(options[key], {
            set: function (target, p, value, receiver) {
                options.groupSetData(function () {
                    var _a;
                    return options.setData((_a = {}, _a[p.toString()] = value, _a));
                });
                return Reflect.set(target, p, value, receiver);
            },
            get: function (target, p, receiver) {
                return options.data[p];
            }
        });
        options.data[key] = obj;
    }
    // clean instance methods
    for (var key in options) {
        if (Object.keys(ComponentInstanceMethods_1.ComponentInstanceMethods.prototype).indexOf(key) !== -1)
            delete options[key];
    }
    console.log("options", options);
    // gen
    // Page(options);
};
exports.instantiation = function (intf) {
    /** check and invoke related methods */
    if (intf.prototype instanceof AppIntf_1.AppIntf)
        exportPage(intf);
    if (intf.prototype instanceof PageIntf_1.PageIntf)
        exportPage(intf);
    if (intf.prototype instanceof ComponentIntf_1.ComponentIntf)
        exportPage(intf);
};
//# sourceMappingURL=Instantiation.js.map