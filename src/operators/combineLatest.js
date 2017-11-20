module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    let first$ = Observable.interval(200).take(5);
    let second$ = Observable.interval(500).take(5)

    //take latest emitted values from each observable
    Observable.combineLatest(first$, second$)
    .subscribe(createSubscriber('combineLatest'));
}
