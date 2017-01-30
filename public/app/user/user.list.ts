import { AbstractList } from '../list/abstract.list';
import { User } from './user';

export class UserList
  extends
      AbstractList<User>
  {
      onRenderer( user : User )
      {
          return "<table class=\"list-table\">" +
                    "<tr>" +
                      "<td class=\"list-icon\" rowspan=\"3\">"+
                        "<i class=\"fa fa-user\" aria-hidden=\"true\"></i>" +
                      "</td>" +
                      "<td colspan=\"3\" class=\"list-title\">" +
                        user.name +
                      "</td>" +
                    "</tr>" +
                    "<tr>" +
                      "<td class=\"list-field\">Email: </td>" +
                      "<td class=\"list-value\">" + user.mail + "</td>" +
                    "</tr>" +
                    "<tr>" +
                      "<td class=\"list-field\">Setor: </td>" +
                      "<td class=\"list-value\">" + user.ref_sector + "</td>" +
                    "</tr>" +
                  "</table>";
      }
  }
