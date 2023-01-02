import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createCustomerForm: FormGroup;
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  backClicked() {
    this.router.navigate([RoutingConstants.CUSTOMER])
  }
}
