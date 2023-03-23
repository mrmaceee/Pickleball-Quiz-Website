class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav class="navbar">
            <div class="logo-container">
              <img src="x40.png" alt="Pickleball Quiz logo">
              <h1>pickleballquiz.com</h1>
            </div>
            <ul>
              <li><a href="paddlequiz10.html">Paddle Quiz</a></li>
              <li><a href="shoe-quiz.html">Shoe Quiz</a></li>
            </ul>
          </nav>
        </header>
      `
    }
  }
  
  customElements.define('my-header', MyHeader);
  