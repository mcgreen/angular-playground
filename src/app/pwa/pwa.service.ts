import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  promptEvent!: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', (event: Event) => {
      this.promptEvent = event;
    })
  }
}
