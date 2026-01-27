class ProgressButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.pageId = window.location.pathname; // Unique ID based on URL
  }

  connectedCallback() {
    const isCompleted = localStorage.getItem(this.pageId) === 'true';
    this.render(isCompleted);
  }

  toggleProgress() {
    const currentState = localStorage.getItem(this.pageId) === 'true';
    localStorage.setItem(this.pageId, !currentState);
    this.render(!currentState);S
  }

  render(completed) {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 20px;
          cursor: pointer;
          background: ${completed ? '#4CAF50' : '#eee'};
          color: ${completed ? 'white' : 'black'};
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      </style>
      <button>${completed ? '✓ Completed' : 'Mark as Complete'}</button>
    `;
    this.shadowRoot.querySelector('button').onclick = () => this.toggleProgress();
  }
}

customElements.define('progress-button', ProgressButton);