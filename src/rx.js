import * as Rx from "rxjs/Rx";

Rx.Observable.of(1,2,3,4,5).map(x => x * 2).subscribe(console.log);
