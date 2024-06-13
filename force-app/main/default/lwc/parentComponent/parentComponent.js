import { LightningElement,track } from 'lwc';
import TAILWIND from '@salesforce/resourceUrl/Tailwind';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ParentComponent extends LightningElement {

    toggleMenu() {
        const mobileMenu = this.template.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('hidden');
    }

    connectedCallback() {
        // Define an array of paths for each stylesheet
        const stylesheetPaths = [
            '/tailwind-all.css',
            '/tailwind-all.min.css',
            '/tailwind-base.css',
            '/tailwind-base.min.css',
            '/tailwind-components.css',
            '/tailwind-components.min.css',
            '/tailwind-utilities.css',
            '/tailwind-utilities.min.css',
        ];

        // Load each stylesheet individually
        stylesheetPaths.forEach(path => {
            loadStyle(this, TAILWIND + path)
                .then(() => {
                    console.log(`Stylesheet ${TAILWIND + path} loaded successfully`);
                })
                .catch(error => {
                    console.error(`Error loading stylesheet ${TAILWIND + path}`, error);
                });
        });
    }

    smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.dataset.target;
        const targetElement = this.template.querySelector(`#${targetId}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}