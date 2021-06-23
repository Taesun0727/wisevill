import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { loginmodel } from 'modules/auth/models/login'
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  getlogin(id?:any,password?:any){
    // URL에 특정값 넣기
    const params = new HttpParams()
      .set('uid', id)
      .set('user_pwd', password)
    const url = `http://gprime.wisevill.com/api/adm/login/`
    //const url = "https://httpbin.org/post"
    let data // 전송할 데이터 body부분
    let result // 받을 부분

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    
    
    // HTTP POST 방식
    this.http.post(url,result,{params,responseType:"text"}) // (주소,전송할데이터,옵션)
    .subscribe((res) => {
      let data = res;
      data = data.replace("(","").replace(")","")
      
      let jsondata = JSON.parse(data)
      console.log(jsondata)
    })
    

    /* key값 없어서 cors 에러뜸
    this.http.post(url,data,httpOptions)
    .pipe(
      tap((res: any) => {
        console.log(res)
      })
    ).subscribe()
    
    
    result = this.http.post(url,data,{responseType:'text'})
    .pipe(
      map((res: any) => {
        res = unwrapJsonp("callback"+res)
        return res
      })
    )
    result.subscribe({
      next(res: loginmodel) {console.log(res.result);},
      error() {console.log('errors already caught... will not run');}
    })
    */

    /*
    // HTTP JSONP 형태 GET방식
    this.http.jsonp(url,'callback')
    .subscribe((res) => {
      console.log(res);
    })
    */
    
    
    // HTTP GET 방식
    this.http.get(url,{params,responseType:'text'})
    .subscribe((res: any) => {
      console.log(res);
    })
    

  /* 로그인
   if (id == "sun" && password == "1234"){
     this.router.navigate(['/dashboard'])
   } else {
     alert("아이디 및 비밀번호를 확인하세요");
   }
   */

   
  }
}