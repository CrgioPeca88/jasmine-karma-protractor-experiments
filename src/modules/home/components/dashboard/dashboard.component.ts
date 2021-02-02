// Dependencies
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

export interface CoverInfo {
  urlCover: string;
  altCover: string;
  titleInfoCover: string;
  crewInfoCover: string;
  ratingInfoCover: string;
  showInfoCover: boolean;
}

@Component({
	selector: 'home-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements AfterViewInit {

	@ViewChild('imgMovie', { static: true }) imgMovie: ElementRef;
  public _showInfo: boolean;
  public _showInfo2: boolean;
  public _moviesCover: CoverInfo[];

	constructor() {
    this._showInfo = false;
    this._showInfo2 = false;
    this._moviesCover = [];
    this.imgMovie = new ElementRef(null);
  }

  ngAfterViewInit() {
    console.log(this.imgMovie);
  }

}
