'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* background: ', '; */\n  background: green;\n  margin-bottom: 1.45rem;\n'], ['\n  /* background: ', '; */\n  background: green;\n  margin-bottom: 1.45rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  max-width: 960;\n  padding: 1.45rem 1.0875rem;\n'], ['\n  margin: 0 auto;\n  max-width: 960;\n  padding: 1.45rem 1.0875rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0;\n'], ['\n  margin: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: white;\n  text-decoration: none;\n'], ['\n  color: white;\n  text-decoration: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsby = require('gatsby');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Outer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.header.backgroundColor;
});

var Inner = _styledComponents2.default.div(_templateObject2);

var H1 = _styledComponents2.default.h1(_templateObject3);

var StyledLink = (0, _styledComponents2.default)(_gatsby.Link)(_templateObject4);

var Header = function Header(_ref) {
  var siteTitle = _ref.siteTitle;
  return _react2.default.createElement(
    Outer,
    null,
    _react2.default.createElement(
      Inner,
      null,
      _react2.default.createElement(
        H1,
        null,
        _react2.default.createElement(
          StyledLink,
          { to: '/' },
          siteTitle
        )
      )
    )
  );
};

exports.default = Header;

//# sourceMappingURL=header.js.map