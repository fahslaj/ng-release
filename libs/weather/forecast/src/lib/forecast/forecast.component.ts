import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-release-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {}
