import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error$ = new Subject<string>()

  handle(manage: string){
    this.error$.next(manage)
  }
  clear(){
    this.error$.next('')
  }
}
