const textArea = document.querySelectorAll("textarea");
const html_code = document.querySelector("#html");
const css_code = document.querySelector("#css");

const js_code = document.querySelector("#js");
const output = document.querySelector("#output");

html_code.addEventListener("keyup", () => {
  output.contentDocument.body.innerHTML = `${html_code.value}`;
});

css_code.addEventListener("keyup", () => {
  output.contentDocument.head.innerHTML = `<style>${css_code.value}  </style>`;
});

js_code.addEventListener("blur", () => {
  output.contentWindow.eval(js_code.value);
});
