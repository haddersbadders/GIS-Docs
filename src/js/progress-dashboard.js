class ProgressDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    window.addEventListener('storage', () => this.render());
  }

  getCompletedLessons() {
    // This looks for all localStorage keys that look like paths (starting with /)
    // and have a value of 'true'
    const lessons = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('/') && localStorage.getItem(key) === 'true') {
        lessons.push(key);
      }
    }
    return lessons;
  }

  clearProgress() {
    const completed = this.getCompletedLessons();
    completed.forEach(key => localStorage.removeItem(key));
    this.render();
  }

  render() {
    const completed = this.getCompletedLessons();
    
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: sans-serif; border: 1px solid #ddd; padding: 1rem; border-radius: 8px; }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 0.5rem; display: flex; justify-content: space-between; }
        .empty { color: #666; font-style: italic; }
        .clear-btn { margin-top: 1rem; color: red; cursor: pointer; background: none; border: 1px solid red; padding: 4px 8px; }
      </style>
      
      <h3>Your Learning Progress</h3>
      ${completed.length === 0 
        ? '<p class="empty">No lessons completed yet.</p>' 
        : `<ul>${completed.map(path => `<li><span>✅ ${path}</span> <a href="${path}">Review</a></li>`).join('')}</ul>`
      }
      
      ${completed.length > 0 ? '<button class="clear-btn">Reset All Progress</button>' : ''}
    `;

    const btn = this.shadowRoot.querySelector('.clear-btn');
    if(btn) btn.onclick = () => this.clearProgress();
  }
}

customElements.define('progress-dashboard', ProgressDashboard);