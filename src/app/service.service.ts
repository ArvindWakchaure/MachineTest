import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpOptions: { headers: HttpHeaders; };
  URL: string = 'http://machinetestma.sankalpcs.com/UserModule/'
  
  constructor(private httpClient: HttpClient) { }


  signIn(data: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
       })
     };
     console.log(data);
    return this.httpClient.post<any>(this.URL+'Login',data, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError))
  } 

  signUp(data: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
       })
     };
     console.log(data);
    return this.httpClient.post<any>(this.URL+'Register',data, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError))
  } 

  getUser(data: any): Observable<any> {
    return this.httpClient.get(`${this.URL}UserList?pageNo=${data.pageNo}&recordPerPage=${data.recordPerPage}`)
    .pipe(retry(0), catchError(this.handleError))
  }



handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    errorMessage = `Message: ${error.error.Message}`;
  }
  return throwError(errorMessage);

}
}
