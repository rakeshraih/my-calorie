import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {FormsModule} from '@angular/forms';
import {ProfileService} from './profile.service';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ],
  providers: [ProfileService],

  declarations: [ProfileComponent]
})
export class ProfileModule { }
