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

  ngOnInit() {
    this.getOffers()
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


}
