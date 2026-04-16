import { Injectable } from '@angular/core';

type User = {
  name: string;
  email: string;
  login: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | null = null;

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  login(identifiant: string): void {
    const name = this.makeRandomUsername(5);
    this.user = {
      name: name,
      email: name + '@gmail.com',
      login: identifiant,
    };
  }

  logout(): void {
    this.user = null;
  }

  get user(): User | null {
    const user = this.getLocalUser();
    if (this._user === null && user !== null) {
      this._user = user;
    }
    return this._user;
  }

  private set user(user: User | null) {
    this._user = user;
    if (user === null) {
      this.removeLocalUser();
    } else {
      this.setLocalUser(user);
    }
  }

  private setLocalUser(user: User | null): void {
    localStorage.setItem('user.name', user?.name ?? '');
    localStorage.setItem('user.email', user?.email ?? '');
    localStorage.setItem('user.login', user?.login ?? '');
  }

  private removeLocalUser(): void {
    localStorage.removeItem('user.name');
    localStorage.removeItem('user.email');
    localStorage.removeItem('user.login');
  }

  private getLocalUser(): User | null {
    const name = localStorage.getItem('user.name');
    const email = localStorage.getItem('user.email');
    const login = localStorage.getItem('user.login');

    if (!email || !name || !login) {
      return null;
    }
    return {
      name: name,
      email: email,
      login: login,
    };
  }

  private makeRandomUsername(sizename: number): string {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    const consonant = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'z',
    ];
    let username = '';

    for (let i = 0; i < sizename; i++) {
      if (i % 2 === 0) {
        username += consonant[Math.floor(Math.random() * consonant.length)];
      } else {
        username += vowel[Math.floor(Math.random() * vowel.length)];
      }
    }

    return username;
  }
}
