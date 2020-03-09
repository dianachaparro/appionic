import { Component, OnInit } from '@angular/core';
import { ModalController }   from '@ionic/angular';

@Component({
	selector    : 'app-exp',
	templateUrl : './exp.page.html',
	styleUrls   : ['./exp.page.scss'],
})

export class ExpPage implements OnInit {

	constructor(private modalController  : ModalController) { }

	ngOnInit() {
  	}
}
