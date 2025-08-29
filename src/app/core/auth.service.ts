import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environtments/environtment';


type LoginResp = { data:{ user:{id:number;name:string;email:string}; token:string }, error:null };
type MeResp    = { data:{ id:number; name:string; email:string }, error:null };

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = environment.apiUrl;
  private _token = signal<string | null>(localStorage.getItem('token'));
  private _user  = signal<MeResp['data'] | null>(null);

  token = computed(() => this._token());
  user  = computed(() => this._user());

  constructor(private http: HttpClient) {}

  login(dto: {email:string; password:string}) {
    return this.http.post<LoginResp>(`${this.base}/auth/login`, dto);
  }

  register(dto: {name:string; email:string; password:string}) {
    return this.http.post<LoginResp>(`${this.base}/auth/register`, dto);
  }

  me() {
    return this.http.get<MeResp>(`${this.base}/me`);
  }

  logout() {
    return this.http.post(`${this.base}/auth/logout`, {});
  }

  setSession(token: string, user: MeResp['data']) {
    localStorage.setItem('token', token);
    this._token.set(token);
    this._user.set(user);
  }

  clearSession() {
    localStorage.removeItem('token');
    this._token.set(null);
    this._user.set(null);
  }
}
