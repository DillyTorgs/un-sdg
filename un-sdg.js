import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `un-sdg`
 * 
 * @demo index.html
 * @element un-sdg
 */
export class unSdg extends DDDSuper((LitElement)) {
  //tag name for custom element 
  static get tag() {
    return "un-sdg";
  }
   //default values for properties
  constructor() {
    super();
    this.title = "";
    this.goal = "1";
    this.label = "";
    this.width = "256px";
    this.height = "256px";
    this.fetchPriority = "low";
    this.colorOnly = false;
  }

  // Lit reactive properties
  static get properties() {
    return {
      title: { type: String },
      goal: { type: String },
      label: { type: String },
      height: { type: String },
      width: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: Boolean },

    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-flex;
        // background color in --un-sdg-goal form + height & width
        --un-sdg-width: 254px;
        --un-sdg-height: 254px;
         background-color: white;
        --un-sdg-goal-1:#EB1C2C;
        --un-sdg-goal-2:#D2A02A;
        --un-sdg-goal-3:#2C9B48;
        --un-sdg-goal-4:#C21F33;
        --un-sdg-goal-5:#EF402A;
        --un-sdg-goal-6:#00ADD8;
        --un-sdg-goal-7:#FDB713;
        --un-sdg-goal-8:#8F1737;
        --un-sdg-goal-9:#F36D24;
        --un-sdg-goal-10:#E01583;
        --un-sdg-goal-11:#F99D25;
        --un-sdg-goal-12:#CF8D2A;
        --un-sdg-goal-13:#48773D;
        --un-sdg-goal-14:#007DBB;
        --un-sdg-goal-15:#3FAF49;
        --un-sdg-goal-16:#01558A;
        --un-sdg-goal-17:#193667;
        
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
        h3 span {
        font-size: var(--un-sdg-label-font-size, var(--ddd-font-size-s));
      }
      .color-block {
        width: var(--un-sdg-width, 100%);
        height: var(--un-sdg-height, 100%);
      }
      
      img {
        width: var(--un-sdg-width, 254px);
        height: var(--un-sdg-height, 254px);
      }
      .sdg-wrapper {
        width: var(--un-sdg-width, 254px);
        height: var(--un-sdg-height, 254px);
        background-color: var(--un-sdg-goal-color, #000);
      }
      
      
    `];
  }

  
  updated(changedProperties) {
    if (changedProperties.has("goal")) {
      this.updateGoal();
    }
  }

  // sets some variables and makes everything reference throughout useable
  updateGoal() {
    this.imgSrc = new URL(`../lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;
    this.altText = this.label || `Goal: ${this.goal}`;
    const colorVar = `--goal-${this.goal}`;
    this.style.setProperty("--un-sdg-goal-color", `var(${colorVar})`);
  }

  
  render() {
    let imgSrc = new URL(`../lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;
    if (this.goal === "all") { imgSrc = new URL(`../lib/svgs/all.svg`, import.meta.url).href;
    }
    else if (this.goal === "circle") { imgSrc = new URL(`../lib/svgs/circle.png`, import.meta.url).href;
    }
    //only background color will show from the image
    if (this.colorOnly) { 
      return html`
      <div class="color-block" style="background-color: var(--un-sdg-goal-${this.goal})"></div>
      `;
    }
    
    
    // Default rendering of the SDG image with background color
    return html`
    <div class="sdg-wrapper" style="background-color: var(--un-sdg-goal-${this.goal})"> 
        <img 
        src="${(imgSrc)}" 
        alt="${this.label}"
        loading="${this.loading}" 
        fetchPriority="${this.fetchPriority}"
        />
    </div>
    `;
  }


 // Static method to define HAX properties for the component
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}
// Define the custom element in the global scope
globalThis.customElements.define(unSdg.tag, unSdg);