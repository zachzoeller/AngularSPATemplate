(function () {
    'use strict';
    angular.module('app').value('config', {
        appErrorPrefix: '[AppName Error] ',
        defaultFuelIncrement: 25,
        docTitle: 'AppName: ',
        invitationDaysToLive: 5,
        maxPagerSize: 5,
        pageSize: 10,
        pageSizes: [10, 25, 50],
        remoteServiceName: 'breeze/Breeze',
        searchDelay: 1000,
        version: '1.0.0'
    });
})();