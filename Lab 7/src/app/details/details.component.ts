import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ItemListing } from "../item-listing";
import { ItemService } from "../item.service";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="itemListing?.photo"
        alt="Photo of {{ itemListing?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ itemListing?.name }}</h2>
        <p>€{{ itemListing?.price }}</p>
        <p>
          {{ itemListing?.description }}
        </p>
        <p class="listing-location">
          {{ itemListing?.city }}, {{ itemListing?.state }}
        </p>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Request the Item</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Request</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: `./details.component.css`,
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  itemService = inject(ItemService);
  itemListing: ItemListing | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const itemListingId = parseInt(this.route.snapshot.params["id"], 10);
    this.itemService.getItemById(itemListingId).then((itemListing) => {
      this.itemListing = itemListing;
    });
  }

  submitApplication() {
    this.itemService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
