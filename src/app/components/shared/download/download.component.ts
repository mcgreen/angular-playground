import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {Download} from "@components/shared/download/download";
import {Observable} from "rxjs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AsyncPipe} from "@angular/common";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {DownloadService} from "@components/shared/download/download.service";
import {getSaver, SAVER} from "@utils/saver";

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    MatProgressBarModule
  ],
  template: `
   <span>
     <button (click)="download()" mat-icon-button>
       <mat-icon color="primary">download</mat-icon>
     </button>
     @if (download$ | async; as download) {
       <mat-progress-bar
       [mode]="download.state === 'PENDING' ? 'buffer' : 'determinate'"
       [value]="download.progress">
       </mat-progress-bar>
     }
   </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DownloadService, {provide: SAVER, useFactory: getSaver}],
  styleUrl: './download.component.scss'
})
export class DownloadComponent {

  download$!: Observable<Download>;
  @Input() url!: string;
  @Input() name!: string;
  private downloads: DownloadService = inject(DownloadService);

  download() {
    this.download$ = this.downloads.download(this.url, this.name);
  }

}
