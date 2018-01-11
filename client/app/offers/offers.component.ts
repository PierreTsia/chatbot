import { Component, OnInit } from '@angular/core';
import { BiAgriService } from '../services/bi-agri.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(public biAgri : BiAgriService) { }

  public offers = [];
  public supplyOffers = [];
  public packagings = [];

  ngOnInit() {
    this.getOffers();
    this.getSupplyOffers();
    this.getPackagings();

  }

  getOffers(){
    this.biAgri.getOffers().subscribe(
      data => {
        this.offers = data.offers,
          console.log(this.offers)
      },
      error => console.log(error),
    );
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

  getPackagings(){
    this.biAgri.getPackagings().subscribe(
      data => {
        this.packagings = data.packaging,
          console.log(this.packagings)
      },
      error => console.log(error),
    );
  }

}
