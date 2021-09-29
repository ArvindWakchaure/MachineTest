import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myForm: FormGroup;
  submitted: boolean;
  submit: boolean = false;
  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController) {}
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
      mobile: ['', Validators.required],
      password: ['sankalp']
    });
  }

  
  change(event) {
    console.log(event.target.value);
    let input = event.target.value;
    (input.length > 10) ? this.submit = true : this.submit = false;
    
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
        "FullName": this.myForm.value.name,
        "Email": this.myForm.value.email,
        "MobileNo": this.myForm.value.mobile,
        "Password": "sankalp",
      };

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();

      this.service.signUp(selecPara).subscribe(async res => {
        loading.dismiss();
        console.log(res);
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Congratulations!',
          message: `You are registered successfully`,
          buttons: [ {
            text: 'OK',
            handler:(() => {
              this.router.navigateByUrl('/userlist');
            })
          }]
        });
        await alert.present();

      }, async error => {
        loading.dismiss();
        console.log(error);
        const toast = await this.toastController.create({
          message: `${error}`,
          duration: 2000
        });
        toast.present();
      })
    }
     
  }
}
