# ibe-hotel-search-view



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type     | Default     |
| ------------ | ------------- | ----------- | -------- | ----------- |
| `bgColor`    | `bg-color`    |             | `string` | `'#0078d4'` |
| `propertyId` | `property-id` |             | `string` | `''`        |
| `textColor`  | `text-color`  |             | `string` | `'#fff'`    |


## Events

| Event      | Description | Type                      |
| ---------- | ----------- | ------------------------- |
| `searched` |             | `CustomEvent<SearchData>` |


## Dependencies

### Used by

 - [ibe-hotel-search](../ibe-hotel-search)

### Depends on

- [ibe-guests-icon](../assets)
- [ibe-downarrow-icon](../assets)

### Graph
```mermaid
graph TD;
  ibe-hotel-search-view --> ibe-guests-icon
  ibe-hotel-search-view --> ibe-downarrow-icon
  ibe-hotel-search --> ibe-hotel-search-view
  style ibe-hotel-search-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
