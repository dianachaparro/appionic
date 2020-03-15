import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import { AuthService }       from "../../servicios/auth.service";
import { Router }            from "@angular/router";

@Component({
	selector    : 'app-login',
  	templateUrl : './login.page.html',
  	styleUrls   : ['./login.page.scss'],
})

export class LoginPage implements OnInit {
	email    : string;
	password : string;

	constructor(private authService : AuthService, public router : Router, public alertController: AlertController) { }

	ngOnInit() {
	}
	  
	loginUsuario() {
		console.log(this.email);
		console.log(this.password);
		this.authService.loginUsuario(this.email, this.password).then(res => {
			this.router.navigate(['/home']);
		}).catch(err => this.presentAlert());
	}

	// Mensaje de alerta
	async presentAlert() {
		const alert = await this.alertController.create({
			header    : 'Error al iniciar sesión',
		  	message   : 'Los datos ingresados son incorrectos',
		  	buttons   : ['OK']
		});
	
		await alert.present();
	  }
}