import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.scss']
})
export class NavlinkComponent implements OnInit {
  ngOnInit(): void {
    $('.button-collapse').sideNav();
    $('.side-nav .nav-link').click(function () {
      $('.drag-target').trigger('click');
    });
  }
}
