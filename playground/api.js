
this.pusher.subscribe('dashboard', channel =>  {
    channel.bind('user.log-in', (user) => {
        this.users.push(user);
    });
});

this.pusher.unsubscribe('dashboard');

this.pusher.channels();
