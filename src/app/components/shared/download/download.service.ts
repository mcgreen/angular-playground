import {inject, Injectable} from '@angular/core';
import {Saver, SAVER} from "@utils/saver";
import {Observable} from "rxjs";
import {Download, download} from "@components/shared/download/download";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DownloadService {
  // intent would be to use endpoint that is for downloading
  private endpointUrl: string = '';
  private http: HttpClient = inject(HttpClient);
  private save: Saver = inject(SAVER);

  download(url: string, filename?: string): Observable<Download> {
    return this.http.get(this.endpointUrl, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
      params: {url: url}
    }).pipe(
      download((blob: any) => {
        return this.save(blob, filename)
      })
    )
  }

}
