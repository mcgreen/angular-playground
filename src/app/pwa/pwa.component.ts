import {Component, inject} from '@angular/core';
import {PwaService} from "./pwa.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-pwa',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  template: `
    @if (pwa.promptEvent) {
      <button (click)="install()" mat-raised-button>Desktop Install</button>
    }
  `,
  styleUrl: './pwa.component.scss'
})
export class PwaComponent {

  pwa = inject(PwaService);

  install() {
    this.pwa.promptEvent?.prompt();
  }

}
