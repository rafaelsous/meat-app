import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static errorHandler(error: HttpErrorResponse | any) {
    let message: string;

    if (error instanceof HttpErrorResponse) {
      message = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      message = error.error;
    }

    console.log('Ooops!', message);

    return Observable.throw(message);
  }
}
