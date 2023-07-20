import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        MatToolbarModule,
        MatProgressBarModule
    ],
    exports: [
        MatToolbarModule,
        MatProgressBarModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }

