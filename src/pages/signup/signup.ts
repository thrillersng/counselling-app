import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public afAuth: AngularFireAuth, afDB: AngularFireDatabase, public utility: UtilityProvider) {
    this.signup = {};
    // console.log(this.utility.saveDoc({usertype: 'counsellor'}, 'users/001'));
  }

  signupWithEmail() {
    console.log(this.signup);
    if(!this.signup.email || !this.signup.password || !this.signup.usertype) {
      alert("Please enter required information");
      return;
    }

    this.afAuth.auth.createUserWithEmailAndPassword(this.signup.email, this.signup.password).then(
      auth => {
        console.log(auth.user);
        const user = auth.user;
        const uid = user.uid;
        delete this.signup.password;
        this.signup.uid = uid;
        this.utility.saveDoc('users', uid, this.signup).then( u=> {
          alert("Signup successful");
          this.goToDashboard();
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
      console.log(error);
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
