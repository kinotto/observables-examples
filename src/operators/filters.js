module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    let interval$ = Observable.interval(200);


    interval$
    .take(10) //filter the first 10 elements in the pipeline
    .debounceTime(50) //ignore if get hits multiple times within a 500ms window
    .filter(el => el % 2 === 0) //filter only even numbers
    .skip(2) //skip value 2
    .first() //get first
    //.last()
    .subscribe(createSubscriber('filter'));
}
