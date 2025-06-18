class BootFlexAccordion extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.innerHTML;
    this.setup();
  }

  setup() {
    this.querySelectorAll('accordion-header').forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });
  }

  connectedCallback() {
    const style = document.createElement('style');
    style.textContent = `
      accordion-item {
        display: block;
        border: 1px solid #ccc;
        border-radius: 6px;
        overflow: hidden;
        margin: 0.5rem 0;
      }

      accordion-header {
        display: block;
        background: #007bff;
        color: #fff;
        padding: 1rem;
        font-weight: bold;
      }

      accordion-body {
        display: none;
        background: #f9f9f9;
        padding: 1rem;
      }

      accordion-item.active accordion-body {
        display: block;
      }
    `;
    this.prepend(style);
  }
}

customElements.define('boot-accordion', BootFlexAccordion);
