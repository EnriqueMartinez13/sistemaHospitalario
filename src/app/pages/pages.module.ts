import { NgModule } from '@angular/core';

//Modulos Externos
import { SharedModule } from '../shared/shared.module';
//Rutas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    exports: [
       // PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports : [
        //Modulos externos
        SharedModule,
        //Rutas
        PAGES_ROUTES
    ]
})

export class PageModule {}

