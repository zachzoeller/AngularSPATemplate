(function () {
    'use strict';
    var serviceId = 'logger';
    angular.module('app').factory(serviceId, [
        '$log', function ($log) {

            var service = {
                log: log,
                logError: logError,
                logWarning: logWarning
            };

            return service;

            function log(message, data, source, showToast) {
                logIt('log', message, data, source, showToast);
            }

            function logError(message, data, source, showToast) {
                logIt('error', message, data, source, showToast);
            }

            function logWarning(message, data, source, showToast) {
                logIt('warning', message, data, source, showToast);
            }

            function logIt(logType, message, data, source, showToast) {
                if (showToast == undefined) {
                    showToast = false;
                }
                source = source ? '[' + source + '] ' : '';
                switch (logType) {
                    case 'error':
                        $log.error(source, message, data);
                        if (showToast) toastr.error(message);
                        break;
                    case 'warning':
                        $log.warn(source, message, data);
                        if (showToast) toastr.warning(message);
                        break;
                    default:
                        $log.log(source, message, data);
                        if (showToast) toastr.info(message);
                        break;
                }
            }

        }
    ]);
})();