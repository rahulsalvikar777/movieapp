/**
 * Created by mrrsoft on 29/07/15.
 */
angular.module('url.config', [])
    //.controller('URL_CONFIG',{
    //    mainURL: 'http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',
    //    params: {id: '@_id'}
    //})
    .constant('URL_CONFIG', {
        mainURL: 'http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',
        params: {id: '@_id'}
    })

    //.constant('URL_CONFIG', function(){
    //    return{
    //        getURL: getURL,
    //        getParams: getParams
    //    }
    //
    //    function getURL (){
    //        return 'http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id'
    //    }
    //
    //    function getParams (){
    //        return {id: '@_id'}
    //    }
    //})