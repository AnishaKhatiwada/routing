import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BackendApiConstants } from "src/app/shared/constants/backend.api.constants";

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    constructor(private http: HttpClient) { }
    // saveCustomer(postData) {
        // return this.http.post<Response>(
            // BackendApiConstants.generateWebPath(
                // BackendApiConstants.CUSTOMER
            // ),
            // postData
        // );
    // }
}