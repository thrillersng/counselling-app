import { Component, Self } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { CounsellorPage } from '../counsellor/counsellor';
import { DashboardPage } from '../dashboard/dashboard';
import { UtilityProvider } from '../../providers/utility/utility';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
  signup;
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public afAuth: AngularFireAuth, afDB: AngularFireDatabase, public utility: UtilityProvider,
    private loadingCtrl: LoadingController) {
    this.signup = {};
    
    this.loading = this.loadingCtrl.create({
      content: 'Signing up...'
  });
  }

  signupWithEmail() {
    if(this.loading != undefined){
      this.loading.dismiss();
    }
    this.loading.present();
    console.log(this.signup);
    if(!this.signup.email || !this.signup.password || !this.signup.usertype) {
      alert("Please enter required information");
      return;
    }
    const self = this;

    this.afAuth.auth.createUserWithEmailAndPassword(this.signup.email, this.signup.password).then(
      auth => {
        console.log(auth.user);
        const user = auth.user;
        const uid = user.uid;
        delete this.signup.password;
        this.signup.uid = uid;        
        this.utility.saveDoc('users', uid, self.signup).then( u=> {
          alert("Signup successful");
          self.loading.dismiss().then(() => {
            self.goToDashboard();
          });
          
        }).catch( error => {
          self.loading.dismiss().then(() => {
            console.log(error);
          });
        });
        
      }
    ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else if (errorCode == 'auth/email-already-in-use') {
        alert('Email already in use.');
      } else if (errorCode == 'auth/invalid-email') {
        alert('Invalid email address.');
      } else {
        alert(errorMessage);
      }
      self.loading.dismiss();
    });
  }
  goToCounsellor(){
    this.navCtrl.setRoot(CounsellorPage);
  }
  goToDashboard(){
    if(!this.signup.usertype)
      return;

    if(this.signup.usertype == 'counsellor')
      this.navCtrl.setRoot(DashboardPage);
  }
}
