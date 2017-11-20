module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    let arr = [
        Observable.interval(200).take(4),
        Observable.interval(300).take(2)
    ]
    
    //emits the last value from each observable
    Observable.forkJoin(arr)
    .subscribe(createSubscriber('forkJoin'))
}
