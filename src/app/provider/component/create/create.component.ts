import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backClicked(){
    this.router.navigate([RoutingConstants.PROVIDER])
  }
}
