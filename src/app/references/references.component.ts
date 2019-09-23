import { Component, OnInit, Renderer2 } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

class Project {
  className: string;
  img: string;
  text: string;
  link: string;
}

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  bitbImg : string;
  markenfilm : string;
  bim : string;
  projects : Project[];
  position: string;

  constructor(private renderer: Renderer2, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
        this.position = params['customer'];
    });
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

  ngOnInit() {
    this.projects = [];
    this.projects.push({link: 'https://bitb-staking.com', className: 'bitb', img: "/assets/bitb.png", text: `bitB Staking is an online poker staking group consisting of many specialist teams bringing you expert knowledge for each format of the game: MTTs, Cash games, and SNGs. We have created the most effective learning environment possible for motivated players to maximize their potential. Our goal is to revolutionize the staking industry and create communities of players that work together to become the best in the business in their area of expertise.`});
    this.projects.push({link: 'https://www.markenfilm.de', className: 'markenfilm', img: "/assets/markenfilm.png", text: 's'});
    this.projects.push({link: 'https://www.bimsystems.de', className: 'bim', img: "/assets/bim.png", text: 's'});

  }
  ngAfterViewInit() {
    if (this.position) {
      var elmnt = document.getElementById(this.position);
      elmnt.scrollIntoView();
    }
  }
}
