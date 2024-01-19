import { Component } from '@angular/core';

@Component({
  selector: 'app-cusotm-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './custom-loader.component.scss'
})
export class CustomLoaderComponent {

}
