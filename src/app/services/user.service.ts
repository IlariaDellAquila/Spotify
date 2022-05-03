import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  liveSearch(event:any, value: any, time:number, v:any) {
    return (source$: any) =>  source$.pipe(
     pluck(event, value),
     debounceTime(time),
     distinctUntilChanged(),
     filter(v)
    )

  }
}
