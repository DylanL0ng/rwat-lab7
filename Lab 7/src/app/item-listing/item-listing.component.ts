import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ItemListing } from "../item-listing";

@Component({
  selector: "app-item-listing",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="itemListing.photo"
        alt="Photo of {{ itemListing.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ itemListing.name }}</h2>
      <p class="listing-price">€{{ itemListing.price }}</p>
      <p class="listing-location">
        {{ itemListing.city }}, {{ itemListing.state }}
      </p>
      <a [routerLink]="['/details', itemListing.id]">Learn More</a>
    </section>
  `,
  styleUrls: ["./item-listing.component.css"],
})
export class ItemListingComponent {
  @Input() itemListing!: ItemListing;
}
