class ClothingShop {
  constructor(price) {
    this.price = price;
    this.item = [];
  }

  Inventory(items = null) {
    const itemName = items;
    const price = this.price;
    const itemAmount = this.itemAmount;
    if (items !== null) {
      this.item.push({ items: items, price: price, itemAmount: itemAmount });
    }
  }
}

class Clothes extends ClothingShop {
  constructor(price, itemAmount) {
    super(price);
    this.itemAmount = itemAmount;
  }
}

class Snacks extends ClothingShop {
  constructor(price, itemAmount) {
    super(price);
    this.itemAmount = itemAmount;
  }
}

const fallSweaters = new Clothes();
fallSweaters.price = 18.29;
fallSweaters.itemAmount = 42;
fallSweaters.item;
fallSweaters.Inventory("sweaters");

console.log(fallSweaters);

const food = new Snacks();
food.price = 4.49;
food.itemAmount = 62;
food.item;
food.Inventory("food");

console.log(food);