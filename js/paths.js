/* global define*/
define(function() {

    'use strict';

    var config = {
        paths: {
            FAOSTAT_UI_BROWSE_RANKINGS: 'faostat-ui-browse-rankings',
            faostat_ui_browse_rankings: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});