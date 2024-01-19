import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {routeLoading$} from "@utils/router";
import {Observable} from "rxjs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {PwaComponent} from "./pwa/pwa.component";
import {PwaUpdateComponent} from "./pwa/pwa-update/pwa-update.component";
import {CustomLoaderComponent} from "@components/shared/custom-loader/custom-loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, MatToolbarModule, MatSidenavModule, PwaComponent, PwaUpdateComponent, CustomLoaderComponent],
  template: `
    <mat-toolbar class="toolbar">
      <mat-toolbar-row class="flex justify-content-sb">
        <span class="header">Angular Playground</span>
        <app-pwa></app-pwa>
        <app-pwa-update></app-pwa-update>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-sidenav-container class="container">
      <mat-sidenav-content>
        @if (loading$ | async) {
          <div class="flex-center">
            <app-cusotm-loader></app-cusotm-loader>
          </div>
          <div class="flex-center">
            <h2>Welcome to the application, preparing your experience</h2>
          </div>
        } @else {
          <h2 class="flex-center">Home</h2>
        }
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loading$: Observable<boolean | undefined> = routeLoading$();
}
