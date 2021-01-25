// Dependencies
import { Injectable } from '@angular/core';

// Assets
import { GetBusinessDaysRqMessage } from '@cs-core/models/dtos/GetBusinessDaysRqMessage.model';

@Injectable({
  providedIn: 'root'
})
export class CsDateService {

  constructor() {}

		// TODO: Refactorizar para usar el PIPE de date standard de angular.
		private zeroFormat(element: number): string {
			return ('0' + element).slice(-2);
		};

		private getBusinessDaysModel(startDate: Date, endDate: Date): GetBusinessDaysRqMessage {
			return {
					"startDate": `${startDate.getFullYear()}-${this.zeroFormat(startDate.getMonth() + 1)}-${this.zeroFormat(startDate.getDate())}`,
					"endDate": `${endDate.getFullYear()}-${this.zeroFormat(endDate.getMonth() + 1)}-${this.zeroFormat(endDate.getDate())}`,
					"month": endDate.getMonth() + 1
			};
		}

		private groupBySameMonth(startDate: Date, endDate: Date): GetBusinessDaysRqMessage[] {
    return [this.getBusinessDaysModel(startDate, endDate)];
  }

		private recursiveLoopDate(startDateTmp: Date, endDateTmp: Date, result: GetBusinessDaysRqMessage[]): GetBusinessDaysRqMessage[] {
			if(startDateTmp.getMonth() === endDateTmp.getMonth()) {
				result.push(this.getBusinessDaysModel(startDateTmp, endDateTmp));
				return result;
			} else {
				let sdTmp: Date = new Date(startDateTmp.getFullYear(), startDateTmp.getMonth(), 1);
				let edTmp: Date = new Date(startDateTmp.getFullYear(), startDateTmp.getMonth() + 1, 0);
				result.push(this.getBusinessDaysModel(sdTmp, edTmp));
				startDateTmp.setMonth(startDateTmp.getMonth() + 1);
				return this.recursiveLoopDate(startDateTmp, endDateTmp, result);
			}
		}

  private groupByDiferentMonth(startDate: Date, endDate: Date): GetBusinessDaysRqMessage[] {
				let startDateTmp: Date = new Date(startDate.getTime());
				let endDateTmp: Date = new Date(endDate.getTime());
				let lastMonthDayDate: Date = new Date(startDateTmp.getFullYear(), startDateTmp.getMonth() + 1, 0);
				let result: GetBusinessDaysRqMessage[] = [this.getBusinessDaysModel(startDateTmp, lastMonthDayDate)];
				startDateTmp.setMonth(startDateTmp.getMonth() + 1);
				startDateTmp.setDate(1);
    return this.recursiveLoopDate(startDateTmp, endDateTmp, result);
  }

		getDatesForMonthsInterval(startDate: Date, endDate: Date): GetBusinessDaysRqMessage[] {
    if(startDate.getMonth() === endDate.getMonth()) {
      return this.groupBySameMonth(startDate, endDate);
    } else {
      return this.groupByDiferentMonth(startDate, endDate);
    }
  }

  getNameMonths(): string[] {
    return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  }

  getMonth(month: number): string {
    month = month || 1;
    month = month >= 1 && month <= 12 ? month : 1;

    return this.getNameMonths()[month - 1];
  }

  getRangeYears(from: number): number[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - from; i <= currentYear; ++i) {
      years.push(i);
    }
    return years.reverse();
  }

  normaliceDate(year: string, month: string): string {
    return year.toString().concat((month.toString().length === 1 ? `0${month}` : month));
  }

  getDate(year: number, month: number): number {
    return new Date(year, month, 1, 0, 0, 0, 0).getTime();
  }

  getDateFromString(date: string): number {
    const yearMonth = date.trim().split(' ');
    return new Date(+yearMonth[0], +yearMonth[1], 1, 0, 0, 0, 0).getTime();
  }

}
