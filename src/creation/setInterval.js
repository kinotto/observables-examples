module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    //setInterval implemented with observables
    const setInterval = (cb, tick = 300) => {
        return Observable.interval(tick)
        .map(() => cb())
        .subscribe();
    }

    let interval = setInterval(() => {
        console.log('$setInterval - next tick');
    }, 300)

    //clearInterval with unsubscribe
    setTimeout(() => {
        interval.unsubscribe();
    }, 200)


    
}