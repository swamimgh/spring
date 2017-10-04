
function getRootUrl() {
  var defaultPorts = {"http:":80,"https:":443};

  return window.location.protocol + "//" + window.location.hostname
   + (((window.location.port)
    && (window.location.port != defaultPorts[window.location.protocol]))
    ? (":"+window.location.port) : "");
}

/*
function getRootUrl(url) {
  return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
}
*/

var portalContext = getRootUrl() + '/lcpr';

require.config({
    //baseUrl: '../',
	// waitSeconds of 10 minutes
	waitSeconds: 10 * 60, 
    paths: {
        iids: portalContext+'/js/iids',
        brandkit: portalContext+'/components/brandkit/js/brandkit',
        'cascading-list': portalContext+'/components/cascading-list/js/cascading-list',
        charts: portalContext+'/components/charts/js/charts',
        'collapsible-list': portalContext+'/components/collapsible-list/js/collapsible-list',
        "col-reorder-amd": portalContext+"/components/datatables-col-reorder/index",
        "datatables-scroller": portalContext+"/components/datatables-scroller/index",
        contextmenu: portalContext+'/components/contextmenu/js/contextmenu',
        'd3-amd': portalContext+'/components/d3-amd/d3',
        datagrids: portalContext+'/components/datagrids/js/datagrids',
        datatables: portalContext+"/components/datatables/dist/media/js/jquery.dataTables",
        datepicker: portalContext+'/components/datepicker/js/datepicker',
        'declarative-visualizations': portalContext+'/components/declarative-visualizations/js/declarative-visualizations',
        'ge-bootstrap': portalContext+'/components/ge-bootstrap/js/ge-bootstrap',
        'iids-navbar': portalContext+'/components/iids-navbar/js/iids-navbar',
        jquery: portalContext+'/components/jquery/jquery.min',
        'jquery-csv': portalContext+'/components/jquery-csv/src/jquery.csv',
        'jqueryui-sortable-amd': portalContext+'/components/jqueryui-sortable-amd/js/jquery-ui-1.10.2.custom',
        'jQuery-contextMenu': portalContext+'/components/jQuery-contextMenu/src/jquery.contextMenu',
        modernizr: portalContext+'/components/modernizr/modernizr',
        jumpnav: portalContext+'/components/jumpnav/js/jumpnav',
        modules: portalContext+'/components/modules/js/modules',
        prettify: portalContext+'/components/prettify/prettify',
        respond: portalContext+'/components/respond/respond.src',
        'responsive-emitter': portalContext+'/components/responsive-emitter/js/responsive-emitter',
        'responsive-tables': portalContext+'/components/responsive-tables/js/responsive-tables',
        spinner: portalContext+'/components/spinner/js/spinner',
        trays: portalContext+'/components/trays/js/trays',
        spin: portalContext+'/components/spin.js/dist/spin',
        highcharts: portalContext+'/components/highcharts-amd/js/highcharts.src',
        highstock: portalContext+'/components/highcharts-amd/js/highstock.src',
        'highcharts-more': portalContext+'/components/highcharts-amd/js/highcharts-more.src',
        'bootstrap-datepicker': portalContext+'/components/bootstrap-datepicker/js/bootstrap-datepicker',
        'jquery-ui-touch-punch': portalContext+'/components/jquery-ui-touch-punch/jquery.ui.touch-punch',
        'multi-step-navigation': portalContext+'/components/multi-step-navigation/js/multi-step-navigation',
        'twitter-bootstrap-wizard': portalContext+'/components/twitter-bootstrap-wizard/jquery.bootstrap.wizard',
        requirejs: portalContext+'/components/requirejs/require',
        videoplayer: portalContext+'/components/videoplayer/js/videoplayer',
        videojs: portalContext+'/components/videoplayer/js/video',
        'map-core-component': portalContext+'/components/map-core/js',
        'map-core': portalContext+'/components/map-core/js/map-core', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-core-component/map-core'
        'map-loader': portalContext+'/components/map-core/js/map-loader', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-core-component/map-loader'
        'map-cluster-component': portalContext+'/components/map-cluster/js',
        'map-cluster': portalContext+'/components/map-cluster/js/map-cluster', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-cluster-component/map-cluster'
        'map-street-view': portalContext+'/components/map-core/js/map-streetview', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-core-component/map-streetview'
        'map-layer-list': portalContext+'/components/map-layerlist/js/map-layer-list',
        'map-geolocate': portalContext+'/components/map-geolocate/js/map-geolocate',
        'map-google-component': portalContext+'/components/map-google/js',
        'map-google': portalContext+'/components/map-google/js/googlemaps', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-google-component/googlemaps'
        'map-markers-component': portalContext+'/components/map-markers/js',
        'map-markers': portalContext+'/components/map-markers/js/map-markers', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-markers-component/map-markers'
        'map-popovers': portalContext+'/components/map-popovers/js/map-popovers',
        'map-search-component': portalContext+'/components/map-search/js',
        'map-search': portalContext+'/components/map-search/js/asset-address-search', //backwards compatibility only, can be removed in a non-backwards compatible release w/ client paths change to 'map-search-component/asset-address-search'
        'map-zoom': portalContext+'/components/map-zoom/js/map-zoom',
        'hogan': portalContext+'/components/hogan/index',
        'underscore': portalContext+'/components/underscore-amd/index',
        OpenLayers: portalContext+'/components/open-layers/dist/OpenLayers',
        'map-layerlist': portalContext+'/components/map-layerlist/js/map-layer-list',
        navbar: portalContext+'/components/navbar/js/iids-navbar',
        'highcharts.src': portalContext+'/components/highcharts-amd/js/highcharts.src',
        'highstock.src': portalContext+'/components/highcharts-amd/js/highstock.src',
        'highcharts-more.src': portalContext+'/components/highcharts-amd/js/highcharts-more.src',
        'bootstrap-switch': portalContext+'/components/bootstrap-switch/static/js/bootstrap-switch',
        'oo-utils': portalContext+'/components/oo-utils/src/js/oo-utils',
        'toggle-switch': portalContext+'/components/toggle-switch/src/js/toggle-switch',
        'moment': portalContext+'/components/momentjs/min/moment.min',
        'bootstrap-timepicker': portalContext+'/components/bootstrap-timepicker/index',
        'timepicker': portalContext+'/components/timepicker/src/js/timepicker',
        'slider': portalContext+'/components/slider/js/slider',
        'bootstrap': portalContext+'/components/bootstrap/js',
        'chosen': portalContext+'/components/chosen/chosen.jquery.min',
        'fixedcolunm': portalContext+'/components/datatables/FixedColumns',
		'ajaxfileupload': portalContext+'/components/ajaxupload/ajaxfileupload',

        
        /** custom libraries **/
        'jquery-ii8n': portalContext+'/js/jquery.i18n-min-1.0.9',
        'map': portalContext+'/js/map',
        'common':portalContext+'/js/common',
        
        /** Functional js files **/
        'jquery-print': 'lib/jquery-print',
		
		'jquery-base': 'lib/jquery.base64',
		
		'taginput' : 'lib/taginput/bootstrap-tagsinput',
		
       
        'helloworld':'helloworld',
        
        
    },

    priority: [
               'jquery',
                'bootstrap'
           ],
    shim: {
        OpenLayers: {
            exports: 'OpenLayers'
        },
        'jquery-csv': [
            'jquery'
        ],
        'jquery-ii8n':['jquery'],
        'chosen':['jquery'],
        'bootstrap':['jquery'],
        'bootstrap-switch': ['jquery'],
        'bootstrap-timepicker': ['jquery'],
        "col-reorder-amd": {
            deps: ['jquery', 'datatables']
        },
        'datagrids/datagrids-col-vis': {
            deps: ['jquery', 'datatables']
        },
        'ajaxfileupload':{
            deps: ['jquery']
        }
    }

});
