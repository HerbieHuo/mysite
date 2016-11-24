import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  public getLeanCloundConfig(): {} {
    return {
      AddID: "",
      AppKey: ""
    }
  }

}
