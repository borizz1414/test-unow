import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'list-employees-container',
  templateUrl: './list-employees.container.html',
  styleUrls: ['./list-employees.container.scss'],
})
export class ListEmployees implements OnInit {
  title = 'test-unow';
  users: any;
  search: FormControl = new FormControl('');
  constructor(
    private _auth: AuthService,
    private router: Router,
    private _users: EmployeesService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._users.getUsers().subscribe((val) => {
      this.users = val;
    });
  }
  searchText() {
    this.filterSearch(this.search.value);
  }
  filterSearch(text: any) {
    if (text == '') return this.getUsers();
    const textValue = text.toLowerCase();
    const user = this.users.filter(
      (val: any) =>
        val.username.toLowerCase().includes(textValue) ||
        val.name.toLowerCase().includes(textValue) ||
        val.email.toLowerCase().includes(textValue) ||
        val.phone.toLowerCase().includes(textValue)
    );
    user.length > 0 ? (this.users = user) : this.getUsers();
  }
  logout() {
    this._auth.logout();
    this.router.navigate(['/auth']);
  }
}
