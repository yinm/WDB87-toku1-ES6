const name = "Bob <script>";

// tagged template
console.log(html`<p>Hello, ${name}</p>`);

// tagged function
function html(templates, ...values) {
  // templates: ["<p>Hello, ", "${name}</p>"]
  // values: ["Bob <script>"]

  let result = "";
  for (let i = 0; i < templates.length; i++) {
    result += templates[i];
    if (i < values.length) {
      result += escapeHtml(values[i]);
    }
  }

  return result;
  // <p>Hello, Bob &lt;script&gt;</p>
}

function escapeHtml(str) {
  return str.replace(/&/g, '').
    replace(/&/g, '&amp;').
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;').
    replace(/"/g, '&quot;').
    replace(/'/g, '&#039;');
}