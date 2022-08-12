import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(private ps:ProfileService,private routes:Router) { }
pofile:any
  ngOnInit(): void {
    this.view();
  }
  routing(){
    this.routes.navigate(['/view'])
  }
  view(){
    this.ps.viewProfile().subscribe(data=>{
      this.pofile=data
    console.log(data)
    },error=>{

    })
  }

  delete(data: any) {
    this.ps.delete(data).subscribe(a => {
      console.log("delete ")
      alert("deleted Succesfully")
     this.routing()
    })
  }

}
