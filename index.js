module.exports = {
    install: function (Vue, options) {
        var api_key = options.api_key;
        var cluster = options.cluster;

        Vue.prototype.$pusher = new Pusher(api_key, {
            cluster:   cluster,
            encrypted: true
        });
    }
};
