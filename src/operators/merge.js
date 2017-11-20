module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    let first$ = Observable.interval(200).take(1).mapTo('yeah');
    let second$ = Observable.interval(400).take(1).mapTo('wow');

    //pass a list of element , rather then an array
    //use the spread operator if you have an array of observables
    //merges multiple observable
    Observable.merge(first$, second$)
    .subscribe(createSubscriber('merge'));
}
