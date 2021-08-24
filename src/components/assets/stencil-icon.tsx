import { Component, getAssetPath, Prop, h } from '@stencil/core';

@Component({
  tag: 'ibe-guests',
  styleUrl: './stencil-icon.css',
  assetsDirs: ['icons'],
})
export class StencilIcon {
  @Prop() image = 'icon-guests.png';
  @Prop() alt = 'Guest Icon';
  render() {
    return <img src={getAssetPath(`./icons/${this.image}`)} alt={this.alt}></img>;
  }
}
