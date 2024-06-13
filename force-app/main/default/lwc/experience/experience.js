import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    Experience = [
        {
          id:1,
          start: "AUG 2022",
          end: "PRESENT",
          role: "Salesforce Consultant B1",
          domain: "Maritime and Energy Sectors",
          company: "Capgemini",
          works: [
            "Orchestrated migration of 10+ microservices to Spring Boot framework, optimizing performance as well as fixing the GeM violations.",
            "Achieved 40% faster response time by developing non-blocking architecture enabling asynchronous support.",
            "Engineered and deployed API gateway using Spring Cloud Gateway that enhanced system performance and scalability of the platform and reduced API response time by 25%.",
            "Worked on 50+ blocking issues and improvements to make the application secure and stable.",
          ],
          tech: ["Java", "Spring Boot", "Javascript", "Maven", "Junit"],
        },
        {
          id:2,
          start: "JUN 2022",
          end: "SEP 2022",
          role: "Graduate Engineer Trainee",
          domain: "Banking & Finance",
          company: "Larsen & Toubro Infotech",
          works: [
            "Implemented automation solutions by creating Autosys jobs in shell scripts to streamline various tasks, resulting in increased efficiency.",
            "Implemented JUnit test cases to achieve 80% coverage,enhancing code quality; addressed Sonar issues, ensuring clean and maintainable codebase",
          ],
          tech: ["Java", "Spring Boot", "React", "Shell Script", "Autosys"],
        },
      ];
}
