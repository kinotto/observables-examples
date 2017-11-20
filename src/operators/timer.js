module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    
    //implements window.setTimeout
    Observable.timer(300)
    .map(el => 'some value')
    .subscribe(createSubscriber('$timer'));
}
