import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent
],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
