import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Student } from "../models/student";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  // API path
  base_path = "http://localhost:3000/students";

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // Create a new item
  createItem(item): Observable<Student> {
    return this.http.post<Student>(
      this.base_path,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  // Get single student data by ID
  getItem(id): Observable<Student> {
    return this.http.get<Student>(this.base_path + "/" + id);
  }

  // Get students data
  getList(): Observable<Student> {
    return this.http.get<Student>(this.base_path);
  }

  // Update item by id
  updateItem(id, item): Observable<Student> {
    return this.http.put<Student>(
      this.base_path + "/" + id,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  // Delete item by id
  deleteItem(id) {
    return this.http.delete<Student>(
      this.base_path + "/" + id,
      this.httpOptions
    );
  }

  // // Handle API errors
  // handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error("An error occurred:", error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` + `body was: ${error.error}`
  //     );
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError("Something bad happened; please try again later.");
  // }
}
