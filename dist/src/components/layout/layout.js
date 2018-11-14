'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  max-width: 960;\n  padding: 0 1.0875rem 1.45rem;\n  padding-top: 0;\n'], ['\n  margin: 0 auto;\n  max-width: 960;\n  padding: 0 1.0875rem 1.45rem;\n  padding-top: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        query SiteTitleQuery {\n          site {\n            siteMetadata {\n              title\n            }\n          }\n        }\n    '], ['\n        query SiteTitleQuery {\n          site {\n            siteMetadata {\n              title\n            }\n          }\n        }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _gatsby = require('gatsby');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _drab = require('../../themes/drab');

var _globalStyle = require('../style/global-style');

var _globalStyle2 = _interopRequireDefault(_globalStyle);

var _header = require('../header/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//import './layout.css'

var Content = _styledComponents2.default.div(_templateObject);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _drab.theme },
    _react2.default.createElement(_gatsby.StaticQuery, {
      query: (0, _gatsby.graphql)(_templateObject2),
      render: function render(data) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactHelmet2.default,
            {
              title: data.site.siteMetadata.title,
              meta: [{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]
            },
            _react2.default.createElement('html', { lang: 'en' })
          ),
          _react2.default.createElement(_globalStyle2.default, null),
          _react2.default.createElement(_header2.default, { siteTitle: data.site.siteMetadata.title }),
          _react2.default.createElement(
            Content,
            null,
            children
          )
        );
      }
    })
  );
};

Layout.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Layout;

//# sourceMappingURL=layout.js.map