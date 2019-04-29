
import { Observable, Subject } from 'rxjs';
export class ActivatedRoterStub{
private subject = new Subject();

push(value){
    this.subject.next(value);
}

get params(){
    return this.subject.asObservable();
}
    // params:Observable<any> = new Observable;
}