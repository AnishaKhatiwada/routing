import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingConstants } from "../shared/constants/routing-constants";
import { CreateComponent } from "./component/create/create.component";
import { ExternalComponent } from "./component/select/external/external.component";
import { InternalComponent } from "./component/select/internal/internal.component";
import { SelectComponent } from "./component/select/select.component";
import { ViewComponent } from "./component/view/view.component";

const routes: Routes = [
    {
        path: '',
        component: ViewComponent
    },
    {
        path: RoutingConstants.SELECT,
        component: SelectComponent,
        children: [
            {
                path: RoutingConstants.INTERNAL,
                component: InternalComponent
            },
            {
                path: RoutingConstants.EXTERNAL,
                component: ExternalComponent
            }
        ]
    },
    {
        path: RoutingConstants.CREATE,
        component: CreateComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProviderRoutingModule { }