import { of } from "rxjs/observable/of";
import { map } from "rxjs/operator/map";

map.call(of(1, 2, 3, 4, 5), (x => x * 2)).subscribe(console.log);
