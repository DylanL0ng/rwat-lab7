import { Injectable } from "@angular/core";
import { ItemListing } from "./item-listing";
@Injectable({
  providedIn: "root",
})
export class ItemService {
  url = "http://localhost:3000/items";
  async getAllItems(): Promise<ItemListing[]> {
    return [
      {
        id: 0,
        name: "Vintage Coffee Table",
        city: "Chicago",
        state: "IL",
        photo:
          "https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Beautifully crafted wood coffee table with a rustic charm. Some wear adds character. Perfect for any living room.",
        price: 75,
      },
      {
        id: 1,
        name: "Leather Sofa Set",
        city: "Santa Monica",
        state: "CA",
        photo:
          "https://images.unsplash.com/photo-1615049758015-25ce6b4e1562?q=80&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Three-piece leather sofa set in good condition. Minor scuffs on the edges, but still very comfortable.",
        price: 300,
      },
      {
        id: 2,
        name: "Antique Bookshelf",
        city: "Juneau",
        state: "AK",
        photo:
          "https://images.unsplash.com/photo-1716329106544-612b35aa9f8e?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Tall wooden bookshelf with multiple shelves. Aged wood gives it a classic look. Great for any office or study.",
        price: 120,
      },
      {
        id: 3,
        name: "Solid Oak Dining Table",
        city: "Chicago",
        state: "IL",
        photo:
          "https://plus.unsplash.com/premium_photo-1664457233897-53a66b68f959?q=80&w=2721&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Large oak dining table that seats up to 8 people. Perfect for family dinners. Has a few scratches but very sturdy.",
        price: 200,
      },
      {
        id: 4,
        name: "Modern Floor Lamp",
        city: "Gary",
        state: "IN",
        photo:
          "https://plus.unsplash.com/premium_photo-1680902523071-5e36c408f385?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Sleek, adjustable floor lamp in perfect working condition. Adds a modern touch to any room.",
        price: 45,
      },
      {
        id: 5,
        name: "Compact Desk Chair",
        city: "Oakland",
        state: "CA",
        photo:
          "https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Comfortable and adjustable desk chair, ideal for long work sessions. Minor scratches but still fully functional.",
        price: 60,
      },
      {
        id: 6,
        name: "Kitchen Appliance Set",
        city: "Oakland",
        state: "CA",
        photo:
          "https://images.unsplash.com/photo-1713164394509-79e8c579c860?q=80&w=2939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Includes a blender, toaster, and coffee maker. All items in great working condition and very clean.",
        price: 80,
      },
      {
        id: 7,
        name: "Rugged Mountain Bike",
        city: "Oakland",
        state: "CA",
        photo:
          "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Durable mountain bike for off-road adventures. Recently tuned up and ready for trails.",
        price: 150,
      },
      {
        id: 8,
        name: "Decorative Wall Mirror",
        city: "Oakland",
        state: "CA",
        photo:
          "https://images.unsplash.com/photo-1719861552297-97ff328cc134?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Large wall mirror with a beautiful ornate frame. Adds elegance to any room.",
        price: 40,
      },
      {
        id: 9,
        name: "Wooden Dresser",
        city: "Portland",
        state: "OR",
        photo:
          "https://images.unsplash.com/photo-1666958804809-ef2e95bdf75c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Solid wood dresser with six spacious drawers. Has a few minor scuffs but still very sturdy.",
        price: 110,
      },
    ];
  }
  async getItemById(id: number): Promise<ItemListing | undefined> {
    const data = (await this.getAllItems()).filter((x) => x.id === id)[0];
    return data;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
