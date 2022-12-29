import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private url = 'https://api.github.com/users/William-Dias-Marcos/repos';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }
}
