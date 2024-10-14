class AppSidebarButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const appSidebarButtonTemplate = document.getElementById('sidebar-button').content.cloneNode(true);
        this.shadowRoot.appendChild(appSidebarButtonTemplate);
    }

    connectedCallback() {
        const text = this.getAttribute('text');
        const unread = this.getAttribute('unreadCount');
        const selected = this.getAttribute('selected');

        if (text) {
            this.shadowRoot.querySelector('.sidebar-button__text').innerText = text;
        }
        if (unread) {
            this.shadowRoot.querySelector('.sidebar-button__unread').innerText = unread;
            this.shadowRoot.querySelector('.sidebar-button__text').style.fontWeight = 'bold';
        }
        if (selected) {
            this.shadowRoot.querySelector('.sidebar-button__button').style.backgroundColor = '#D3E2FE';
            this.shadowRoot.querySelector('.sidebar-button__text').style.fontWeight = 'bold';
        }
    }

    /* disconnectedCallback() {

    } */

    /* attributeChangedCallback(attribute, oldValue, newValue) {

    }

    static get observedAttributes() {
        return [];
    } */
}

window.customElements.define('app-sidebar-button', AppSidebarButton);