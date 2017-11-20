module.exports = (rx, createSubscriber) => {
    
    const Observable = rx.Observable;
    //.from (as opposed to .of) requires an iterable like  eg. string or an array
    Observable.from('whatever')
    .subscribe(createSubscriber('$from1'))

    //here i pass an array (still a valid iterable)
    Observable.from(['first', 'second'])
    .subscribe(createSubscriber('$from2'))

    //again with an array
    Observable.from([0, 1, 2, 3, 4, 5])
    .map(el => el * 10)
    .subscribe(createSubscriber('$from3'))
}
