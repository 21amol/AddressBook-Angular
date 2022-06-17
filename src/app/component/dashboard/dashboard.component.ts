import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public contact:any

  constructor(private router:Router, private service: ContactService) { }

  ngOnInit(): void {
    this.service.getContacts().subscribe((getData:any)=>{           // Will show all contact details...
      this.contact=getData.data;
      });
      console.log(this.contact);
  }

   // It will navigate the user to form, when he clicks add button...
onAddUser(){
  this.router.navigate(["form"]);
}

// Delete call from service class...
deleteContact(personId:number) {
  console.log(personId);
  this.service.deleteContact(personId).subscribe((data) => { console.log("Data Deleted!!!");
  this.ngOnInit();
});
 }

 // Update call from service...
 updateContact(employeeID:number) {
  this.router.navigate(["update", employeeID]);
   }

}
