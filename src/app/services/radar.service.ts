import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KnowledgeArea } from 'src/shared/models/knowledgeArea';
import { Radar } from 'src/shared/models/radar';

@Injectable({
  providedIn: 'root'
})
export class RadarService {

  constructor(private http:HttpClient) { }

  private url: string = 'http://localhost:8080/';
 
  saveRadar(radar:Radar):Observable<any>{
    let direction = this.url + '/create/radar';
    return this.http.post<Radar>(direction,radar);
  }

  listRadars():Observable<any>{
    let direction = this.url +'/list/radars';
    return this.http.get<Radar[]>(direction);
  }

  addKnowledgeAreaRadar(radarId:string,
    knowledgeArea:KnowledgeArea):Observable<any>{
    let direction = this.url +'/add/knowledgeArea/'+ radarId;
    return this.http.put<Radar>(direction,knowledgeArea);

  }

}
