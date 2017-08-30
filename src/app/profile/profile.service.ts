import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  profile: Profile;
  constructor() {
    const profileLocal = JSON.parse(localStorage.getItem('rakeshraih@gmail.com'));
    this.profile = (profileLocal != null && profileLocal) ? profileLocal : new Profile();
  }

  getUserDetails(emailId): Profile {
    const profileLocal = JSON.parse(localStorage.getItem(emailId));
    this.profile = (profileLocal != null && profileLocal) ? profileLocal : new Profile();
    return this.profile;
  }
}
