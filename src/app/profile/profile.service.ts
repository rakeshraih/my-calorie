import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  profile: Profile;
  profileKey = 'my-calorie-app';

  constructor() {
    const profileLocal = JSON.parse(localStorage.getItem(this.profileKey));
    this.profile = (profileLocal != null && profileLocal) ? profileLocal : new Profile();
  }

  getUserDetails(): Profile {

    const profileLocal = JSON.parse(localStorage.getItem(this.profileKey));
    this.profile = (profileLocal != null && profileLocal) ? profileLocal : new Profile();
    return this.profile;
  }

  saveProfile(profile) {
    const profileData =  JSON.stringify(profile);
    localStorage.setItem(this.profileKey, profileData);
  }
}
