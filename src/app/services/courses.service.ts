import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.append('Content-Type', 'application/json');
  }


  GetAll(): Observable<HttpResponse<Course[]>> {
    return this.httpClient.get<Course[]>(environment.apiAddress + '/course/getall',
      { observe: 'response' });
  }
  Get(id: number): Observable<HttpResponse<Course>> {
    return this.httpClient.get<Course>(environment.apiAddress + '/course/get/' + id,
      { observe: 'response' });
  }

}
