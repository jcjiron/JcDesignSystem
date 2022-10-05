"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customScrollBar = void 0;
var styled_components_1 = require("styled-components");
exports.customScrollBar = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --track-background: transparent;\n  --handle-background: rgba(196, 196, 196, 0.7);\n  --handle-hover-background: rgba(196, 196, 196, 0.7);\n  /* :: Custom scroll bar :: */\n  /* width */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: var(--track-background, transparent);\n  }\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: var(--handle-background, rgba(196, 196, 196, 0.7));\n    border-radius: 4px;\n  }\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: var(--handle-hover-background, rgba(196, 196, 196, 0.7));\n  }\n"], ["\n  --track-background: transparent;\n  --handle-background: rgba(196, 196, 196, 0.7);\n  --handle-hover-background: rgba(196, 196, 196, 0.7);\n  /* :: Custom scroll bar :: */\n  /* width */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: var(--track-background, transparent);\n  }\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: var(--handle-background, rgba(196, 196, 196, 0.7));\n    border-radius: 4px;\n  }\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: var(--handle-hover-background, rgba(196, 196, 196, 0.7));\n  }\n"])));
var templateObject_1;
