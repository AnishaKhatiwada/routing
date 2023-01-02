import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  backClicked(){
    this.router.navigate([RoutingConstants.HOME])
  }
}
