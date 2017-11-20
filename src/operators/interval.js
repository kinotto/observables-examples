module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    
    //implements window.setInterval
    Observable.interval(300)
    .take(4)
    .map(el => (Math.random() * 100).toFixed(2))
    .subscribe(createSubscriber('$interval'));
}
