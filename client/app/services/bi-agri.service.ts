import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';  
import { Offer } from '../shared/models/offer.model';


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

  getSupplyProduct(supplyProduct): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/products/${supplyProduct}`).map(res => res.json());
  }

  getCollectionProduct(collectionProduct): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/collection/products/${collectionProduct}`).map(res => res.json());
  }

  

  //OFFERS


  getSupplyOffers(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/offers').map(res => res.json());
  }


  getOffers(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/collection/offers').map(res => res.json());
  }

  getSupplyOffer(supplyOffer): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/offers/${supplyOffer}`).map(res => res.json());
  }

  getOffer(offer): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/collection/offers/${offer}`).map(res => res.json());
  }


  //PACKAGING

  getPackagings(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/packagings').map(res => res.json());
  }

  getPackaging(packaging): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/packagings/${packaging}`).map(res => res.json());
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
