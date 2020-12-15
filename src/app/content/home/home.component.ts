import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentColor : any;

  constructor(
    private _globalService: GlobalService
  ) {

  }

  ngOnInit(): void {
  }

  onClick() : void {

    this._globalService.subjectColorTheme.next(this.contentColor);

  }

  ngOnDestroy(): void {
    this._globalService.subjectColorTheme.next('dark');
  }

}
