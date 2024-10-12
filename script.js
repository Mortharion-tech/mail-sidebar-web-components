class AppSidebarButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const appSidebarButtonTemplate = document.getElementById('sidebar-button').content.cloneNode(true);
        this.shadowRoot.appendChild(appSidebarButtonTemplate);
    //    const template = document.getElementById('sidebar-buton');
        
    }

    connectedCallback() {
        //this.shadowRoot.innerHTML = "Button";
    //    console.log(this);
        
        const text = this.getAttribute('text');
        const unread = this.getAttribute('unreadCount');
        const selected = this.getAttribute('selected');

        this.shadowRoot.querySelector('.text').innerText = text;
        if (unread) {
            this.shadowRoot.getElementById('unread').innerText = unread;
            this.shadowRoot.querySelector('.text').style.fontWeight = 'bold';
        }
        if (selected) {
            this.shadowRoot.querySelector('.highlight').style.backgroundColor = '#D3E2FE';
            this.shadowRoot.querySelector('.text').style.fontWeight = 'bold';
        }
    }

    disconnectedCallback() {

    }

    /* attributeChangedCallback(attribute, oldValue, newValue) {

    }

    static get observedAttributes() {
        return [];
    } */
}

window.customElements.define('app-sidebar-button', AppSidebarButton);