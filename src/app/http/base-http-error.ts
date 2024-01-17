import {log} from "@utils/logger";
import {Observable, of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

export function handleError<T>(operation: unknown, result?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
    log('info', `${operation} failed: ${error.message}`);
    log('error', error);
    return result ? of(result) : throwError(() => {return error});
  }
}
