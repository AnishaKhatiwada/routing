import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { ViewComponent } from "./components/view/view.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { DetailsComponent } from './components/details/details.component';

@NgModule({
    declarations: [
        CreateComponent,
        ViewComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        RouterModule
    ]
})

export class CustomerModule { }