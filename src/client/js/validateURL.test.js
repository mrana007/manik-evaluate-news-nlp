import { validateURL } from "./validateURL.js";

test("Validates the protocol and domain of a URL", () => {
  //create messagePlaceholder element for testing purposes
  document.body.innerHTML = '<div id="errorMessage"></div>';

  const messagePlaceholder = document.getElementById("errorMessage");
  expect(validateURL("")).toBe(false);
  expect(validateURL("https://google.com")).toBe(true);
  expect(validateURL("https://medium.com")).toBe(true);
  expect(validateURL("httpss://medium.com")).toBe(false);
  expect(validateURL("https://googlecom")).toBe(false);
  expect(validateURL("https:/medium.com")).toBe(false);
  expect(validateURL("http://medium.co")).toBe(true);
});
