'use strict'
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw })
        } else {
            cooked.raw = raw
        }
        return cooked
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.TypographyStyles =
    exports.Small =
    exports.Default =
    exports.Title =
    exports.SubSectionSubHeader =
    exports.SubSectionHeader =
    exports.SectionHeader =
    exports.SectionTitle =
        void 0
var styled_components_1 = require('styled-components')
var use_screen_size_1 = require('../hooks/use-screen-size/use-screen-size')
exports.SectionTitle = (0, styled_components_1.css)(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  font-size: 48px;\n  line-height: 52px;\n  @media (max-width: ',
                'px) {\n    font-size: 34px;\n    line-height: 36px;\n  }\n',
            ],
            [
                '\n  font-size: 48px;\n  line-height: 52px;\n  @media (max-width: ',
                'px) {\n    font-size: 34px;\n    line-height: 36px;\n  }\n',
            ]
        )),
    use_screen_size_1.ScreenSize.SMALL
)
exports.SectionHeader = (0, styled_components_1.css)(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            [
                '\n  font-size: 32px;\n  line-height: 40px;\n  @media (max-width: ',
                'px) {\n    font-size: 28px;\n    line-height: 34px;\n  }\n',
            ],
            [
                '\n  font-size: 32px;\n  line-height: 40px;\n  @media (max-width: ',
                'px) {\n    font-size: 28px;\n    line-height: 34px;\n  }\n',
            ]
        )),
    use_screen_size_1.ScreenSize.SMALL
)
exports.SubSectionHeader = (0, styled_components_1.css)(
    templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
            [
                '\n  font-size: 28px;\n  line-height: 34px;\n  @media (max-width: ',
                'px) {\n    font-size: 22px;\n    line-height: 28px;\n  }\n',
            ],
            [
                '\n  font-size: 28px;\n  line-height: 34px;\n  @media (max-width: ',
                'px) {\n    font-size: 22px;\n    line-height: 28px;\n  }\n',
            ]
        )),
    use_screen_size_1.ScreenSize.SMALL
)
exports.SubSectionSubHeader = (0, styled_components_1.css)(
    templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
            [
                '\n  font-size: 32px;\n  line-height: 40px;\n  @media (max-width: ',
                'px) {\n    font-size: 22px;\n    line-height: 28px;\n  }\n',
            ],
            [
                '\n  font-size: 32px;\n  line-height: 40px;\n  @media (max-width: ',
                'px) {\n    font-size: 22px;\n    line-height: 28px;\n  }\n',
            ]
        )),
    use_screen_size_1.ScreenSize.SMALL
)
exports.Title = (0, styled_components_1.css)(
    templateObject_5 ||
        (templateObject_5 = __makeTemplateObject(
            ['\n  font-size: 18px;\n  line-height: 20px;\n'],
            ['\n  font-size: 18px;\n  line-height: 20px;\n']
        ))
)
exports.Default = (0, styled_components_1.css)(
    templateObject_6 ||
        (templateObject_6 = __makeTemplateObject(
            ['\n  font-size: 15px;\n  line-height: 20px;\n'],
            ['\n  font-size: 15px;\n  line-height: 20px;\n']
        ))
)
exports.Small = (0, styled_components_1.css)(
    templateObject_7 ||
        (templateObject_7 = __makeTemplateObject(
            ['\n  font-size: 12px;\n  line-height: 24px;\n'],
            ['\n  font-size: 12px;\n  line-height: 24px;\n']
        ))
)
exports.TypographyStyles = (0, styled_components_1.css)(
    templateObject_8 ||
        (templateObject_8 = __makeTemplateObject(
            [
                '\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: bold;\n  }\n  h1 {\n    font-size: 2rem;\n    line-height: 1.2;\n  }\n  h2 {\n    font-size: 1.75rem;\n    line-height: 1.2;\n  }\n  h3 {\n    font-size: 1.5rem;\n    line-height: 1.4;\n  }\n  h4 {\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n  h5 {\n    font-size: 1rem;\n    line-height: 1.5;\n  }\n  h6 {\n    font-size: 0.875rem;\n    line-height: 1.5;\n  }\n  p {\n    font-size: 0.875rem;\n    line-height: 1.6;\n  }\n  .body-default {\n    font-size: 1rem;\n    line-height: 1.6;\n  }\n  .body-secondary {\n    font-size: 0.875rem;\n    line-height: 1.6;\n  }\n  .body-captions {\n    font-size: 0.875rem;\n    line-height: 1.8;\n  }\n  .body-footnotes {\n    font-size: 0.75rem;\n    line-height: 1.8;\n  }\n\n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 3rem;\n      line-height: 1.2;\n    }\n    h2 {\n      font-size: 2.5rem;\n      line-height: 1.2;\n    }\n    h3 {\n      font-size: 2rem;\n      line-height: 1.4;\n    }\n    h4 {\n      font-size: 1.5rem;\n      line-height: 1.4;\n    }\n    h5 {\n      font-size: 1.25rem;\n      line-height: 1.5;\n    }\n    h6 {\n      font-size: 1rem;\n      line-height: 1.4;\n    }\n  }\n',
            ],
            [
                '\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: bold;\n  }\n  h1 {\n    font-size: 2rem;\n    line-height: 1.2;\n  }\n  h2 {\n    font-size: 1.75rem;\n    line-height: 1.2;\n  }\n  h3 {\n    font-size: 1.5rem;\n    line-height: 1.4;\n  }\n  h4 {\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n  h5 {\n    font-size: 1rem;\n    line-height: 1.5;\n  }\n  h6 {\n    font-size: 0.875rem;\n    line-height: 1.5;\n  }\n  p {\n    font-size: 0.875rem;\n    line-height: 1.6;\n  }\n  .body-default {\n    font-size: 1rem;\n    line-height: 1.6;\n  }\n  .body-secondary {\n    font-size: 0.875rem;\n    line-height: 1.6;\n  }\n  .body-captions {\n    font-size: 0.875rem;\n    line-height: 1.8;\n  }\n  .body-footnotes {\n    font-size: 0.75rem;\n    line-height: 1.8;\n  }\n\n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 3rem;\n      line-height: 1.2;\n    }\n    h2 {\n      font-size: 2.5rem;\n      line-height: 1.2;\n    }\n    h3 {\n      font-size: 2rem;\n      line-height: 1.4;\n    }\n    h4 {\n      font-size: 1.5rem;\n      line-height: 1.4;\n    }\n    h5 {\n      font-size: 1.25rem;\n      line-height: 1.5;\n    }\n    h6 {\n      font-size: 1rem;\n      line-height: 1.4;\n    }\n  }\n',
            ]
        ))
)
var templateObject_1,
    templateObject_2,
    templateObject_3,
    templateObject_4,
    templateObject_5,
    templateObject_6,
    templateObject_7,
    templateObject_8
