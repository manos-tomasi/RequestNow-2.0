import { AbstractList } from '../list/abstract.list';
import { Sector } from './sector';

export class SectorList
  extends
      AbstractList<Sector>
  {
      onRenderer( sector : Sector )
      {
          return "<table class=\"list-table\">" +
                    "<tr>" +
                      "<td class=\"list-icon\" rowspan=\"3\">"+
                        "<i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i>" +
                      "</td>" +
                      "<td colspan=\"3\" class=\"list-title\">" +
                        sector.name.toUpperCase() +
                      "</td>" +
                    "</tr>" +
                  "</table>";
      }
  }
