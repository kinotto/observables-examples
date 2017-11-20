module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    let interval$ = Observable.interval(200).take(2);


    //pairwise emit pairs of values from the pipeline
    interval$.pairwise()
    .subscribe(createSubscriber('pairwise'));
}
