"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileSearchBar = exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("./index"));
var styled_components_1 = __importDefault(require("styled-components"));
var calendar_1 = require("../calendar");
var addDays_1 = __importDefault(require("date-fns/addDays"));
var select_1 = require("../select");
var dropdown_base_1 = require("../dropdown-base/dropdown-base");
var counter_1 = require("../counter");
var button_1 = __importDefault(require("../button"));
var icon_1 = require("../icon");
exports.default = {
    title: 'Example/Search Bar',
    component: index_1.default,
};
var StyledSelect = (0, styled_components_1.default)(select_1.Select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .dropdown {\n    height: 100%;\n  }\n  .dropdown-toggle {\n    height: 100%;\n    padding: 8px 16px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background-color: transparent;\n  }\n  .dropdown-toggle:focus {\n    border-radius: 25px;\n    border: 2px solid var(--primary);\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.09);\n  }\n"], ["\n  .dropdown {\n    height: 100%;\n  }\n  .dropdown-toggle {\n    height: 100%;\n    padding: 8px 16px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background-color: transparent;\n  }\n  .dropdown-toggle:focus {\n    border-radius: 25px;\n    border: 2px solid var(--primary);\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.09);\n  }\n"])));
var StyledDropDown = (0, styled_components_1.default)(dropdown_base_1.DropdownBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .dropdown {\n    height: 100%;\n  }\n  .dropdown-toggle {\n    height: 100%;\n    padding: 8px 16px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background-color: transparent;\n  }\n  .dropdown-toggle:focus {\n    border-radius: 25px;\n    border: 2px solid var(--primary);\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.09);\n  }\n"], ["\n  .dropdown {\n    height: 100%;\n  }\n  .dropdown-toggle {\n    height: 100%;\n    padding: 8px 16px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background-color: transparent;\n  }\n  .dropdown-toggle:focus {\n    border-radius: 25px;\n    border: 2px solid var(--primary);\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.09);\n  }\n"])));
var CalendarDropdown = (0, styled_components_1.default)(StyledDropDown)(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var CounterContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: white;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  width: 200px;\n"], ["\n  background: white;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  width: 200px;\n"])));
var checkoutDate = (0, addDays_1.default)(new Date(), 3);
var CalendarComponent = function (_a) {
    var columns = _a.columns, className = _a.className;
    var _b = react_1.default.useState({
        startDate: checkoutDate,
        endDate: (0, addDays_1.default)(checkoutDate, 5),
        key: 'selection',
    }), calendarSelectionRange = _b[0], setCalendarSelectionRange = _b[1];
    var handleSelectRange = function (_a) {
        var selection = _a.selection;
        setCalendarSelectionRange(__assign(__assign({}, selection), { startDate: checkoutDate }));
    };
    return ((0, jsx_runtime_1.jsx)(calendar_1.Calendar, { ranges: [calendarSelectionRange], onChange: handleSelectRange, columns: columns, variant: "light", className: className }));
};
var cities = [
    { name: 'CDMX', value: 'cdmx' },
    { name: 'Sao Paulo', value: 'sp' },
];
var neighborhoods = [
    { name: 'Condesa', value: 'condesa' },
    { name: 'Roma', value: 'roma' },
    { name: 'Polanco', value: 'polanco' },
];
var Template = function () {
    var _a = react_1.default.useState(), selectedCity = _a[0], setSelectedCity = _a[1];
    var _b = react_1.default.useState(), selectedNeighborhood = _b[0], setSelectedNeighborhood = _b[1];
    var _c = react_1.default.useState(1), guests = _c[0], setGuests = _c[1];
    return ((0, jsx_runtime_1.jsxs)(index_1.default, { children: [(0, jsx_runtime_1.jsx)(StyledSelect, { options: cities, onChange: setSelectedCity, placeholder: "Select City", selectedOption: selectedCity, variant: "light" }), (0, jsx_runtime_1.jsx)(StyledSelect, { options: neighborhoods, onChange: setSelectedNeighborhood, placeholder: "Neighborhood", selectedOption: selectedNeighborhood, variant: "light" }), (0, jsx_runtime_1.jsx)(CalendarDropdown, __assign({ placeholder: "Check In - Check Out", variant: "light" }, { children: (0, jsx_runtime_1.jsx)(CalendarComponent, { columns: 2, className: "" }) })), (0, jsx_runtime_1.jsx)(StyledDropDown, __assign({ variant: "light", placeholder: "".concat(guests, " guests") }, { children: (0, jsx_runtime_1.jsx)(CounterContainer, { children: (0, jsx_runtime_1.jsx)(counter_1.Counter, { onChange: setGuests, value: guests, placeholder: "Guests", max: 7, min: 1 }) }) }))] }));
};
var initialState = {
    step: undefined,
    isCompleted: false,
};
function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_CITY_FILTER':
            return __assign(__assign({}, state), { step: 'city' });
        case 'OPEN_NEIGHBORHOOD_FILTER':
            return __assign(__assign({}, state), { step: 'neighborhood' });
        case 'OPEN_DATE_FILTER':
            return __assign(__assign({}, state), { step: 'date' });
        case 'OPEN_GUESTS_FILTER':
            return __assign(__assign({}, state), { step: 'guests', isCompleted: true });
        case 'CLOSE_FILTER':
            return __assign(__assign({}, state), { step: 'initial', isCompleted: true });
        default:
            throw new Error();
    }
}
var BottomBarContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 12px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  box-shadow: 0px -6px 8px 0 rgb(113 113 113 / 10%);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"], ["\n  padding: 12px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  box-shadow: 0px -6px 8px 0 rgb(113 113 113 / 10%);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));
var Mobile = function () {
    var _a = react_1.default.useReducer(reducer, initialState), step = _a[0].step, dispatch = _a[1];
    var _b = react_1.default.useState(), selectedCity = _b[0], setSelectedCity = _b[1];
    var _c = react_1.default.useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }), calendarSelectionRange = _c[0], setCalendarSelectionRange = _c[1];
    var handleSelectRange = function (_a) {
        var selection = _a.selection;
        setCalendarSelectionRange(__assign({}, selection));
    };
    var _d = react_1.default.useState(), selectedNeighborhood = _d[0], setSelectedNeighborhood = _d[1];
    var _e = react_1.default.useState(1), guests = _e[0], setGuests = _e[1];
    var resetDates = function () {
        setCalendarSelectionRange({
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        });
    };
    var onSelectCity = function (option) {
        setSelectedCity(option);
        dispatch({ type: 'OPEN_NEIGHBORHOOD_FILTER' });
    };
    var onSelectNeighborhood = function (option) {
        setSelectedNeighborhood(option);
        dispatch({ type: 'OPEN_DATE_FILTER' });
    };
    var onSelectDates = function () {
        dispatch({ type: 'OPEN_GUESTS_FILTER' });
    };
    var onSearch = function () {
        dispatch({ type: 'OPEN_CITY_FILTER' });
    };
    var closeFilter = function () {
        dispatch({ type: 'CLOSE_FILTER' });
    };
    if (step === 'city') {
        return ((0, jsx_runtime_1.jsx)(StyledSelect, { isOpen: true, fullScreen: true, options: cities, onChange: onSelectCity, placeholder: "Select City", onCloseClick: closeFilter, onGoBackClick: closeFilter, selectedOption: selectedCity, closeOnItemClick: false, variant: "light" }));
    }
    if (step === 'neighborhood') {
        return ((0, jsx_runtime_1.jsx)(StyledSelect, { isOpen: true, options: neighborhoods, fullScreen: true, onChange: onSelectNeighborhood, onGoBackClick: function () {
                dispatch({ type: 'OPEN_CITY_FILTER' });
            }, onCloseClick: closeFilter, placeholder: "Neighborhood", selectedOption: selectedNeighborhood, closeOnItemClick: false, variant: "light" }));
    }
    if (step === 'date') {
        return ((0, jsx_runtime_1.jsxs)(CalendarDropdown, __assign({ placeholder: "Check In - Check Out", variant: "light", isOpen: true, onCloseClick: closeFilter, onGoBackClick: function () {
                dispatch({ type: 'OPEN_NEIGHBORHOOD_FILTER' });
            }, fullScreen: true }, { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { ranges: [calendarSelectionRange], onChange: handleSelectRange, columns: 1, variant: "light", className: "w-100", showResetDateButton: false }), (0, jsx_runtime_1.jsxs)(BottomBarContainer, __assign({ className: "justify-content-around" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ style: { height: 48, border: 'none', background: 'transparent' }, onClick: resetDates }, { children: "Reset Dates" })), (0, jsx_runtime_1.jsx)(button_1.default, __assign({ onClick: onSelectDates, variant: "primary", style: { height: 48 } }, { children: "Next" }))] }))] })));
    }
    if (step === 'guests') {
        return ((0, jsx_runtime_1.jsxs)(StyledDropDown, __assign({ variant: "light", fullScreen: true, onGoBackClick: function () {
                dispatch({ type: 'OPEN_DATE_FILTER' });
            }, isOpen: true, placeholder: "".concat(guests, " guests"), onCloseClick: closeFilter }, { children: [(0, jsx_runtime_1.jsx)(CounterContainer, { children: (0, jsx_runtime_1.jsx)(counter_1.Counter, { onChange: setGuests, value: guests, placeholder: "Guests" }) }), (0, jsx_runtime_1.jsx)(BottomBarContainer, { children: (0, jsx_runtime_1.jsx)(button_1.default, __assign({ variant: "primary", style: { height: 48 }, icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Search" }), onClick: function () {
                            alert('hola');
                        } }, { children: "Search" })) })] })));
    }
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ onSearchClick: onSearch }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex align-items-center", style: { padding: '8px 16px' } }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Find your next stay" }) })) })));
};
exports.Primary = Template.bind({});
exports.MobileSearchBar = Mobile.bind({});
exports.Primary.args = {};
exports.MobileSearchBar.args = {};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
