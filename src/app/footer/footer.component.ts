import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  navBarColor = 'dark';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.navBarColor = 'dark';

    this._globalService.subjectColorTheme.subscribe(
      (newColor:any) => {
        this.navBarColor = newColor || this._globalService.subjectColorTheme;

      }
    );
  }

}
