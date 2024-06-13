import { LightningElement } from 'lwc';

export default class Education extends LightningElement {
  Education = [
    {
        id: 1,
        degree: 'B.Tech',
        institution: 'National Institute of Technology, Silchar',
        start: 'AUG 2018',
        end: 'JUN 2022',
        score: '7.8 CGPA'
    },
    {
        id: 2,
        degree: 'Senior Secondary',
        institution: 'P.N. National Public School',
        start: 'AUG 2015',
        end: 'JUL 2017',
        score: '90.2 %'
    },
    {
      id: 3,
      degree: 'Higher Secondary',
      institution: 'Smt. D.D.T. Inter College',
      start: 'AUG 2013',
      end: 'JUL 2015',
      score: '9.8 CGPA'
  }
];
}