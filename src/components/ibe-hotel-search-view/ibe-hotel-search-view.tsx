import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { SearchData } from '../../models/SearchData';

@Component({
  tag: 'ibe-hotel-search-view',
  styleUrl: 'ibe-hotel-search-view.css',
})
export class IBEHotelSearchView {
  @Prop() propertyId: string = '';

  @Prop() bgColor: string = '#0078d4';
  @Prop() textColor: string = '#fff';

  @Event() onSearched: EventEmitter<SearchData>;

  onSearch(e: MouseEvent) {
    e.preventDefault();
    this.onSearched.emit({ checkin: '20 Aug 2021', checkout: '21 Aug 2021', noOfAdults: 2, noOfChildren: 0, noOfRooms: 1 });
  }

  render() {
    return (
      <div>
        <div class="search-form">
          <form>
            <input type="date" name="checkin" id="checkin" />
            <input type="date" name="checkout" id="checkout" />
          </form>
        </div>
        <button style={{ backgroundColor: this.bgColor, color: this.textColor }} onClick={e => this.onSearch(e)}>
          Search
        </button>
      </div>
    );
  }
}
