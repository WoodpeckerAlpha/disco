import { getRandomColor } from "./utils";

export default function initApp() {
    const button = document.createElement("button");
    button.classList = "button";
    button.textContent = "Изменить цвет страницы";

    const body = document.querySelector("body");

    body.appendChild(button);

    button.addEventListener("click", () => {
        const color = getRandomColor();
        console.log(color);

        body.style.backgroundColor = color;
    });
}
