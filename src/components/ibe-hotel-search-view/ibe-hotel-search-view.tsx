import { Component, Prop, Event, EventEmitter, h, State, Listen } from '@stencil/core';
import { SearchData } from '../../models/SearchData';
import { addDay, formatDate } from '../../util/date-format';

@Component({
  tag: 'ibe-hotel-search-view',
  styleUrl: 'ibe-hotel-search-view.css',
})
export class IBEHotelSearchView {
  @State() checkin: string = formatDate(addDay(new Date(), 1));
  @State() checkout: string = formatDate(addDay(new Date(), 2));
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

  @Listen('click', { target: 'document' }) onComponentClick(event: PointerEvent) {
    const target: any = event.target;
    const popover = document.getElementById('guest-popover');
    if (popover.contains(target)) {
    } else {
      this.hideRoom = true;
    }
  }

  onCheckinDateUpdate(event: any) {
    this.checkin = event.target.value;
    if (new Date(this.checkin) >= new Date(this.checkout)) {
      this.checkout = formatDate(addDay(new Date(this.checkin)));
    }
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
  onPromoCodeUpdate(event: any) {
    this.promoCode = event.target.value;
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

  incrementChildren() {
    if (this.noOfChildren < 6) {
      this.noOfChildren += 1;
    }
  }
  decrementChildren() {
    if (this.noOfChildren > 0) {
      this.noOfChildren -= 1;
    }
  }
  incrementAdults() {
    if (this.noOfAdults < 8) {
      this.noOfAdults += 1;
    }
  }
  decrementAdults() {
    if (this.noOfAdults > 1) {
      this.noOfAdults -= 1;
    }
  }
  incrementRoom() {
    if (this.noOfRooms < this.noOfAdults) {
      this.noOfRooms += 1;
    }
  }
  decrementRoom() {
    if (this.noOfRooms > 1) {
      this.noOfRooms -= 1;
    }
  }

  render() {
    return (
      <form onChange={this.checkValidity.bind(this)}>
        <div class="input-container">
          <div class="dates">
            <div class="checkin form-floating">
              <input
                type="date"
                name="checkin"
                id="checkin"
                class="form-control form-control-sm"
                onChange={this.onCheckinDateUpdate.bind(this)}
                required
                min={formatDate(new Date())}
                pattern="\d{4}-\d{2}-\d{2}"
                value={this.checkin}
              />
              <label htmlFor="checkin">Checkin Date</label>
            </div>
            <div class="checkin form-floating">
              <input
                type="date"
                name="checkout"
                id="checkout"
                class="form-control form-control-sm"
                onChange={this.onCheckoutDateUpdate.bind(this)}
                required
                min={formatDate(addDay(new Date(this.checkin)))}
                pattern="\d{4}-\d{2}-\d{2}"
                value={this.checkout}
              />
              <label htmlFor="checkout">Checkout Date</label>
            </div>
          </div>
          <div id="guest-popover" class="rooms-guests">
            <div class="summary" onClick={this.onRoomGuestsToggle.bind(this)}>
              <img src="../../assets/icons/icon-guests.png" alt="" />
              <span class="caption">{`${this.noOfRooms} rooms, ${this.noOfAdults} adults, ${this.noOfChildren} children`}</span>
              <img src="../../assets/icons/icon-downarrow.png" alt="" />
            </div>
            {this.hideRoom ? null : (
              <div class="inputs">
                <div class="item adults">
                  <label class="" htmlFor="noOfAdults">
                    Adults
                  </label>
                  <div class="counter">
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.incrementAdults.bind(this)}>
                      +
                    </button>
                    <input
                      type="number"
                      name="noOfAdults"
                      id="noOfAdults"
                      class="form-control form-control-sm"
                      placeholder="No of Adults"
                      min="1"
                      max="8"
                      value={this.noOfAdults}
                      onChange={this.onNoOfAdultsUpdate.bind(this)}
                    />
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.decrementAdults.bind(this)}>
                      -
                    </button>
                  </div>
                </div>
                <div class="item children">
                  <label class="" htmlFor="noOfChildren">
                    Children
                  </label>
                  <div class="counter">
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.incrementChildren.bind(this)}>
                      +
                    </button>
                    <input
                      type="number"
                      name="noOfChildren"
                      id="noOfChildren"
                      class="form-control form-control-sm"
                      placeholder="No of Children"
                      min="0"
                      max="6"
                      value={this.noOfChildren}
                      onChange={this.onNoOfChildrenUpdate.bind(this)}
                    />
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.decrementChildren.bind(this)}>
                      -
                    </button>
                  </div>
                </div>
                <div class="item room">
                  <label class="" htmlFor="noOfRooms">
                    Rooms
                  </label>
                  <div class="counter">
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.incrementRoom.bind(this)}>
                      +
                    </button>
                    <input
                      type="number"
                      name="noOfRooms"
                      id="noOfRooms"
                      class="form-control form-control-sm"
                      placeholder="No of Rooms"
                      value={this.noOfRooms}
                      min="1"
                      max={this.noOfAdults}
                      onChange={this.onNoOfRoomsUpdate.bind(this)}
                    />
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.decrementRoom.bind(this)}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div class="promo-code form-floating">
            <input
              type="text"
              name="promoCode"
              id="promoCode"
              class="form-control form-control-sm"
              placeholder="Enter your promo code here"
              value={this.promoCode}
              onChange={this.onPromoCodeUpdate.bind(this)}
            />
            <label htmlFor="checkout">Promo Code</label>
          </div>
        </div>
        <div class="actions">
          <button
            style={{ backgroundColor: this.bgColor, color: this.textColor }}
            class={`btn btn-lg btn-primary ${this.isFormValid ? '' : 'blocked'}`}
            onClick={this.onSearch.bind(this)}
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}
