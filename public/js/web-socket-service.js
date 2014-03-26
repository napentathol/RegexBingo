/**
 * Created by Alex on 3/26/2014.
 */

regexApp.addWebSocketService = function(){
    var service = {
        processMessage : function(msg){

        }
    };

    service.connect = function(){
        if(service.ws){ return; }

        service.ws = new WebSocket('ws://www.sodiumlabs.us:19903/','regex-protocol');

        service.ws.onopen = function(){
            // when the thing opens
        };

        service.ws.onclose = function(){
            // when the thing closes
        };

        service.ws.onerror = function() {
            // when an error happens
        };

        service.ws.onmessage = function(msg){
            // when a message is received
            service.processMessage(JSON.parse(msg));
        };
    };
};

regexApp.$ng.factory('WebSocketService', regexApp.addWebSocketService);