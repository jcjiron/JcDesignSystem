"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSessionStorage = void 0;
var useSessionStorage = function (sessionStorage) {
    var setItem = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    var getItem = function (key) {
        var item = sessionStorage.getItem(key);
        if (!item) {
            return undefined;
        }
        return JSON.parse(item);
    };
    return {
        setItem: setItem,
        getItem: getItem,
    };
};
exports.useSessionStorage = useSessionStorage;
