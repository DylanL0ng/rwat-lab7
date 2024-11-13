import { Injectable } from "@angular/core";
import { ItemListing } from "./item-listing";
@Injectable({
  providedIn: "root",
})
export class ItemService {
  url = "http://localhost:3000/items";
  async getAllItems(): Promise<ItemListing[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getItemById(id: number): Promise<ItemListing | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
