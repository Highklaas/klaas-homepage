import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

class Project {
  className: string;
  img: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bitbImg : string;
  markenfilm : string;
  bim : string;
  projects : Project[];

  constructor(private renderer: Renderer2) {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }
  ngOnInit() {
    this.projects = [];
    this.projects.push({className: 'bitb', img: "/assets/bitb.png", text: `bitB Staking is an online poker staking group consisting of many specialist teams bringing you expert knowledge for each format of the game: MTTs, Cash games, and SNGs. We have created the most effective learning environment possible for motivated players to maximize their potential. Our goal is to revolutionize the staking industry and create communities of players that work together to become the best in the business in their area of expertise.`});
    this.projects.push({className: 'markenfilm', img: "/assets/markenfilm.png", text: 's'});
    this.projects.push({className: 'bim', img: "/assets/bim.png", text: 's'});
  }
}
