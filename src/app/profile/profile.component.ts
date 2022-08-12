import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();
  constructor(private ps: ProfileService, private route: Router) { }
  profiles: any
  ngOnInit(): void {
  }
routing(){
  this.route.navigate(['/view'])
}
  addProfile(data: NgForm) {
    this.ps.addProfile(this.profile).subscribe(va => {
     this.routing()
      console.log(va)
    }, er => {
      console.log(er)
    })
    console.log(this.profile)
  }


 
}
