import { NgModule } from '@angular/core';

//Modulos Externos
import { SharedModule } from '../shared/shared.module';
//Rutas
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
// Grafico
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Ng2Charts Graficas
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
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
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PageModule {}

