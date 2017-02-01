import { Model } from '../util/model';

export class User
  extends
    Model
{
     name       : string = "";
     ref_sector : string = "";
     state      : string = "";
     password   : string = "";
     login      : string = "";
     mail       : string = "";
     role       : string = "";
}
