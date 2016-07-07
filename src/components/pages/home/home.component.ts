import {Component} from 'angular2/core';
import {BtnComponent} from "../../partials/btn/btn.component";
import {AuthService} from "../../../services/authentication/authentication.service";

@Component({
    selector: 'home',
    template: require('./home.html'),
    directives: [BtnComponent],
    providers:[AuthService]
})

export class HomeComponent {

    constructor(private auth: AuthService) {}
    login() {
        this.auth.login();
    }
    logout() {
        this.auth.logout();
    }
}

