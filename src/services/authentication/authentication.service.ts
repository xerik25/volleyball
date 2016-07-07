// services/auth.service.ts
import {Injectable} from 'angular2/core';

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

    lock = new Auth0Lock('Do9Q544xaYXOvFoiqqUoIzhPNGq4XV8P', 'xerik25.auth0.com');

    login() {
        this.lock.show((error: string, profile: Object, id_token: string) => {
            if (error) {
                console.log(error);
            } else {
                console.log('logged in');
            }
            // We get a profile object for the user from Auth0
            localStorage.setItem('profile', JSON.stringify(profile));
            // We also get the user's JWT
            localStorage.setItem('id_token', id_token);
        });
    }

    logout() {
        // To log out, we just need to remove
        // the user's profile and token
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        console.log('logged out');
    }
}
