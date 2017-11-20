module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;

    //first$ pipeline is delayed of 500ms
    let first$ = Observable.interval(200).take(2).delay(500); 

    //second$ pipeline is delayed of 2000ms
    let second$ = Observable.interval(500).delay(1000);

    //wait until ALL the observable have emitted a value
    Observable.zip(first$, second$)
    .subscribe(createSubscriber('zip'));
}
