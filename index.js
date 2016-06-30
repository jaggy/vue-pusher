/**
 * VuePusher class
 * @param {String} api_key
 * @param {Object} options
 */
function VuePusher (api_key, options) {
    this.pusher   = new Pusher(api_key, options);
    this.channels = {};
}

/**
 * Subscribe to the given channel and give a fallback to bind events to the channel.
 *
 * @param  {String}   channel
 * @param  {Function} callback
 */
VuePusher.prototype.subscribe = function (channel, callback) {
    if (this.channels.hasOwnProperty(channel)) {
        console.error('exists');
        return;
    }

    this.channels[channel] = this.pusher.subscribe(channel);

    callback(this.channels[channel]);
};

/**
 * Unsubscribe from the given channel.
 *
 * @param  {String} channel
 */
VuePusher.prototype.unsubscribe = function (channel) {
    this.channels[channel].unsubscribe(channel);
};

module.exports = {
    install: function (Vue, options) {
        var pusher = new VuePusher(options.api_key, options.options);

        Vue.prototype.pusher  = pusher;
        Vue.prototype.$pusher = pusher.pusher; // Just in case they want to manage it themselves.
    }
};
