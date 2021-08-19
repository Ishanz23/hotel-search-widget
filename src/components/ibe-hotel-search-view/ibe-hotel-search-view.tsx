import { Component, Prop, Event, EventEmitter, h, State, Listen } from '@stencil/core';
import { SearchData } from '../../models/SearchData';

@Component({
  tag: 'ibe-hotel-search-view',
  styleUrl: 'ibe-hotel-search-view.css',
})
export class IBEHotelSearchView {
  @State() checkin: string = new Date().toISOString();
  @State() checkout: string;
  @State() noOfAdults: number = 2;
  @State() noOfChildren: number = 0;
  @State() noOfRooms: number = 1;
  @State() promoCode: string;

  @State() isFormValid = false;
  @State() hideRoom = true;

  @Prop() propertyId: string = '';
  @Prop() bgColor: string = '#0078d4';
  @Prop() textColor: string = '#fff';

  @Event() searched: EventEmitter<SearchData>;

  @Listen('click') onComponentClick(event: PointerEvent) {
    const target: any = event.target;
    if (target.classList && target.classList.contains('guest-popover')) {
    } else {
      this.hideRoom = true;
    }
  }

  onCheckinDateUpdate(event: any) {
    this.checkin = event.target.value;
  }
  onCheckoutDateUpdate(event: any) {
    this.checkout = event.target.value;
  }
  onNoOfRoomsUpdate(event: any) {
    this.noOfRooms = event.target.value;
  }
  onNoOfAdultsUpdate(event: any) {
    this.noOfAdults = event.target.value;
  }
  onNoOfChildrenUpdate(event: any) {
    this.noOfChildren = event.target.value;
  }

  checkValidity() {
    if (this.checkin && this.checkout && this.noOfAdults > 0 && this.noOfRooms > 0) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  onSearch(e: MouseEvent) {
    e.preventDefault();
    console.log(this.checkin);
    const searchCriteria = {
      checkin: this.checkin,
      checkout: this.checkout,
      noOfAdults: this.noOfAdults,
      noOfChildren: this.noOfChildren,
      noOfRooms: this.noOfRooms,
      promoCode: this.promoCode,
    };
    if (this.isFormValid) {
      this.searched.emit(searchCriteria);
    }
    console.log(searchCriteria);
  }

  onRoomGuestsToggle() {
    console.log('toggled');
    this.hideRoom = !this.hideRoom;
  }

  render() {
    return (
      <form onChange={this.checkValidity.bind(this)}>
        <div class="input-container">
          <div class="checkin form-floating">
            <input type="date" name="checkin" id="checkin" class="form-control form-control-sm" value={this.checkin} onChange={this.onCheckinDateUpdate.bind(this)} required />
            <label htmlFor="checkin">Checkin Date</label>
          </div>
          <div class="checkin form-floating">
            <input type="date" name="checkout" id="checkout" class="form-control form-control-sm" value={this.checkout} onChange={this.onCheckoutDateUpdate.bind(this)} required />
            <label htmlFor="checkout">Checkout Date</label>
          </div>
          <div class="rooms-guests form-floating guest-popover">
            <div
              class="summary form-control form-control-sm guest-popover"
              onClick={this.onRoomGuestsToggle.bind(this)}
            >{`${this.noOfRooms} rooms, ${this.noOfAdults} adults, ${this.noOfChildren} children`}</div>
            {this.hideRoom ? null : (
              <div class="inputs">
                <div class="item room">
                  <label htmlFor="noOfRooms">Rooms</label>
                  <input
                    type="number"
                    name="noOfRooms"
                    id="noOfRooms"
                    class="form-control form-control-sm guest-popover"
                    placeholder="No of Rooms"
                    value={this.noOfRooms}
                    onChange={this.onNoOfRoomsUpdate.bind(this)}
                  />
                </div>
                <div class="item adults">
                  <label htmlFor="noOfAdults">Adults</label>
                  <input
                    type="number"
                    name="noOfAdults"
                    id="noOfAdults"
                    class="form-control form-control-sm guest-popover"
                    placeholder="No of Adults"
                    value={this.noOfAdults}
                    onChange={this.onNoOfAdultsUpdate.bind(this)}
                  />
                </div>
                <div class="item children">
                  <label htmlFor="noOfChildren">Children</label>
                  <input
                    type="number"
                    name="noOfChildren"
                    id="noOfChildren"
                    class="form-control form-control-sm guest-popover"
                    placeholder="No of Children"
                    value={this.noOfChildren}
                    onChange={this.onNoOfChildrenUpdate.bind(this)}
                  />
                </div>
              </div>
            )}
          </div>
          <div class="form-floating">
            <input
              type="text"
              name="promoCode"
              id="promoCode"
              class="form-control form-control-sm"
              placeholder="Promo Code"
              value={this.promoCode}
              onChange={this.onNoOfChildrenUpdate.bind(this)}
            />
            <label htmlFor="checkout">Promo Code</label>
          </div>
        </div>
        <button
          style={{ backgroundColor: this.bgColor, color: this.textColor }}
          class={`btn btn-lg btn-primary ${this.isFormValid ? '' : 'blocked'}`}
          onClick={this.onSearch.bind(this)}
        >
          Search
        </button>
      </form>
    );
  }
}
