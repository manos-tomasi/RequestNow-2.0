import { Model } from '../util/model';
import { Sector } from '../sector/sector';

export class User
  extends
    Model
{
     name       : string = "";
     ref_sector : string = "";
     password   : string = "";
     login      : string = "";
     mail       : string = "";
     role       : string = "";
     sector     : Sector;
}
