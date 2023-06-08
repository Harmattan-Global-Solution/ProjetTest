
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api/api.service';
@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrls: ['./add-pays.component.css']
})
export class AddPaysComponent {
  @Output()
  cb_add_pays=new EventEmitter()
  reactiveForm_add_pays !: FormGroup;
  submitted:boolean=false
  loading_add_pays :boolean=false
  constructor(private formBuilder: FormBuilder,public api:ApiService) { }

  ngOnInit(): void {
      this.init_form()
  }
  init_form() {
      this.reactiveForm_add_pays  = this.formBuilder.group({
          id_pays: ["", Validators.required],
nom: ["", Validators.required],
ville: ["", Validators.required],
population: ["", Validators.required]
      });
  }

  // acces facile au champs de votre formulaire
  get f(): any { return this.reactiveForm_add_pays .controls; }
  // validation du formulaire
  onSubmit_add_pays () {
      this.submitted = true;
      console.log(this.reactiveForm_add_pays .value)
      // stop here if form is invalid
      if (this.reactiveForm_add_pays .invalid) {
          return;
      }
      var pays =this.reactiveForm_add_pays .value
      this.add_pays (pays )
  }
  // vider le formulaire
  onReset_add_pays () {
      this.submitted = false;
      this.reactiveForm_add_pays .reset();
  }
  add_pays(pays: any) {
      this.loading_add_pays = true;
      this.api.taf_post("pays/add", pays, (reponse: any) => {
      this.loading_add_pays = false;
      if (reponse.status) {
          console.log("Opération effectuée avec succés sur la table pays. Réponse= ", reponse);
          this.onReset_add_pays()
          alert("Opération éffectuée avec succés")
          this.cb_add_pays.emit({
            status:true,
            pays:reponse.data
          })
      } else {
          console.log("L'opération sur la table pays a échoué. Réponse= ", reponse);
          alert("L'opération a echoué")
      }
    }, (error: any) => {
        this.loading_add_pays = false;
    })
  }
  
}
