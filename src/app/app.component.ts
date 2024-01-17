import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {routeLoading$} from "@utils/router";
import {Observable} from "rxjs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, MatToolbarModule, MatSidenavModule],
  template: `
    <mat-toolbar class="toolbar">
      <mat-toolbar-row>
        <span class="header">Angular Playground</span>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-sidenav-container class="container">
      <mat-sidenav-content>
        @if (loading$ | async) {
          <h2>Welcome to the application, preparing your experience</h2>
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
