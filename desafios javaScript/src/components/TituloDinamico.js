class TituloDinamico extends HTMLElement {
    constructor () {
        super ();

        const shadow = this.attachShadow({ mode: "open"});

        //tres etapadas cruciais:
        //base do componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }

}

customElements.define('titulo-dinamico', TituloDinamico);