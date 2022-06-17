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

}
