import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UserService {
  options: RequestOptions = new RequestOptions();
  register(username, password) {
    const url = 'http://localhost:3100/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
  login(username, password) {}
  constructor(private http: Http) {}
}
