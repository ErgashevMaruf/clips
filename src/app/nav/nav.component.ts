import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public modal: ModalService,
    public auth: AuthService,
    public authFr: AngularFireAuth,
    public router: Router) {
  }
  onChange($event: Event) {
    $event.preventDefault()
    this.modal.toggle('auth');
  }


}
