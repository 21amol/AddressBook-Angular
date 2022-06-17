import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // Adding contacts details...
  addContacts(contact: any) {
    return this.http.post("http://localhost:8080/addressbook/add", contact);
  }
  getContacts() {
    return this.http.get("http://localhost:8080/addressbook/get");
  }

 // Deleting Contact Details...
deleteContact(personId:number) {
  return this.http.delete("http://localhost:8080/addressbook/remove/" + personId)
 }

 // Updating Contact Details...
updateContact(personId:number, contact: any) {
  return this.http.put("http://localhost:8080/addressbook/edit/" + personId, contact)
 }

// Getting details By ID...
getContactByID(personId:number){
  return this.http.get("http://localhost:8080/addressbook/get/"+ personId);
 }

}
