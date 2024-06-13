import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Images';

export default class Introduction extends LightningElement {
    MyPicture = Images + '/Abhishek_Smooth_fotor.jpg'
    github = Images + '/github2.png';
    leetcode = Images + '/leetcode2.png';
    linkedIn = Images + 'linkedin2.png';
    gmail = Images + '/gmail2.png'
}

// force-app\main\default\staticresources\Images\linkedin.png