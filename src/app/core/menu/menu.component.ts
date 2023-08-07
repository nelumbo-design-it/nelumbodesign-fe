import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public isOpenMenu: boolean = false;
  @Output() isOpenMenuEmitter = new EventEmitter<boolean>();

  public clickMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    this.isOpenMenuEmitter.emit(this.isOpenMenu);
  }
}
