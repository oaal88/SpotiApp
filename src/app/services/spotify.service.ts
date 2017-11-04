import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "BQBLQOVrrm_Gb_j4LYSE4wIZbQcy6-Za-CzEBMbR9_TEAMo5gxD7Xxgzw1K136DiL9f6jKfJfN_hF8n2F7wwFw";
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtistas( termino:string ) {
    let headers:Headers = new Headers();
    headers.append("authorization", "Bearer " + this.token);

    let query:string = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers }).map(res => {
      console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
      return this.artistas;
    });
  }

  getArtista( id:string ) {
    let headers:Headers = new Headers();
    headers.append("authorization", "Bearer " + this.token);

    let query:string = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getTop( id:string ) {
    let headers:Headers = new Headers();
    headers.append("authorization", "Bearer " + this.token);

    let query:string = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers }).map(res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    });
  }
}
