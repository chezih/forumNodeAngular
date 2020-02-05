import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

  get getSelectedUser(): User {
    return this.selectedUser;
  }

  set setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  selectedUser: User;

  constructor(
    private http: HttpClient,
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8085/api/user`)
      .pipe(catchError(this.formatErrors));
  }

}

