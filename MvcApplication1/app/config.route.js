(function () {
    'use strict';
    angular.module('app').config([
        '$routeProvider', function ($routeProvider) {

            //#region default route
            $routeProvider.when('/', {
                templateUrl: 'app/views/home.html',
                title: '_home'
            });
            //#endregion default route

            //#region account routes
            $routeProvider.when('/shop/shoes', {
                templateUrl: 'app/views/shop/shoes.html',
                title: '_shop_shoes'
            });
            //$routeProvider.when('/account/logout', {
            //    templateUrl: 'app/views/account/logout.html',
            //    title: '_account_login'
            //});
            //$routeProvider.when('/account/register/:invitationToken?', {
            //    templateUrl: 'app/views/account/register.html',
            //    title: '_account_register'
            //});
            //$routeProvider.when('/account/registerExternal', {
            //    templateUrl: 'app/views/account/registerExternal.html',
            //    title: '_account_registerExternal'
            //});
            //#endregion account routes

            //#region account routes
            //$routeProvider.when('/account/login', {
            //    templateUrl: 'app/views/account/login.html',
            //    title: '_account_login'
            //});
            //$routeProvider.when('/account/logout', {
            //    templateUrl: 'app/views/account/logout.html',
            //    title: '_account_login'
            //});
            //$routeProvider.when('/account/register/:invitationToken?', {
            //    templateUrl: 'app/views/account/register.html',
            //    title: '_account_register'
            //});
            //$routeProvider.when('/account/registerExternal', {
            //    templateUrl: 'app/views/account/registerExternal.html',
            //    title: '_account_registerExternal'
            //});
            //#endregion account routes

            //#region admin routes
            //$routeProvider.when('/admin/counties', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/counties.html',
            //    title: '_admin_counties'
            //});
            //$routeProvider.when('/admin/fuelTypes', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/fuelTypes.html',
            //    title: '_admin_fuelTypes'
            //});
            //$routeProvider.when('/admin/offeringCounties', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/offeringCounties.html',
            //    title: '_admin_offeringCounties'
            //});
            //$routeProvider.when('/admin/offeringFuelTypes', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/offeringFuelTypes.html',
            //    title: '_admin_offeringFuelTypes'
            //});
            //$routeProvider.when('/admin/offerings', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/offerings.html',
            //    title: '_admin_offerings'
            //});
            //$routeProvider.when('/admin/orders', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/orders.html',
            //    title: '_admin_orders'
            //});
            //$routeProvider.when('/admin/equipment', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/equipment.html',
            //    title: '_admin_equipment'
            //});
            //$routeProvider.when('/admin/states', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/states.html',
            //    title: '_admin_states'
            //});
            //$routeProvider.when('/admin/users', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/users.html',
            //    title: '_admin_users'
            //});
            //$routeProvider.when('/admin/vendors', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/vendors.html',
            //    title: '_admin_vendors'
            //});
            //$routeProvider.when('/admin/vendorAvailability', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/vendorAvailability.html',
            //    title: '_admin_vendorAvailability'
            //});
            //$routeProvider.when('/admin/vendorContacts', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/vendorContacts.html',
            //    title: '_admin_vendorContacts'
            //});
            //$routeProvider.when('/admin/reporting', {
            //    roles: 'SiteAdmin',
            //    templateUrl: 'app/views/admin/reporting.html',
            //    title: '_admin_reporting'
            //});
            //#endregion admin routes

            //#region manage routes
            //$routeProvider.when('/manage/companies', {
            //    roles: 'SiteAdmin, CompanyAdmin',
            //    templateUrl: 'app/views/manage/companies.html',
            //    title: '_managen_companies'
            //});            
            //#endregion manage routes

          

            //#region unauthorized route
            //$routeProvider.when('/unauthorized', {
            //    templateUrl: 'app/views/unauthorized.html',
            //    title: '_unauthorized'
            //});
            //#endregion unauthorized route

            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);
})();