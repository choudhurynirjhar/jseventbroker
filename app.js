/*!
* JavaScript event broker
* Author - Nirjhar Choudhury
* Tested - 05/05/2012
*/

var eventBroker = (function () {
    var eventRegistry = {};

    return {
        register: function (eventName, handler) {
            if (!eventRegistry[eventName]) {
                eventRegistry[eventName] = [];
            }
            eventRegistry[eventName].push(handler);
        },

        raise: function (eventName, eventArgs) {
            if (eventRegistry[eventName]) {
                for (var event in eventRegistry[eventName]) {
                    eventRegistry[eventName][event](eventArgs);
                }
            }
        },

        unregister: function (eventName, handler) {
            if (eventRegistry[eventName]) {
                if (handler) {
                    eventRegistry[eventName].pop(handler);
                }
                else {
                    delete eventRegistry[eventName];
                }
            }
        }
    };
})();

eventBroker.register("myevent", function (eventArgs){
    alert(eventArgs);
});
eventBroker.raise("myevent", "Hello World!");
eventBroker.unregister("myevent");
eventBroker.raise("myevent", "Hello Workd!");