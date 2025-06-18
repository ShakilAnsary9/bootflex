class BootFlexButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        button {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background-color: #0056b3;
          transform: translateY(-1px);
        }

        button:active {
          transform: translateY(1px);
        }
      </style>
      <button><slot></slot></button>
    `;
  }
}

customElements.define("boot-button", BootFlexButton);
