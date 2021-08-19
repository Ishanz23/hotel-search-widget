import { Component, Prop, h } from '@stencil/core';
import { SearchData } from '../../models/SearchData';
@Component({
  tag: 'ibe-hotel-search',
})
export class IBEHotelSearchView {
  @Prop() propertyId: string = '654671';
  @Prop() language: string = 'EN';
  @Prop() url: string = 'https://loumageseef.seebooking.com';

  @Prop() bgColor: string = '#0078d4';
  @Prop() textColor: string = '#fff';

  onSearched(event: CustomEvent<SearchData>) {
    const { checkin, checkout, noOfAdults, noOfChildren, noOfRooms } = event.detail;
    const url = `${this.url}/#/roomlist?checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(checkout)}&lang=${
      this.language
    }&noOfAdults=${noOfAdults}&noOfChildren=${noOfChildren}&noOfRooms=${noOfRooms}&property_id=${this.propertyId}`;
    window.open(url, '_blank');
  }

  render() {
    return <ibe-hotel-search-view bgColor={this.bgColor} textColor={this.textColor} onSearched={e => this.onSearched(e)}></ibe-hotel-search-view>;
  }
}
