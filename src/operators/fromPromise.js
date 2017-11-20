module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    let myPromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve('promise done')}, 200);
        })
    }

    //a simple operator to transform a promise into an observable and be able to subscribe to it
    let myPromise$ = Observable.fromPromise(myPromise());
    myPromise$.subscribe(createSubscriber('fromPromise'));

    /**
     * fromPromise returns a hot observable, the code inside the promise will be run immediatly
     * without the need to be subscribed, to prevent this behaviour you can wrap the subscription
     * inside a switchMap
     * 
     *  Observable.switchMap(fromPromise(myPromise));
     * 
     * and turn it to a cold observable
     */
}
