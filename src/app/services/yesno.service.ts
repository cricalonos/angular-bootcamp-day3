import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { YesNo } from "../interfaces/yesno.interface";

@Injectable()
export class YesnoService {

  url = "https://yesno.wtf/api";

  constructor(private http: HttpClient) {
  }

  getYesOrNo() {
    return this.http.get<YesNo>(this.url);
  }

}
