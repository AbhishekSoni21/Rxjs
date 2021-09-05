import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RetryComponent } from './observables/retry/retry.component';
import { RetryWhenComponent } from './observables/retry-when/retry-when.component';
import { ScanComponent } from './observables/scan/scan.component';
import { DebounceTImeComponent } from './observables/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './observables/distinct-until-changed/distinct-until-changed.component';
import { BehaviourSubjectComponent } from './observables/behaviour-subject/behaviour-subject.component';
import { Component1Component } from './observables/component1/component1.component';
import { Component2Component } from './observables/component2/component2.component';
import { Component3Component } from './observables/component3/component3.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservablesComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    OfComponent,
    FromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    TakeLastComponent,
    TakeUntilComponent,
    RetryComponent,
    RetryWhenComponent,
    ScanComponent,
    DebounceTImeComponent,
    DistinctUntilChangedComponent,
    BehaviourSubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    CompareMergeSwitchConcatmapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
