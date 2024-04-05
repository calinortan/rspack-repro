import "./render.css";

export function render() {
  const xhr = {
    responseType: "",
    responseText: "hello",
    response: "world",
  };

  const x =
    (xhr.responseType || "text") !== "text" || xhr.responseText !== "string"
      ? "hello"
      : "world";

  console.log(x);

  const el = document.createElement("div");
  el.classList.add("text");
  document.getElementsByTagName("body")[0].appendChild(el);
  el.innerHTML = x;
}
