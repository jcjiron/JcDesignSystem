"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var modal_centered_dialog_1 = require("./modal-centered-dialog");
exports.default = {
    title: 'Example/ModalCenteredDialog',
    component: modal_centered_dialog_1.ModalCenteredDialog,
};
var Template = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    var _b = (0, react_1.useState)(args.show), show = _b[0], setShow = _b[1];
    var handleShow = function () { return setShow(!show); };
    (0, react_1.useEffect)(function () {
        if (show !== args.show) {
            setShow(args.show);
        }
    }, [args.show]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleShow }, { children: "Open Modal" })), (0, jsx_runtime_1.jsx)(modal_centered_dialog_1.ModalCenteredDialog, __assign({}, args, { closeModal: handleShow, show: show }, { children: children }))] }));
};
exports.Primary = Template.bind({});
var args = {
    children: ((0, jsx_runtime_1.jsx)("div", __assign({ style: {
            minHeight: '400px',
            maxWidth: '400px',
        }, className: "p-5" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat." }) }))),
    show: false,
    variant: 'dark',
};
exports.Primary.args = args;
