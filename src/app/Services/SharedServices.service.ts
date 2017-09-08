import { Injectable } from '@angular/core'
import { ProjectComponent } from '../Components/LeftBar/project.component'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { CenterIdentifier } from '../../enums/center.identifier'
import {CenterComm} from '../CommonClasses/centerComm'
@Injectable()
export class serviceForRoute {

private centerUpdate = new Subject<CenterComm>();

sendMessage(obj:CenterComm){
    this.centerUpdate.next(obj);
}

clearMessage() {
        this.centerUpdate.next();
    }

    getMessage(): Observable<CenterComm> {
        return this.centerUpdate.asObservable();
    }
}
