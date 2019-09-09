import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Informatica } from './informatica/informatica.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler'
import { MenuItem } from 'app/informatica-detail/menu-item/menu-item.model';
@Injectable()
export class InformaticasService {

  constructor(private http: Http) { }

  informaticas(): Observable<Informatica[]> {
    return this.http.get(`${MEAT_API}/informaticas`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  informaticaById(id: string): Observable<Informatica> {
    return this.http.get(`${MEAT_API}/informaticas/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfInformatica(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/informaticas/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfInformatica(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/informaticas/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}