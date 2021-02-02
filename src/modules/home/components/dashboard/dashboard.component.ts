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
  public _moviesCover: CoverInfo[];

	constructor() {
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
