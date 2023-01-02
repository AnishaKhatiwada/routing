import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backClicked() {
    this.router.navigate([RoutingConstants.CUSTOMER])
  }
}
