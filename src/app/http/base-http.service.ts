import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {handleError} from "@http/base-http-error";

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams | { [key: string]: string };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
  operation?: string;
  failWith?: any;
}

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  http: HttpClient = inject(HttpClient);

  public get<T>(url: string, options: IRequestOptions = {}): Observable<T> {
    return this.http.get<T>(url, options).pipe(
      catchError(handleError<T>(options.operation || ('GET' + url), options.failWith ? options.failWith : null)),
    )
  }

  public post<T>(url: string, payload: object, options: IRequestOptions = {}): Observable<T> {
    return this.http.post<T>(url, payload, options).pipe(
      catchError(handleError<T>(options.operation || ('POST' + url), options.failWith ? options.failWith : null)),
    )
  }

  public put<T>(url: string, payload: object, options: IRequestOptions = {}): Observable<T> {
    return this.http.put<T>(url, payload, options).pipe(
      catchError(handleError<T>(options.operation || ('PUT' + url), options.failWith ? options.failWith : null)),
    )
  }

  public delete<T>(url: string, options: IRequestOptions = {}): Observable<T> {
    return this.http.delete<T>(url, options).pipe(
      catchError(handleError<T>(options.operation || ('DELETE' + url), options.failWith ? options.failWith : null)),
    )
  }

  public upload<T>(req: HttpRequest<T>, options: IRequestOptions = {}): Observable<T | HttpEvent<T>> {
    return this.http.request<T>(req).pipe(
      catchError(handleError<T>(options.operation || ('UPLOAD' + req.url), options.failWith ? options.failWith : null)),
    )
  }


}
