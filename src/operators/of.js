module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    
    //create a stream with one plain object
    Observable.of({key: 'a value'})
    .subscribe(createSubscriber('$of'));
}
