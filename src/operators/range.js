module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;

    // put in our pipeline values ranging from 0 to 4
    Observable.range(0, 5)
    .subscribe(createSubscriber('$range'))
}
