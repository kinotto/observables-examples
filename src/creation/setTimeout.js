module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    //custom setTimeout with built-int timer operator
    const setTimeout = (cb, tick = 500) => {
        return Observable.timer(tick)
        .map(() => cb())
        .subscribe(createSubscriber('$setTimeout'))
    }
    let timeout = setTimeout(() => '$settimeout received', 500)

    //unsubscription
    /*setTimeout(() => {
        timeout.unsubscribe();
    }, 300);*/
    
}
