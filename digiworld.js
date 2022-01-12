class DetailsOneOpen extends HTMLElement {
    constructor(){
        super();
        this.details = this.querySelectorAll('[details-open-single]')
        this.detailsOpenOne();
    }
    detailsOpenOne() {
        let details = this.details;
        this.details.forEach(function (detail) {
            detail.addEventListener('click', () => {
                details.forEach((item) => {
                    if(item != detail){
                        item.removeAttribute('open')
                    }
                });
            });
        });
    }
}

customElements.define('details-one-open', DetailsOneOpen);