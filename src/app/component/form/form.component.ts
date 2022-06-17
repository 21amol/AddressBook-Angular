import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contacts';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personId: any = this.route.snapshot.paramMap.get("personId");

  constructor(private router:Router, private route: ActivatedRoute, private service: ContactService) { }

  contact: Contact = new Contact (0,"","","","","","","","")

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["dashboard"]);
  }

  onSubmit() {
    console.log(this.contact);
    console.log("Form Submitted Successfully")
    this.service.addContacts(this.contact).subscribe((data: any) =>
     { this.router.navigate(["dashboard"])})
  }
updateContact() {
  this.service.updateContact(this.personId, this.contact).subscribe((data: any) =>
  { this.router.navigate(["dashboard"])})
 }

}
