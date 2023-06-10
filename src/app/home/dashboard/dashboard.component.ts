import { Component,  OnInit } from '@angular/core';
import { Chart} from 'chart.js/auto'
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;
  loading_get_pays=false;
  les_payss:any[]= []
  recherche:string=""
  filtered_list:any[]=[]
  constructor(public api: ApiService) {}

  
  ngOnInit(): void {
this.get_pays()
  }
 get_pays() {
    this.loading_get_pays = true;
    this.api.taf_post("pays/get", {}, (reponse: any) => {
      if (reponse.status) {
        this.les_payss = reponse.data
        this.on_recherche_change()
        this.creatChart(this.filtered_list)
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
  creatChart(data:any) {
     let abs: any = data.map((objet_courant:any)=>{return objet_courant.nom})
     let ord: any = data.map((objet_courant:any)=>{return objet_courant.population})
    this.chart = new Chart(
      'MyChart5', // indetifiant du chart
      // configurations et données (2) du chart
      {
        type: 'bar',//this bar tha type of chart
        data: {// values on X-Axis
          labels: abs,
          datasets: [
            {
              label: "population",
              data: ord,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 99, 12)',
                'rgb(54, 162, 125)',
                'rgb(255, 205, 236)'
              ],
            }
          ]
        },
        options: {
          aspectRatio: 2.5,
  
          plugins: {
            title: {
              display: true,
              text: 'Population des différents pays'
            }
          }
        }

      }
    )
  }
  on_recherche_change(){
    console.log("on recherche ",this.recherche)
    this.filtered_list = this.les_payss.
    filter((un_pays:any)=>{
      return (un_pays.nom+" "+(un_pays.ville||"")+" "+(un_pays.population||"")).toLocaleLowerCase().includes(this.recherche.toLocaleLowerCase())

    })
  }
}
