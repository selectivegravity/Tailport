// experienceCard.js
import { LightningElement, api } from 'lwc';

export default class ExperienceCard extends LightningElement {
    @api experience;

    if(experience){
        console.log(experience);
    }
    get experienceTitle() {
        return `${this.experience.role} - ${this.experience.company}`;
    }

    get experienceDate() {
        return `${this.experience.start} - ${this.experience.end}`;
    }
}
