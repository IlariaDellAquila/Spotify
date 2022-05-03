import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged, filter, switchMap, toArray } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import {ajax} from 'rxjs/ajax';
import { UserService } from 'src/app/services/user.service';
import { fn } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @ViewChild('userSearch') set userSearch(input: undefined) {
    if (!input) return;
    this.Input(input);
  }

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }



  Input(input: any) {
    fromEvent(input.nativeElement, 'input')
      .pipe(
        // pluck('target', 'value'),
        //debounceTime(500)
        // distinctUntilChanged(),
        // filter((v:any) => v.length > 2),
        this._service.liveSearch('target', 'value',500,  (v:any) => v.length > 2),
        switchMap((v:any )=> this._service.getUsers().pipe(
          switchMap((u:any) => u),
          filter((u:any) => (u.name.toLowerCase().includes(v.toLowerCase())) || (u.username.toLowerCase().includes(v.toLowerCase()))),
          toArray()
        ))

      ).subscribe(console.log)
  }


}
