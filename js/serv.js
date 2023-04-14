
const copyButton = document.querySelector("#copy-button");

copyButton.addEventListener("click", () => {
  const output = document.querySelector("#output-text");
  const textToCopy = output.textContent;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
});


      const textarea = document.getElementById("input-text");

textarea.addEventListener("keydown", (event) => {
  if (event.key === event.key.toUpperCase()) {
    const tooltip = document.createElement("div");
    tooltip.textContent = "No se permiten mayúsculas";
    tooltip.style.background = "red";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.position = "absolute";
    tooltip.style.top = "-1px";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
    textarea.parentElement.appendChild(tooltip);

    setTimeout(() => {
      tooltip.remove();
    }, 2000);

    event.preventDefault();
  }
});

      function encryptText(text) {
        let encryptedText = "";

        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          if (char.match(/[aeiou]/i)) {
            if (char === "e") {
              char = "enter";
            } else if (char === "i") {
              char = "imes";
            } else if (char === "a") {
              char = "ai";
            } else if (char === "o") {
              char = "ober";
            } else if (char === "u") {
              char = "ufat";
            }
          }
          encryptedText += char;
        }

        return encryptedText;
      }
      function decodeText(text) {
        let decodedText = "";

        decodedText = text.replace(/enter/g, "e");
        decodedText = decodedText.replace(/imes/g, "i");
        decodedText = decodedText.replace(/ai/g, "a");
        decodedText = decodedText.replace(/ober/g, "o");
        decodedText = decodedText.replace(/ufat/g, "u");

        return decodedText;
      }

     
      const inputText = document.querySelector("#input-text");
      const outputText = document.querySelector("#output-text");
      const encryptButton = document.querySelector("#encrypt-button");
      const decodeButton = document.querySelector("#decode-button");

      encryptButton.addEventListener("click", () => {
        const text = inputText.value;
        const encryptedText = encryptText(text);
        outputText.textContent = encryptedText;
      });
      decodeButton.addEventListener("click", () => {
        const text = inputText.value;
        const decodedText = decodeText(text);
        outputText.textContent = decodedText;
      });
     