import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

Observable.of(1,2,3,4,5).map(x => x * 2).subscribe(console.log);
