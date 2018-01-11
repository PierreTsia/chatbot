import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class BiAgriService {

  constructor(public http: Http) { }


  //OFFERS

  getSupplyOffers(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/offers').map(res => res.json());
  }


  getOffers(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/collection/offers').map(res => res.json());
  }

  getSupplyOffer(supplyOffer): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/offers/${supplyOffer.id}`).map(res => res.json());
  } // => PARAM TO DO

  getOffer(offer): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/collection/offers/${offer.id}`).map(res => res.json());
  } // => PARAM TO DO



  //PACKAGING

  getPackagings(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/packagings').map(res => res.json());
  }

  getPackaging(packaging): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/packagings/${packaging.id}`).map(res => res.json());
  }


  // PRODUCT


  getCollectionProducts(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/collection/products').map(res => res.json());
  }

  getCollectionProduct(product): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/collection/products/${product.id}`).map(res => res.json());
  }



  getSupplyProducts(): Observable<any> {
    return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/products').map(res => res.json());
  }

  getSupplyProduct(product): Observable<any> {
    return this.http.get(`http://hackathon-api-biagri.herokuapp.com/supply/products/${product.id}`).map(res => res.json());
  }
}
