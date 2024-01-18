import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {pwaUpdate} from "./pwa-update";
import {Observable, tap} from "rxjs";
import {log} from "@utils/logger";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-pwa-update',
  standalone: true,
  imports: [
    MatButtonModule,
    AsyncPipe
  ],
  template: `
    @if (update$ | async; as versionUpdate) {
      <div>
        @if (versionUpdate) {
          <button (click)="reload()" color="primary" mat-raised-button>New Version Available - Click to Reload</button>
        }
      </div>
    }
  `,
  styleUrl: './pwa-update.component.scss'
})
export class PwaUpdateComponent {
  update$: Observable<boolean> = pwaUpdate().pipe(tap((version) => {
    log('info', version)
  }));

  reload() {
    window.location.reload();
  }
}
