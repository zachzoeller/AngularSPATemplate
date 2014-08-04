using System.Web;
using System.Web.Optimization;

namespace MvcApplication1
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
               "~/Scripts/angular.js",
               "~/Scripts/angular-animate.js",
               "~/Scripts/angular-route.js",
               "~/Scripts/angular-sanitize.js",
                "~/Scripts/bootstrap.js",
                 "~/Scripts/jquery-{version}.js",
                 "~/Scripts/ui-bootstrap.js",
                 "~/Scripts/ui-bootstrap-tpls.js",
                 "~/Scripts/promise-tracker.js",
                 "~/Scripts/toastr.js",
                 "~/Scripts/spin.js"
               ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/app/app.js",
                "~/app/config.app.js",
                "~/app/layout/shell.js",
                "~/app/views/home.js",
                "~/app/config.route.js",
                "~/app/services/data.js",
                "~/app/services/logger.js",
                "~/app/partials/shoe/shoeList.js",
                "~/app/partials/shoe/shoeAdd.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/site.css",
                "~/Content/bootstrap.css",
                "~/Content/toastr.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/bootstrap.css"
                       ));
        }
    }
}