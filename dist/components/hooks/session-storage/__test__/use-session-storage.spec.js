"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var use_session_storage_1 = require("../use-session-storage");
var sessionProvider = function () { return window.sessionStorage; };
describe('useSessionStorage', function () {
    it('is truthy', function () {
        var _a = (0, use_session_storage_1.useSessionStorage)(sessionProvider()), setItem = _a.setItem, getItem = _a.getItem;
        expect(setItem).toBeTruthy();
        expect(getItem).toBeTruthy();
    });
    it('should save and retrieve a string', function () {
        var _a = (0, use_session_storage_1.useSessionStorage)(sessionProvider()), setItem = _a.setItem, getItem = _a.getItem;
        var value = 'value';
        var KEY = 'key1';
        setItem(KEY, value);
        var retrieve = getItem(KEY);
        expect(retrieve).toBe(value);
    });
    it('should save and retrieve an object', function () {
        var _a = (0, use_session_storage_1.useSessionStorage)(sessionProvider()), setItem = _a.setItem, getItem = _a.getItem;
        var KEY = 'key2';
        var value = {
            prop1: 'value',
            prop2: 'value',
            prop3: {
                innerprop1: 'value',
                innerprop2: 'value',
                innerprop3: 'value',
            },
        };
        setItem(KEY, value);
        var retrieved = getItem(KEY);
        expect(retrieved).toStrictEqual(value);
    });
});
