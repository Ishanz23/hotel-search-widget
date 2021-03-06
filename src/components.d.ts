/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SearchData } from "./models/SearchData";
export namespace Components {
    interface IbeDownarrowIcon {
    }
    interface IbeGuests {
        "alt": string;
        "image": string;
    }
    interface IbeGuestsIcon {
    }
    interface IbeHotelSearch {
        "bgColor": string;
        "language": string;
        "propertyId": string;
        "textColor": string;
        "url": string;
    }
    interface IbeHotelSearchView {
        "bgColor": string;
        "propertyId": string;
        "textColor": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLIbeDownarrowIconElement extends Components.IbeDownarrowIcon, HTMLStencilElement {
    }
    var HTMLIbeDownarrowIconElement: {
        prototype: HTMLIbeDownarrowIconElement;
        new (): HTMLIbeDownarrowIconElement;
    };
    interface HTMLIbeGuestsElement extends Components.IbeGuests, HTMLStencilElement {
    }
    var HTMLIbeGuestsElement: {
        prototype: HTMLIbeGuestsElement;
        new (): HTMLIbeGuestsElement;
    };
    interface HTMLIbeGuestsIconElement extends Components.IbeGuestsIcon, HTMLStencilElement {
    }
    var HTMLIbeGuestsIconElement: {
        prototype: HTMLIbeGuestsIconElement;
        new (): HTMLIbeGuestsIconElement;
    };
    interface HTMLIbeHotelSearchElement extends Components.IbeHotelSearch, HTMLStencilElement {
    }
    var HTMLIbeHotelSearchElement: {
        prototype: HTMLIbeHotelSearchElement;
        new (): HTMLIbeHotelSearchElement;
    };
    interface HTMLIbeHotelSearchViewElement extends Components.IbeHotelSearchView, HTMLStencilElement {
    }
    var HTMLIbeHotelSearchViewElement: {
        prototype: HTMLIbeHotelSearchViewElement;
        new (): HTMLIbeHotelSearchViewElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ibe-downarrow-icon": HTMLIbeDownarrowIconElement;
        "ibe-guests": HTMLIbeGuestsElement;
        "ibe-guests-icon": HTMLIbeGuestsIconElement;
        "ibe-hotel-search": HTMLIbeHotelSearchElement;
        "ibe-hotel-search-view": HTMLIbeHotelSearchViewElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface IbeDownarrowIcon {
    }
    interface IbeGuests {
        "alt"?: string;
        "image"?: string;
    }
    interface IbeGuestsIcon {
    }
    interface IbeHotelSearch {
        "bgColor"?: string;
        "language"?: string;
        "propertyId"?: string;
        "textColor"?: string;
        "url"?: string;
    }
    interface IbeHotelSearchView {
        "bgColor"?: string;
        "onSearched"?: (event: CustomEvent<SearchData>) => void;
        "propertyId"?: string;
        "textColor"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ibe-downarrow-icon": IbeDownarrowIcon;
        "ibe-guests": IbeGuests;
        "ibe-guests-icon": IbeGuestsIcon;
        "ibe-hotel-search": IbeHotelSearch;
        "ibe-hotel-search-view": IbeHotelSearchView;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ibe-downarrow-icon": LocalJSX.IbeDownarrowIcon & JSXBase.HTMLAttributes<HTMLIbeDownarrowIconElement>;
            "ibe-guests": LocalJSX.IbeGuests & JSXBase.HTMLAttributes<HTMLIbeGuestsElement>;
            "ibe-guests-icon": LocalJSX.IbeGuestsIcon & JSXBase.HTMLAttributes<HTMLIbeGuestsIconElement>;
            "ibe-hotel-search": LocalJSX.IbeHotelSearch & JSXBase.HTMLAttributes<HTMLIbeHotelSearchElement>;
            "ibe-hotel-search-view": LocalJSX.IbeHotelSearchView & JSXBase.HTMLAttributes<HTMLIbeHotelSearchViewElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
