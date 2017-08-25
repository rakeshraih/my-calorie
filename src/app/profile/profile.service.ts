import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  getUserDetails(emailId): Profile {
    let profile = new Profile();
    const profileLocal = JSON.parse(localStorage.getItem(emailId));
    profile = (profile != null && profile) ? profileLocal : profile;
    return profile;
  }
}
