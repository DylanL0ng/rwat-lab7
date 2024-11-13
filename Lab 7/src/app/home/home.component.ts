import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemListing } from "../item-listing";
import { ItemService } from "../item.service";
import { ItemListingComponent } from "../item-listing/item-listing.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ItemListingComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-item-listing
        *ngFor="let itemListing of filteredLocationList"
        [itemListing]="itemListing"
      ></app-item-listing>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: ItemListing[] = [];
  itemService: ItemService = inject(ItemService);
  filteredLocationList: ItemListing[] = [];

  constructor() {
    this.itemService
      .getAllItems()
      .then((housingLocationList: ItemListing[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((itemListing) =>
      itemListing?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
