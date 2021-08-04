# Booking Engine hotel search widget

## The Problem

Whenever we are seeling our booking engine application to a hotel or hotel-chain, the general idea is to have a "**Book Now**" link somewhere on the home page of the hotel's own website which redirects the user to our Booking Engine.
However, in a lot of cases, the hotel wants the search feature to be in their website and clicking on search should directly redirect the user to the results page of the booking engine.
Hence, two separate interfaces required for implementing the **search feature**.

## Analysis of the problem

The first inerface that is a part of our booking engine is straight-forward to implement because it's a part of our application architecture and no other party is going to modify it other than the booking engine itself.
The second interface, which basically should be some kind of a reusable widget that any hotel can add them to their website with minimal configuration and it should work as per requirement.
While building such a widget, certain things needs to be kept in mind:

- The design of the widget should be in such a way that doesn't affect the original website's look and feel adversely. It should be colour-neutral and the CTA button appearance should be configurable in order to match the original website.
- The amount of modification required in the code base should be minimal.
- THe widget shouldn't affect any existing feature of the website.
- It should be as lightweight as possible without too much external dependencies.

## R&D Findings

### **[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)**

Web Components seems to be a perfect tool for our usecase. Web components are essentially custom HTML element that can be created and used with any other UI, irrespective of the technology the parent website is using. All modern browsers support web components.

### **Tools for building Web Components**

Building web components using vanilla javascript, HTML and CSS is not impossible but there are few tools available that simplifies the development journey. **Stencil** and **Lit** seems to be the most popular and highly used tool out there.

#### **[Stencil](https://stenciljs.com/)**

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.
Stencil components are just Web Components, so they work in any major framework or with no framework at all.
Detailed instructions of how to use Stencil is described in the [_readme.md_](./readme.md) file.

#### **[Lit](https://lit.dev/)**

Lit(formerly **Polymer**) is a simple library for building fast, lightweight web components.
At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive.
Lit is an emerging alternative to Stencil and more details about it can be found on their official website.

However, we have built this prototype using Stencil so we'll keep our focus on that for now.

## Solution

The solution can be logically segregated in few separate processes. Let's check out the design first.

### Design

Since, our widget can be used inside any website, it should have a neutral look and must not have a very opinionated design because that might not fit well with all websites. Also, the main action button should be configurable so that the website can use it's own theme.

### Development

Yet to be finalized

### Publishing and deployment

Building production-ready standard web components using Stencil is as simple as running the command `npm run build`.
This creates a dist folder in the project root which can be shared with any UI project and be imported there to be used.
Though the usage will slightly vary from project to project, and hence the basic implementation of commonly used technologies are mentioned here.

#### Vanilla HTML-CSS-Javascript projects

For plain UI projects that doesn't use any framework, we can simply copy the contents of the **dist** folder to the project folder and import the ${component-name}.js in the index.html file.
