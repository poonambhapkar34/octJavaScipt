import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  //Services in Angular are simply typescript classes with the @injectible decorator.
  // This decorator tells angular that the class is a service and can be injected into components that need that service. They can also inject other services as dependencies
  public marks = 60;
  constructor() { }
}
