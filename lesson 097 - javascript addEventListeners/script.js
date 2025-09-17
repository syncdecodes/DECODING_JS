console.log("addEventListeners")

btn.addEventListener("click", () => {
    console.log("Button clicked!");
});


element.addEventListener("dblclick", () => {
    console.log("Double clicked!");
});


box.addEventListener("mouseover", () => {
    box.style.background = "yellow";
});
box.addEventListener("mouseout", () => {
    box.style.background = "white";
});


element.addEventListener("mousedown", () => console.log("Mouse pressed"));
element.addEventListener("mouseup", () => console.log("Mouse released"));


element.addEventListener("mousemove", (e) => {
  console.log(`Mouse at X:${e.clientX}, Y:${e.clientY}`);
});


document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});
document.addEventListener("keyup", () => {
  console.log("Key released");
});


input.addEventListener("input", () => {
  console.log("Value:", input.value);
});


input.addEventListener("change", () => {
  console.log("Final value:", input.value);
});


input.addEventListener("focus", () => {
  input.style.border = "2px solid blue";
});
input.addEventListener("blur", () => {
  input.style.border = "1px solid gray";
});


form.addEventListener("submit", (e) => {
  e.preventDefault(); // page refresh stop
  console.log("Form submitted!");
});


window.addEventListener("scroll", () => {
  console.log("Page scrolled:", window.scrollY);
});


window.addEventListener("resize", () => {
  console.log("Window width:", window.innerWidth);
});


window.addEventListener("load", () => {
  console.log("Page fully loaded!");
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("HTML parsed and ready!");
});


element.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // default context menu hatana
  console.log("Right click detected!");
});
