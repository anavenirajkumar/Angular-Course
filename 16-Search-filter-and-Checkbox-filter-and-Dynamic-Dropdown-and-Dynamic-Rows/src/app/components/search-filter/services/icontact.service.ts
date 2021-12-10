import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //
import { IContact } from '../model/IContact'; //
import { Observable, retry } from 'rxjs'; //
@Injectable({
  providedIn: 'root'
})
export class IcontactService {

  constructor(private httpClient : HttpClient) { }
  
  // Get All Contacts
  public getAllContacts():Observable<IContact[]>{
    let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/c367a0ea4259218222f959895636a6f1/raw/cc145cf94af9b313ff8cc7fdeb6e5decdce149f0/employees-30092020.json`;
    return this.httpClient.get<IContact[]>(dataURL).pipe(
      retry(1),
    )
  }
}
