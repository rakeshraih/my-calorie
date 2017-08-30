import { Injectable } from '@angular/core';
import {ProfileService} from '../profile/profile.service';

@Injectable()
export class HomeService {
  constructor(private profileService: ProfileService) {

  }
}
