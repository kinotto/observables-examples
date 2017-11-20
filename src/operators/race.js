module.exports = (rx, createSubscriber) => {
    const Observable = rx.Observable;
    const observables = [
        //takes one sec
        Observable.timer(1000).mapTo('i won\'t win'),

        //takes two secs
        Observable.empty().switchMap(() => Observable.throw('an error occured')).delay(2000),

        //takes only half a sec
        Observable.interval(500).take(1).mapTo('I won the race!')
    ]
    
    //get the value of the winner of the race (who takes less time to emit)
    Observable.race(...observables)
    .subscribe(createSubscriber('race'));
}
