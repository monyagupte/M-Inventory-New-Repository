using System.Web;
using System.Web.Mvc;

namespace M_Inventory_Web_API_NEW_
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
