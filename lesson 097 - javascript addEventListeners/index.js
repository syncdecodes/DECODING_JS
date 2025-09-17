    const btn = document.querySelector(".btn");
    const box = document.querySelector(".box");
    const input = document.querySelector(".inp");
    const sel = document.querySelector(".sel");
    const form = document.querySelector(".myForm");

    // Mouse events
    btn.addEventListener("click", () => console.log("Button clicked"));
    box.addEventListener("dblclick", () => console.log("Box double-clicked"));
    box.addEventListener("mouseover", () => console.log("Mouse over box"));
    box.addEventListener("mouseout", () => console.log("Mouse out of box"));
    box.addEventListener("mousedown", () => console.log("Mouse button down"));
    box.addEventListener("mouseup", () => console.log("Mouse button up"));
    box.addEventListener("mousemove", (e) => console.log(`Mouse move X:${e.clientX} Y:${e.clientY}`));
    box.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      console.log("Right-click on box");
    });

    // Keyboard events
    document.addEventListener("keydown", (e) => console.log("Key down:", e.key));
    document.addEventListener("keyup", (e) => console.log("Key up:", e.key));

    // Input / form events
    input.addEventListener("input", () => console.log("Typing:", input.value));
    input.addEventListener("change", () => console.log("Input changed:", input.value));
    input.addEventListener("focus", () => console.log("Input focused"));
    input.addEventListener("blur", () => console.log("Input blurred"));
    sel.addEventListener("change", () => console.log("Select changed:", sel.value));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted!");
    });

    // Window events
    window.addEventListener("scroll", () => console.log("Page scrolled:", window.scrollY));
    window.addEventListener("resize", () => console.log("Window resized:", window.innerWidth, "x", window.innerHeight));
    window.addEventListener("load", () => console.log("Page fully loaded!"));
    document.addEventListener("DOMContentLoaded", () => console.log("HTML parsed and ready!"));