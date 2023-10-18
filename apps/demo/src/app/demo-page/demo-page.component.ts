import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@ng-release/header';

@Component({
  selector: 'ng-release-demo-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent {}
