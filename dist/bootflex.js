(function(){"use strict";class t extends HTMLElement{constructor(){super();const o=this.attachShadow({mode:"open"});o.innerHTML=`
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
    `}}customElements.define("boot-button",t);class e extends HTMLElement{constructor(){super(),this.innerHTML=this.innerHTML,this.setup()}setup(){this.querySelectorAll("accordion-header").forEach(o=>{o.style.cursor="pointer",o.addEventListener("click",()=>{o.parentElement.classList.toggle("active")})})}connectedCallback(){const o=document.createElement("style");o.textContent=`
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
    `,this.prepend(o)}}customElements.define("boot-accordion",e)})();
