import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  public leancloundConfig = {
    AppID: "",
    AppKey: ""
  };

  constructor() { }

}
