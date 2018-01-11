import { Component, OnInit } from '@angular/core';
import { BiAgriService } from '../services/bi-agri.service';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-offerspro',
  templateUrl: './offerspro.component.html',
  styleUrls: ['./offerspro.component.scss']
})
export class OffersproComponent implements OnInit {

  public supplyOffers = [];
  public offers = [];

  constructor(private biAgri: BiAgriService) { }

  ngOnInit() {
    this.getSupplyOffers();
  }

  getSupplyOffers(){
    this.biAgri.getSupplyOffers().subscribe(
      data => {
        this.supplyOffers = data.supplyOffers,
          console.log(this.supplyOffers)
      },
      error => console.log(error),
    );
  }

}
