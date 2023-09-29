import { Component , OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {
  @Input()
  gameType: string = ""
  @Input()
  gamePrice: string = ""
  constructor() { }
  ngOnInit(): void {


  }

}
