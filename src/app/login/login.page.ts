import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    // this.router.navigate(['/userlist']);
    this.submitted = true;
    if(!this.myForm.valid) {
      console.log('all fields required');
    }
    else {  
      
      console.log(this.myForm.value);
      let selecPara = {
        "UserName": this.myForm.value.username,
        "Password": this.myForm.value.password,
      };

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();

      this.service.signIn(selecPara).subscribe(async res => {
        loading.dismiss();
        console.log(res);
        const toast = await this.toastController.create({
          message: 'Login Successfully',
          duration: 2000
        });
        toast.present();
        this.router.navigateByUrl('/userlist');
      }, async error => {
        loading.dismiss();
        const toast = await this.toastController.create({
          message: 'Login Failed',
          duration: 2000
        });
        toast.present();
      });
    }
     
  }

}
