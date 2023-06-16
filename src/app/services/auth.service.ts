import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import IUser from '../models/user.model';
import { delay, filter, map, Observable, pipe, switchMap, of } from 'rxjs'
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userFunction: AngularFirestoreCollection<IUser>
  public userAuthenticated$: Observable<boolean>
  public userAuthWithDelay$: Observable<boolean>
  public redirect = false;
  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore,
    public router: Router,
    private route: ActivatedRoute) {
    this.userFunction = db.collection<IUser>('user')
    auth.user.subscribe(console.log)
    this.userAuthenticated$ = auth.user.pipe(map(user => !!user));

    this.userAuthWithDelay$ = this.userAuthenticated$.pipe(delay(1000))

    this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(e => this.route.firstChild), switchMap(route => route?.data ?? of({}))).subscribe(data => {
      this.redirect = data['authOnly'] ?? false
    })
  }
  public async createUser(userData: IUser) {
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string, userData.password as string
    )
    if (!userCred.user) {
      throw new Error('User cannot find');
    }
    await this.userFunction.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      age: userData.age
    })
    await userCred.user.updateProfile({
      displayName: userData.name
    })

  }
  async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }
    await this.auth.signOut()
    if (this.redirect) {
      await this.router.navigateByUrl('/')
    }
  }
}
