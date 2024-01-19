import {finalize, map, Observable, Subject} from "rxjs";
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";
import {inject} from "@angular/core";

export const routeLoading$ = (): Observable<boolean | undefined> => {
  return inject(Router).events.pipe(map((event: any) => {
    return routeInstances(event);
  }))
}

export const routeInstances = (event?: any): (boolean | undefined) => {
  if (event instanceof RouteConfigLoadEnd) {
    return false;
  } else if (event instanceof RouteConfigLoadStart) {
    return true;
  }
  return undefined;
}

export function finalizeLoading<T>(loader: Subject<any>): (source$: Observable<T>) => Observable<T> {
  return (source$) => {
    return source$.pipe(finalize(() => {
      return loader.next(false)
    }))
  }
}
