import { Component, OnInit } from '@angular/core';
import { YesnoService } from "../../services/yesno.service";
import { YesNo } from "../../interfaces/yesno.interface";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-yesno',
  templateUrl: './yesno.component.html'
})
export class YesnoComponent {

  yesNo$: Observable<YesNo>;
  image: string;

  constructor(private yesNoService: YesnoService) {
    this.getYesNo();
  }

  getYesNo() {
    this.yesNo$ = this.yesNoService.getYesOrNo();
  }

}
