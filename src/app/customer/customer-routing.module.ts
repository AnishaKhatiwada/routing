import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingConstants } from "../shared/constants/routing-constants";
import { CreateComponent } from "./components/create/create.component";
import { DetailsComponent } from "./components/details/details.component";
import { ViewComponent } from "./components/view/view.component";

const routes: Routes = [
    {
        path: '',
        component: ViewComponent
    },
    {
        path: RoutingConstants.CREATE,
        component: CreateComponent
    },
    {
        path: RoutingConstants.DETAILS,
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomerRoutingModule { }