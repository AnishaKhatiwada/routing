import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateComponent } from "./component/create/create.component";
import { SelectComponent } from "./component/select/select.component";
import { ViewComponent } from "./component/view/view.component";
import { ProviderRoutingModule } from "./provider-routing.module";
import { ExternalComponent } from './component/select/external/external.component';
import { InternalComponent } from "./component/select/internal/internal.component";

@NgModule({
    declarations: [
        ViewComponent,
        SelectComponent,
        CreateComponent,
        ExternalComponent,
        InternalComponent
    ],
    imports: [
        CommonModule,
        ProviderRoutingModule,
        RouterModule
    ]
})

export class ProviderModule { }