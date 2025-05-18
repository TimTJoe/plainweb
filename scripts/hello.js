class HelloComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log("Element added to DOM.")
    this.textContent = "Hello world!";
  }
}

customElements.define("pw-hello", HelloComponent);
