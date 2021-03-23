// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';

// Assets
import { Menu3Service } from '@shared/core/services/api-back/menu3.service';
import { GetAllMessage, GetAllMessageObj } from '@menu3/models/dtos/GetAllMessage.model';

export default function() {
	describe('1). Menu3 Service:', () => {

    //let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: Menu3Service;
    let gam: GetAllMessageObj;

		beforeEach(waitForAsync(() => {
			// InitialArrange
      httpTestingController = TestBed.inject(HttpTestingController);
      service = TestBed.inject(Menu3Service);
      gam = new GetAllMessageObj();
		}));

		it('1.1). should create the Menu3 service', waitForAsync( () => {
			// Action & Assert
			expect(service).toBeTruthy();
		}));

    it('1.2). should get data from getAllMenu3()', waitForAsync( () => {
      // Arrange
      const data1: GetAllMessage = gam.getDefaultInstance();
      const data2: GetAllMessage = gam.getDefaultInstance(2);
      const expectedData: GetAllMessage[] = [data1, data2];
      let dataError, dataResponse;
      // Action
      service.getAllMenu3().subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });
      const request = httpTestingController.expectOne(`http://localhost:3000/menu3`);
      request.flush(expectedData);
      // Assert
      expect(dataResponse.length).toEqual(2);
      expect(dataError).toBeUndefined();
		}));

	});
}
