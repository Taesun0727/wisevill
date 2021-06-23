import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

declare var codeEnc:any;

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor( private router: Router, public loginservice: LoginService) {}

    login() {
        let id = <HTMLInputElement>document.getElementById("inputEmailAddress");
        let id_value = codeEnc.IdSecuEncode(id.value);
        let password = <HTMLInputElement>document.getElementById("inputPassword");
        let password_value = codeEnc.IdSecuEncode(password.value);
        let result = this.loginservice.getlogin(id.value,password.value);
        console.log(result)


        /*$ajx.get('http://gprime.wisevill.com/api/adm/login/',{?uid=EAE4gJ%2F1dYU%3D&user_pwd=TNvHRA3JM3Q%3D},function(rw){
            console.log(rw);
            ({"result":"r2Xgpa\/gc7c=","auth_code":"","uid":"","uname":"","level":null,"position":null,"m_pimg":""})
        })*/
        /*if (id_value == "sun" && password_value == "1234"){
            alert(codeEnc.IdSecuEncode(id_value));
            this.router.navigate(['/dashboard'])
        } else {
            alert("아이디 및 비밀번호를 확인하세요");
        }*/

    }
    ngOnInit() {}
}