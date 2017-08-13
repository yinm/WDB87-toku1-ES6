"use strict";

var _templateObject = _taggedTemplateLiteral(["<p>Hello, ", "</p>"], ["<p>Hello, ", "</p>"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var name = "Bob <script>";

// tagged template
console.log(html(_templateObject, name));

// tagged function
function html(templates) {
  // templates: ["<p>Hello, ", "${name}</p>"]
  // values: ["Bob <script>"]

  var result = "";
  for (var i = 0; i < templates.length; i++) {
    result += templates[i];
    if (i < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
      result += escapeHtml(arguments.length <= i + 1 ? undefined : arguments[i + 1]);
    }
  }

  return result;
  // <p>Hello, Bob &lt;script&gt;</p>
}

function escapeHtml(str) {
  return str.replace(/&/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}