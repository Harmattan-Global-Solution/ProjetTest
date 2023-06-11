import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.css']
})
export class ListPaysComponent {
  loading_get_pays = false
  les_payss: any[] = []
  selected_pays: any = undefined
  pays_to_edit: any = undefined
  recherche:string=""
  filtered_list:any[]=[]
  clik_pays:string=""
  selectedOption: string = "";

  constructor(public api: ApiService,) {

  }
  ngOnInit(): void {
    this.get_pays()
  }
  get_pays() {
    this.loading_get_pays = true;
    this.api.taf_post("pays/get", {}, (reponse: any) => {
      if (reponse.status) {
        this.les_payss = reponse.data
        this.on_recherche_change()
        console.log("Opération effectuée avec succés sur la table pays. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table pays a échoué. Réponse= ", reponse);
        alert("L'opération a echoué")
      }
      this.loading_get_pays = false;
    }, (error: any) => {
      this.loading_get_pays = false;
    })
  }

  after_add(event: any) {
    if (event.status) {
      this.les_payss.unshift(event.pays)
      this.get_pays()
    } else {

    }
  }
  after_edit(params: any) {
    this.les_payss[this.les_payss.indexOf(this.pays_to_edit)]=params.new_data
    this.get_pays()
  }
  voir_plus(one_pays: any) {
    this.selected_pays = one_pays
  }
  on_click_edit(one_pays: any) {
    this.pays_to_edit = one_pays
  }
  on_close_modal_edit(){
    this.pays_to_edit=undefined
  }
  on_close_modal_add(){
    this.selected_pays=undefined
  }


  on_recherche_change(){
    console.log("on recherche ",this.recherche)
    this.filtered_list = this.les_payss.
    filter((un_pays:any)=>{
      return (un_pays.nom+" "+(un_pays.ville||"")+" "+(un_pays.population||"")).toLocaleLowerCase().includes(this.recherche.toLocaleLowerCase())

    })
  }
  // change_country(){
  //   console.log("on recherche ",this.clik_pays)
  //   this.filtered_list = this.les_payss.
  //   filter((un_pays:any)=>{
  //     return (un_pays.population||"").toLocaleLowerCase().includes(this.clik_pays.toLocaleLowerCase())

  //   })
  // }
  // change_country() {
  //   console.log("Recherche de pays avec une population supérieure à", this.clik_pays);
  //   this.filtered_list = this.les_payss.filter((un_pays: any) => {
  //     if (un_pays.population) {
  //       return parseInt(un_pays.population) > parseInt(this.clik_pays);
  //     }
  //     return false;
  //   });
  // }

change_country() {
  console.log("Option sélectionnée :", this.selectedOption);
  switch (this.selectedOption) {
    case "populationInf5M":
      this.filtered_list = this.les_payss.filter((un_pays: any) => {
        return un_pays.population <= 5000000;
      });
      break;

    case "populationInf10M":
      this.filtered_list = this.les_payss.filter((un_pays: any) => {
        return un_pays.population < 10000000;
      });
      break;

    case "populationSup10M":
      this.filtered_list = this.les_payss.filter((un_pays: any) => {
        return un_pays.population >= 10000000;
      });
      break;

    case "populationSup20M":
      this.filtered_list = this.les_payss.filter((un_pays: any) => {
        return un_pays.population >= 20000000;
      });
      break;

    default:
      this.filtered_list = this.les_payss;
      break;
  }
}

  
}