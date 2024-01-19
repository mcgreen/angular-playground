import {computed, Signal, signal, WritableSignal} from "@angular/core";


export class StateStore<T> {
  readonly state: WritableSignal<T> = signal({} as T);

  select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => {
      return this.state()[key]
    });
  }

  setState<K extends keyof T>(key: K, data: T[K]) {
    this.state.update((currentValue: T): T => {
      return {...currentValue, [key]: data}
    });
  }

  setPartialState(partialState: Partial<T>): void {
    this.state.update((currentValue: T): T & Partial<T> => {
      return {...currentValue, ...partialState}
    });
  }
}
