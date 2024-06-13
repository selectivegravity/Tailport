import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Images';
import RESUME from '@salesforce/resourceUrl/Document';
import { loadScript } from 'lightning/platformResourceLoader';

export default class Introduction extends LightningElement {
    MyPicture = Images + '/Abhishek_Smooth_fotor.jpg'
    github = Images + '/github2.png';
    leetcode = Images + '/leetcode2.png';
    linkedIn = Images + 'linkedin2.png';
    gmail = Images + '/gmail2.png';
    // resume = RESUME +'/Abhishek_Aman_CV.pdf';

    downloadResume() {
        console.log(document.body);
        // Create an invisible link and trigger the download
        const link = document.createElement('a');
        link.href = this.resume;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// force-app\main\default\staticresources\Images\linkedin.png