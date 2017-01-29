import { AbstractList } from '../list/abstract.list';
import { Request } from './request';

export class RequestList
  extends
      AbstractList<Request>
  {
      constructor()
      {
        super();
        console.log( "asdasdsadasd" );
      }

      onRenderer( request : Request )
      {
          return "<table>" +
                    "<tr>" +
                      "<td>" +
                        request +
                      "</td>" +
                    "</tr>" +
                  "</table>";
      }
  }
