import { LightningElement,api } from 'lwc';

export default class EducationCard extends LightningElement {
    @api education;

    get educationTitle() {
        return `${this.education.degree} - ${this.education.institution}`;
    }

    get educationDateRange() {
        return `${this.education.start} - ${this.education.end}`;
    }

    get educationScore() {
        return `Score: ${this.education.score}`;
    }
}