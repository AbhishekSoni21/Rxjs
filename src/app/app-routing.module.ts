import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list-component/list-component.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { TimerComponent } from './observables/timer/timer.component';
import { OfComponent } from './observables/of/of.component';
import { FromComponent } from './observables/from/from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';
import { MapComponent } from './observables/map/map.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { TakeComponent } from './observables/take/take.component';
import { TakeLastComponent } from './observables/take-last/take-last.component';
import { TakeUntilComponent } from './observables/take-until/take-until.component';
import { RetryWhenComponent } from './observables/retry-when/retry-when.component';
import { RetryComponent } from './observables/retry/retry.component';
import { DebounceTImeComponent } from './observables/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './observables/distinct-until-changed/distinct-until-changed.component';
import { BehaviourSubjectComponent } from './observables/behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { MergeComponent } from './observables/merge/merge.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { CompareMergeSwitchConcatmapComponent } from './observables/compare-merge-switch-concatmap/compare-merge-switch-concatmap.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observables/share-replay/share-replay.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './observables/with-latest-from/with-latest-from.component';
import { ZipComponent } from './observables/zip/zip.component';
import { ForkJoinComponent } from './observables/fork-join/fork-join.component';
import { CatchThrowErrorComponent } from './observables/catch-throw-error/catch-throw-error.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'of', component: OfComponent },
      { path: 'from', component: FromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'customObservable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'takeLast', component: TakeLastComponent },
      { path: 'takeUntil', component: TakeUntilComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'retryWhen', component: RetryWhenComponent },
      { path: 'debounceTime', component: DebounceTImeComponent },
      { path: 'distinctUntilChanged', component: DistinctUntilChangedComponent},
      { path:'behaviourSubject',component:BehaviourSubjectComponent},
      { path:'replaySubject',component:ReplaySubjectComponent},
      { path:'asyncSubject',component:AsyncSubjectComponent},
      { path:'concat',component:ConcatComponent},
      { path:'merge',component:MergeComponent},
      { path:'mergeMap',component:MergeMapComponent},
      { path:'concatMap',component:ConcatMapComponent},
      {path:'switchMap',component:SwitchMapComponent},
      {path:'compare',component:CompareMergeSwitchConcatmapComponent},
      {path:'exhaustMap',component:ExhaustMapComponent},
      {path:'shareReplay',component:ShareReplayComponent},
      {path:'combineLatest',component:CombineLatestComponent},
      {path:'withLatestFrom',component:WithLatestFromComponent},
      {path:'zip',component:ZipComponent},
      {path:'forkJoin',component:ForkJoinComponent},
      {path:'catchErrorThrowError',component:CatchThrowErrorComponent}
    ],
  },

  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
