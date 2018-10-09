# Vue Pusher

A pusher plugin for vue.js

## Usage

Install the plugin like any other plugin. :)

~~~js
var Vue = require('vue');

Vue.use(require('vue-pusher'), {
    api_key: 'xxxxxx',
    options: {
        cluster: 'ap1',
        encrypted: true,
    }
});
~~~

### Manually using the pusher instance.

Inside your components, you just need to access the `$pusher` object.

~~~js
export default {
    ready () {
        var channel = this.$pusher.subscribe('dashboard');

        channel.bind('user.log', ({ log }) => {
            console.log(`User ${log.user.name} has ${log.action} at ${log.time}`);
        });
    }
}
~~~


### Subscribing to a channel.

Subscribing to a channel providers a callback where you can bind events.

~~~js
this.$pusher.subscribe('dashboard', channel => {
    channel.bind('user.log', ({ log }) => {
        console.log(`User ${log.user.name} has ${log.action} at ${log.time}`);
    });
});
~~~

### Unsubscribing to a channel.

~~~js
this.$pusher.unsubscribe('dashboard');
~~~
