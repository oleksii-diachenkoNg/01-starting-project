import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() { 
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() { 
    this.select.emit(this.user.id);
  }
}
