import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@ng-release/header';
import { ForecastComponent } from '@ng-release/weather/forecast';

@Component({
  selector: 'ng-release-demo-page',
  standalone: true,
  imports: [HeaderComponent, ForecastComponent, CommonModule],
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent {}
