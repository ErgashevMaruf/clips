import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean
}

@Injectable(
  { providedIn: 'root' }
)
export class ModalService {
  public modals: IModal[] = []

  isModalOpen(id: string): boolean {
    return !!this.modals.find(element => element.id === id)?.visible;
  }

  toggle(id: string) {
    const modal = this.modals.find(element => element.id === id)
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  register(id: string) {
    this.modals.push(
      {
        id,
        visible: false,
      }
    )
  }
  unregistered(id: string) {
    this.modals = this.modals.filter(el => el.id != id);
  }
  constructor() { }
}
