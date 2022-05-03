import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: User[] = [];
  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this._service.getUsers().subscribe(
      (data: any) => {
        this.cards = data;
      })
  }

}
