import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DashboardPage } from '../dashboard/dashboard';
import { SignUpPage } from '../signup/signup';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LogInPage {
    login;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afAuth: AngularFireAuth, afDB: AngularFireDatabase) {
      this.login = {};
    }
  
    loginWithEmail() {
      console.log(this.login);
      if(!this.login.email || !this.login.password || !this.login.usertype) {
        alert("Please enter required information");
        return;
      }
  
      this.afAuth.auth.createUserWithEmailAndPassword(this.login.email, this.login.password).then(
        auth => {
          console.log(auth);
          alert("Login successful");
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

  goToDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }
  goToSignUp(){
    this.navCtrl.setRoot(SignUpPage);
  }

}
