import { api, LightningElement } from 'lwc';

export default class FlowRedirectURL extends LightningElement {

    @api url;
    @api target = '_self';

    connectedCallback() {
        const completeURL = `${window.location.origin}/${this.url}`;
        window.open(completeURL, this.target);
    }
}