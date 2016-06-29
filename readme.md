# Vue Pusher

A pusher plugin for vue.js

## Why?

In my personal projects, I kinda needed the pusher instance across all components without having to re-initialize since it's a bit of a maintenance issue.

## Usage

Install the plugin like any other plugin. :)

~~~js
var Vue = require('vue');

Vue.use(require('vue-pusher'), {
    api_key: 'xxxxxx',
    cluster: 'ap1',
});
~~~

Inside your components, you just need to access the `$pusher` object.

~~~js
<script>
export default {
    ready () {
        var channel = this.$pusher.subscribe('dashboard');

        channel.bind('user.log', ({ log }) => {
            console.log(`User ${log.user.name} has ${log.action} at ${log.time}`);
        });
    }
}
</script>
~~~

