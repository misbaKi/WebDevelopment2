import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { babyModel } from './babyinfo/baby.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BabyinfoService {

  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:3000/posts"

  postBaby(data: any) {
    return this.http.post<babyModel>(this.baseurl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getbaby() {
    return this.http.get<babyModel[]>(this.baseurl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateBaby(data: any, id: number) {
    return this.http.put<babyModel>(this.baseurl + '/' + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteBaby(id: number) {
    return this.http.delete<babyModel>(this.baseurl + '/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
