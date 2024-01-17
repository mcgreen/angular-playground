// observable with filter
import {combineLatest, map, Observable} from "rxjs";

export const combineLatestSimpleFilter = (sources$: Observable<any>[]): Observable<string> => {
  return combineLatest([...sources$]).pipe(
    map(([data, filterValue]) => {
      return data.filter((item: string) => {
        return item.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1})})
  );
}
