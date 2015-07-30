/**
 * Created by mrrsoft on 28/07/15.
 */
//angular.module('ClientAPI.services', [])
//    .factory('ClientAPI', function ($resource, URL_CONFIG) {
//        return  $resource( URL_CONFIG.mainURL, URL_CONFIG.params, {
//                update: {
//                    method: 'PUT'
//                }
//            })
//    })

//angular.module('ClientAPI.services', [])
//    .factory('ClientAPI', function ($resource, URL_CONFIG) {
//        return  $resource( URL_CONFIG.mainURL, URL_CONFIG.params, {
//                update: {
//                    method: 'PUT'
//                }
//            })
//    })


angular.module('ClientAPI.services', [])
    .factory('ClientAPI', function ($resource) {
        var _passUrl;
        var _passParameters;

        return{
            passUrl:_passUrl,
            passParameters: _passParameters,
            callAPIClient : function(){
                return  $resource( 'http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', {id: '@_id'}, {
                    save: {
                        method: 'POST'
                    },
                    update: {
                        method: 'PUT'
                    }
                })
            },
            setURL: function(url){
                this.passUrl = url
            },
            setParameters: function(params){
                this.passParameters = params;
            }
        }

    })
