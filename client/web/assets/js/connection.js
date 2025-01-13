"use strict";

class ConnectionManager {
  constructor(stopGame, disconnectTimeout = 10) {
    this.stopGame = stopGame;
    this.disconnectTimeout = disconnectTimeout;
    this.initButton();
    this.initModal();
  }

  initButton() {
    const button = document.createElement("button");
    button.id = "disconnect-button";
    button.classList.add("hidden");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.textContent = "Disconnect";
    button.onclick = () => this.showModal();
    document.body.appendChild(button);

    this.disconnectButton = button;
  }

  initModal() {
    const modal = document.createElement("div");
    modal.id = "disconnect-modal";
    modal.classList.add("modal");
    modal.classList.add("fade");
    modal.innerHTML = `
      <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <p class="text-center">The game will be stopped in ${this.disconnectTimeout} seconds.</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    this.modal = modal;
  }

  showButton() {
    this.disconnectButton.classList.remove("hidden");
  }

  showModal() {
    if (this.modal) {
      this.modal.classList.add("show");
      this.modal.style.opacity = 1;

      setTimeout(() => {
        this.modal.style.opacity = 0;
        this.modal.classList.remove("show");
        this.stopGame();
      }, this.disconnectTimeout * 1000);
    }
  }
}

window.ConnectionManager = ConnectionManager;
