// Dependencies
import { Component, ViewChildren, AfterViewInit, QueryList, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';

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
export class DashboardComponent implements AfterViewInit, OnDestroy {

	@ViewChildren('imgMovie') imgMovie: QueryList<any>;
  public _moviesCover: CoverInfo[];
  public _counter: number;
  private _counterSubscription: Subscription;

	constructor(private apiBackFacadeService: ApiBackFacadeService) {
    this._counter = 0;
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

  ngOnInit(): void {
    let _tmpTake$: Observable<number> = this.apiBackFacadeService.getDataCounter().pipe(take(9));
    this._counterSubscription = _tmpTake$.subscribe((value: number) => {
      console.log(value);
      this._counter = value;
    });
  }

  ngAfterViewInit(): void {
    console.log(this.imgMovie.toArray());
  }

  ngOnDestroy(): void {
    this._counterSubscription.unsubscribe();
  }

}
