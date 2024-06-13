import { LightningElement, wire, api } from 'lwc';
import Images from '@salesforce/resourceUrl/Images';
// import getProjects from '@salesforce/apex/ProjectController.getProjects'; // Assuming you're fetching projects from an Apex controller

export default class Project extends LightningElement {
    projects = [
        {
          title: "E Kart",
          description:
            "Led a team and managed scrum board and tasks for the development of a web application demonstrating the advantages of e-commerce over traditional shopping.",
          tech: ["Javascript", "Spring Boot", "Oracle", "Jira"],
          image: Images + '/Project_Image.png',
        },
        {
          title: "Flyaway",
          description:
            "Flyaway is a hotel booking system which you will find similar to Airbnb in terms of ui/ux.Added Oauth2 providers and 2FA authentication.",
          tech: ["NextJs", "AuthJs", "MongoDB", "Tailwind"],
          image: Images + '/Project_Image.png',
        },
        {
          title: "Portfolio",
          description: "A minimalist portfolio with a bit of animations.",
          tech: ["NextJs", "FramerMotion", "CSS", "Tailwind"],
          image: Images + '/Project_Image.png',
        },
      ]
}
