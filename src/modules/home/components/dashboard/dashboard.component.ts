// Dependencies
import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

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

	@ViewChildren('imgMovie') imgMovie: QueryList<any>;
  public _showInfo: boolean;
  public _showInfo2: boolean;
  public _moviesCover: CoverInfo[];

	constructor() {
    this._showInfo = false;
    this._showInfo2 = false;
    this._moviesCover = [{
      urlCover: `../../../assets/img/battle_royale.jpg`,
      altCover: `Battle_Royale`,
      titleInfoCover: `Battle Royale (2000)`,
      crewInfoCover: `Kinji Fukasaku (dir.), Tatsuya Fujiwara, Aki Maeda`,
      ratingInfoCover: `7.6`,
      showInfoCover: false
    }, {
      urlCover: `../../../assets/img/battle_royale.jpg`,
      altCover: `Battle_Royale`,
      titleInfoCover: `Battle Royale (2000)`,
      crewInfoCover: `Kinji Fukasaku (dir.), Tatsuya Fujiwara, Aki Maeda`,
      ratingInfoCover: `7.6`,
      showInfoCover: false
    }];
  }

  ngAfterViewInit() {
    console.log(this.imgMovie.toArray());
  }

}
