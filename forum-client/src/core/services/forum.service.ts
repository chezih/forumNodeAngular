import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Thread} from '../models/thread.model';
import {User} from '../models/user.model';
import {Comment} from '../models/comment.model';

@Injectable()
export class ForumService {
  constructor(
    private http: HttpClient,
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getForum(): Observable<Thread[]> {
    return this.http.get<Thread[]>(`http://localhost:8085/api/thread`)
      .pipe(catchError(this.formatErrors));
  }


  addThread(content: string, userId: number): Observable<Thread> {
    return this.http.post<Thread>(
      `http://localhost:8085/api/thread`,
      {content, userId}
    ).pipe(catchError(this.formatErrors));
  }

  addComment(content: string, userId: number, threadId: number): Observable<Comment> {
    return this.http.post<Comment>(
      `http://localhost:8085/api/comment`,
      {content, userId, threadId},
    ).pipe(catchError(this.formatErrors));
  }

}
