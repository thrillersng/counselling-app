import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DashboardPage } from '../dashboard/dashboard';
import { SignUpPage } from '../signup/signup';
import { CounsellorPage } from '../counsellor/counsellor';

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
  
    signIn() {
      console.log(this.login);
      if(!this.login.email || !this.login.password || !this.login.usertype) {
        alert("Please enter required information");
        return;
      }
  
      this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.password).then(
        auth => {
          console.log(auth);
          if(this.login.usertype == 'counsellor') {
            this.navCtrl.setRoot(CounsellorPage);
          } else if (this.login.usertype == 'patient') {
            this.navCtrl.setRoot(DashboardPage);
          }
          
        }
      ).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
        
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
