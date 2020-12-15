import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../services/global.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Angular Training';
  subtitle = 'Cloudstaff day two of Angular Training';

  navBarColor = 'dark';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.subjectColorTheme.subscribe(
      (newColor:any) => {
        this.navBarColor = newColor || this._globalService.subjectColorTheme;

      }
    );


  }

}
