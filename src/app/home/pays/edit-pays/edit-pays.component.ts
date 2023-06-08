
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api/api.service';
@Component({
  selector: 'app-edit-pays',
  templateUrl: './edit-pays.component.html',
  styleUrls: ['./edit-pays.component.css']
})
export class EditPaysComponent {
  reactiveForm_edit_pays !: FormGroup;
  submitted: boolean = false
  loading_edit_pays: boolean = false
  @Input()
  pays_to_edit: any = {}
  @Output()
  cb_edit_pays=new EventEmitter()
  constructor(private formBuilder: FormBuilder, public api: ApiService) { 
      
  }
  reactiveForm_add_pays= new FormGroup({
    nom: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*'), ]),
    ville: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*'), ]),
    population: new FormControl('', [Validators.required, ]),
  });
  ngOnInit(): void {
    //   this.init_form()
      this.update_form(this.pays_to_edit)
  }
//   init_form() {
//       this.reactiveForm_edit_pays  = this.formBuilder.group({
//         id_pays: ["", Validators.required],
// nom: ["", Validators.required],
// ville: ["", Validators.required],
// population: ["", Validators.required]
//       });
//   }
  // mise à jour du formulaire
  update_form(pays_to_edit:any) {
      this.reactiveForm_edit_pays = this.formBuilder.group({
        nom: [pays_to_edit.nom, Validators.required],
        ville: [pays_to_edit.ville, Validators.required],
        population: [pays_to_edit.population, Validators.required]
      });
  }

  // acces facile au champs de votre formulaire
  get f(): any { return this.reactiveForm_edit_pays .controls; }
  // validation du formulaire
  onSubmit_edit_pays() {
      this.submitted = true;
      console.log(this.reactiveForm_edit_pays.value)
      // stop here if form is invalid
      if (this.reactiveForm_edit_pays.invalid) {
          return;
      }
      var pays = this.reactiveForm_edit_pays.value
      this.edit_pays({
      condition:JSON.stringify({id_pays:this.pays_to_edit.id_pays}),
      data:JSON.stringify(pays)
      })
  }
  // vider le formulaire
  onReset_edit_pays() {
      this.submitted = false;
      this.reactiveForm_edit_pays.reset();
  }
  edit_pays(pays: any) {
      this.loading_edit_pays = true;
      this.api.taf_post("pays/edit", pays, (reponse: any) => {
          if (reponse.status) {
              this.cb_edit_pays.emit({
                  new_data:JSON.parse(pays.data)
              })
              console.log("Opération effectuée avec succés sur la table pays. Réponse= ", reponse);
              this.onReset_edit_pays()
              alert("Opération effectuée avec succés sur la table pays")
          } else {
              console.log("L'opération sur la table pays a échoué. Réponse= ", reponse);
              alert("L'opération a echoué")
          }
          this.loading_edit_pays = false;
      }, (error: any) => {
          this.loading_edit_pays = false;
      })
  }
}
