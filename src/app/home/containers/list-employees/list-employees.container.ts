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
    this._users.getUsers().subscribe((val) => {
      console.log(val);
      this.users = val;
    });

    this.search.valueChanges.subscribe((text: any) => {
      const user = this.users.filter((val: any) => val.username == text);
      this.users = user;
      console.log(user);
    });
  }
  searchText() {
    console.log(this.search.value);
    this.users.filter((val: any) => val.username == this.search.value);
  }
  logout() {
    this._auth.logout();
    this.router.navigate(['/auth']);
  }
}
