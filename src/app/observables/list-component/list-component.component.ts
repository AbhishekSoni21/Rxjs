import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  rxjsData = [
    {
      name: 'fromEvent',
      description:
        'Creates an Observable that emits events of a specific type coming from the given event target.',
      title: 'fromEvent',
      shortDescription: true,
    },
    {
      name: 'interval',
      description:
        'Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.',
      title: 'interval',
      shortDescription: true,
    },
    {
      name: 'timer',
      description:
        'Creates an observable that will wait for a specified time period, or exact date, before emitting the number 0.',
      title: 'timer',
      shortDescription: true,
    },
    {
      name: 'of',
      description: 'Converts the arguments to an observable sequence.',
      title: 'of',
      shortDescription: true,
    },
    {
      name: 'from',
      description:
        'Creates an Observable from an Array, an array-like object, a Promise,an iterable object, or an Observable-like object.',
      title: 'from',
      shortDescription: true,
    },
    {
      name: 'toArray',
      description:
        'Collects all source emissions and emits them as an array when the source completes.',
      title: 'toArray',
      shortDescription: true,
    },
    {
      name: 'customObservable',
      description:
        'Creates a new Observable, that will execute the specified function when an Observer subscribes to it.',
      title: 'customObservable',
      shortDescription: true,
    },
    {
      name: 'map',
      description:
        'Transform the items emitted by an Observable by applying a function to each item.',
      title: 'map',
      shortDescription: true,
    },
    {
      name: 'pluck',
      description: 'Maps each source value to its specified nested property.',
      title: 'pluck',
      shortDescription: true,
    },
    {
      name: 'filter',
      description:
        'Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.',
      title: 'filter',
      shortDescription: true,
    },
    {
      name: 'tap',
      description:
        'Used to perform side-effects for notifications from the source observable.',
      title: 'tap',
      shortDescription: true,
    },
    {
      name: 'take',
      description:
        'Emits only the first n values emitted by the source Observable.',
      title: 'take',
      shortDescription: true,
    },
    {
      name: 'takeLast',
      description: 'Emit the last n emitted values before completion.',
      title: 'takeLast',
      shortDescription: true,
    },
    {
      name: 'takeUntil',
      description: 'Emit values until provided observable emits.',
      title: 'takeUntil',
      shortDescription: true,
    },
    {
      name: 'retry',
      description:
        'Retry an observable sequence a specific number of times should an error occur.',
      title: 'retry',
      shortDescription: true,
    },
    {
      name: 'retryWhen',
      description:
        'Retry an observable sequence on error based on custom criteria.',
      title: 'retryWhen with scan & delay',
      shortDescription: true,
    },
    {
      name: 'debounceTime',
      description:
        'Discard emitted values that take less than the specified time between output.',
      title: 'debounce & debounceTime',
      shortDescription: true,
    },
    {
      name: 'distinctUntilChanged',
      description:
        'Only emit when the current value is different than the last.',
      title: 'distinctUntilChanged',
      shortDescription: true,
    },
    {
      name: 'behaviourSubject',
      description:
        'Requires an initial value and emits the current value to new subscribers.',
      title: 'behaviourSubject',
      shortDescription: true,
    },
    {
      name: 'replaySubject',
      description:
        'A variant of Subject that "replays" old values to new subscribers by emitting them when they first subscribe.',
      title: 'replaySubject',
      shortDescription: true,
    },
    {
      name: 'asyncSubject',
      description: 'Emits its last value on completion.',
      title: 'asyncSubject',
      shortDescription: true,
    },
    {
      name: 'concat',
      description: 'Subscribe to observables in order as previous completes.',
      title: 'concat',
      shortDescription: true,
    },
    {
      name: 'concatMap',
      description:
        'Map values to inner observable, subscribe and emit in order.',
      title: 'concatMap',
      shortDescription: true,
    },
    {
      name: 'merge',
      description: 'Turn multiple observables into a single observable.',
      title: 'merge',
      shortDescription: true,
    },
    {
      name: 'mergeMap',
      description: 'Map to observable, emit values.',
      title: 'mergeMap/flatMap',
      shortDescription: true,
    },
    {
      name: 'switchMap',
      description:
        'Map to observable, complete previous inner observable, emit values.',
      title: 'switchMap',
      shortDescription: true,
    },
    {
      name: 'compare',
      description: 'Comparing mergeMap,concatMap and switchMap.',
      title: 'Comparision of flattening operator',
      shortDescription: true,
    },
    {
      name: 'exhaustMap',
      description:
        'Map to inner observable, ignore other values until that observable completes.',
      title: 'exhaustMap',
      shortDescription: true,
    },
    {
      name: 'shareReplay',
      description:
        'Share source and replay specified number of emissions on subscription.',
      title: 'shareReplay',
      shortDescription: true,
    },
    {
      name: 'combineLatest',
      description:
        'When any observable emits a value, emit the last emitted value from each.',
      title: 'combineLatest',
      shortDescription: true,
    },
    {
      name: 'withLatestFrom',
      description:
        'Provide the last value from another observable(Master Observable).',
      title: 'withLatestFrom',
      shortDescription: true,
    },
    {
      name: 'zip',
      description: 'After all observables emit, emit values as an array.',
      title: 'zip',
      shortDescription: true,
    },
    {
      name: 'forkJoin',
      description:
        'When all observables complete, emit the last emitted value from each.',
      title: 'forkJoin',
      shortDescription: true,
    },
    {
      name: 'catchErrorThrowError',
      description:
        'Catches errors on the observable to be handled by returning a new observable or throwing an error.',
      title: 'CatchError & ThrowError',
      shortDescription: true,
    },
  ];
}
