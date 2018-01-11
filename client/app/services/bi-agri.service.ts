import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';  


@Injectable()
export class BiAgriService {

  constructor(private http : Http) { }


  //PRODUCT

  getSupplyProducts(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/products').map(res => res.json());
  }

  getCollectionProducts(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/collection/products').map(res => res.json());
  }

  getSupplyProduct(id): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/products/${id}`).map(res => res.json());
  }

  getCollectionProduct(id): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/collection/products/${id}`).map(res => res.json());
  }

  

  //OFFERS


  getSupplyOffers(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/offers').map(res => res.json());
  }


  getOffers(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/collection/offers').map(res => res.json());
  }

  getSupplyOffer(id): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/offers/${id}`).map(res => res.json());
  }

  getOffer(id): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/collection/offers/${id}`).map(res => res.json());
  }


  //PACKAGING

  getPackagings(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/packagings').map(res => res.json());
  }

  getPackaging(id): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/packagings/${id}`).map(res => res.json());
  }

  //CONTACT

/*   postContactMessage(): Observable<any> {
    return this.http.post()
  } */
  //TEAM-MEMBER


  //ORDER

  //ENGAGEMENT

  //FARMER




}
