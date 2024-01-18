import {map, Observable} from "rxjs";
import {SwUpdate} from "@angular/service-worker";
import {inject} from "@angular/core";
import {log} from "@utils/logger";

export const pwaUpdate = (): Observable<boolean> => {
  return inject(SwUpdate).versionUpdates.pipe(map((update) => {
    log('info', update);
    return update.type === 'VERSION_READY';
  }))
}
