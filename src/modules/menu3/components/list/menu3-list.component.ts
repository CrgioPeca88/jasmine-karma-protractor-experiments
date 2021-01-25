// Dependencies
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { GetAllMessage } from '@menu3/models/dtos/GetAllMessage.model';
import { Menu3DetailDialogData, Menu3DetailComponent } from '@menu3/components/detail/menu3-detail.component';
import { Menu3TransformerModel } from '@menu3/models/menu3-transformer.model';
import { DefaultResponseMessage } from '@cs-core/models/dtos/DefaultResponseMessage.model';

@Component({
	selector: 'menu3-list',
	templateUrl: './menu3-list.component.html',
	styleUrls: ['./menu3-list.component.less']
})
export class Menu3ListComponent implements OnInit, AfterViewInit {

	public _loadingMenu3: boolean;
	public _pageSizeOptions: number[];
	public _displayedColumns: string[];
	public _dataSource: MatTableDataSource<GetAllMessage>;
	public _menu3Transformer: Menu3TransformerModel;

	@ViewChild(MatSort, { static: false }) set contentSort(sort: MatSort) {
		if (this._dataSource) {
			this._dataSource.sort = sort;
		}
	};
	@ViewChild(MatPaginator, { static: false }) set contentPaginator(paginator: MatPaginator) {
		if (this._dataSource) {
			this._dataSource.paginator = paginator;
		}
	};

	constructor(
		private apiBackFacadeService: ApiBackFacadeService,
		private apiFrontFacadeService: ApiFrontFacadeService
	) {
		this._displayedColumns = ['tipoXInformacionId', 'numeroDocumento', 'p',
			'tipoNombre', 'cNombre', 'ynDescuenta', 'ynDescontado', 'options'];
		this._pageSizeOptions = [10, 20, 50];
		this._menu3Transformer = new Menu3TransformerModel(this.apiFrontFacadeService);
		this._dataSource = new MatTableDataSource<GetAllMessage>([]);
	}

	ngOnInit() {
		this.getAllMenu3();
	}

	ngAfterViewInit() {
		this._dataSource.paginator._intl.itemsPerPageLabel = 'es por página';
	}

	private getYn(element: boolean | number): string {
		return ((element) ? 'SI' : 'NO');
	}

	private modifyResponse(menu3Response: GetAllMessage[]): GetAllMessage[] {
		return menu3Response.map((nRes: GetAllMessage) => {
			nRes.ynDescuenta = this.getYn(nRes.descuenta);
			nRes.ynDescontado = this.getYn(nRes.descontado);
			const pName =
			`${nRes.primerNombre} ${nRes.segundoNombre} ${nRes.primerApellido} ${nRes.segundoApellido}`;
			nRes.p = this.apiFrontFacadeService.handlerWhiteSpace(pName);
			return nRes;
		});
	}

	getAllMenu3(): void {
		this._loadingMenu3 = true;
		this.apiBackFacadeService.getAllMenu3().subscribe(
			(menu3Response: GetAllMessage[]) => {
				const menu3ResponseMod: GetAllMessage[] = this.modifyResponse(menu3Response);
				this._dataSource = new MatTableDataSource<GetAllMessage>(menu3ResponseMod);
				this._loadingMenu3 = false;
			}
		);
	}

	dataFilter(filterValue: string) {
		this._dataSource.filter = filterValue;
	}

	nDetail(n): void {
		let nInitialDate: string = this.apiFrontFacadeService.applyDatePipe(n.fechaInicio);
		let nEndDate: string = this.apiFrontFacadeService.applyDatePipe(n.fechaFin);
		let nMenu3DetailDialogData: Menu3DetailDialogData = {
			nId: n.tipoXInformacionId,
			documentTypeName: n.tipoDocumento,
			nInitialDate: nInitialDate,
			nEndDate: nEndDate,
			cell: n.nombreCelula,
			cId: n.descontado,
			absenceDays: n.diasAusencia,
			nTypeName: n.tipoNombre,
		};
		this.apiFrontFacadeService.openComponentDialog<Menu3DetailComponent>(
			nMenu3DetailDialogData,
			'35%',
			Menu3DetailComponent
		);
	}

	delete(id: string): void {
		let questionMsg: string = 'Si continua eliminará el registro. ¿Esta seguro que desea continuar?';
		this.apiFrontFacadeService.openDialog('cancel_schedule_send', questionMsg, '40%', true).afterClosed().subscribe(
			(confirmResult: boolean) => {
				if (confirmResult) {
					this.apiBackFacadeService.delete(id).subscribe(
						(defaultRes: DefaultResponseMessage) => {
							if (defaultRes.response) {
								this.getAllMenu3();
								this.apiFrontFacadeService.openDialog('check_circle', 'Se ha eliminado satisfactoriamente', '35%');
							}
						});
				}
			}
		);
	}

	getTooltipMessage(text: string, value: string | number) {
		return `${text} ${value}`;
	}

	modify(id: string): void {
		let routePath: string[] = [
			'/menu3',
			id,
			'modificar'
		];
		this.apiFrontFacadeService.routeRedirect(routePath);
	}

	exportFileXlsx(): void {
		const dataXlsx = this._menu3Transformer.transformToXlsxData(this._dataSource.data);
		this.apiFrontFacadeService.exportAsExcelFile(dataXlsx, 'lista');
	}

}
