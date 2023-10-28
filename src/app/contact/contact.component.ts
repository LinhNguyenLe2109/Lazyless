import { Component } from '@angular/core';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    faSquareGithub = faSquareGithub;
    faLinkedin = faLinkedin;
    faLaptopCode = faLaptopCode;
}
