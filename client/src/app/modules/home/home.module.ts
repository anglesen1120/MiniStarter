import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})

export class HomeModule { }
