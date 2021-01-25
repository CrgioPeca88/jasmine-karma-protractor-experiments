import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';
import { EXCEL_FILE, ExtensionsFile } from '@shared/constants/custom-file-config.enum';

@Injectable({
    providedIn: 'root'
})
export class CsFileService {

    _excelConfig: any;

    constructor(@Inject(LOCALE_ID) private locale: string) {

        this._excelConfig = EXCEL_FILE.find((config => config.extension === ExtensionsFile.excel));
    }

    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: this._excelConfig.type });
        const date: string = formatDate(new Date(), 'ddMMyyyyhhmmss', this.locale);
        FileSaver.saveAs(data, fileName + '_' + date + this._excelConfig.extension);
    }
}
