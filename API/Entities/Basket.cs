namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();
        public void AddItem(Product product, int quantity)
        {
            // if the item is not already in the basket, add it
            if (Items.All(item => item.Product.Id != product.Id))
            {
                Items.Add(new BasketItem{Product = product, Quantity = quantity});
            }

            // if the item is already in the basket, update the quantity
            var existingItem = Items.FirstOrDefault(item => item.Product.Id == product.Id);
            
            if (existingItem!= null) existingItem.Quantity += quantity;
        }
        public void RemoveItem(int productId, int quantity)
        // get the item to remove
        {
            var item = Items.FirstOrDefault(item => item.Product.Id == productId);

            if (item == null) return;

            item.Quantity -= quantity;
            // if the item quantity is zero, remove it
            if (item.Quantity == 0) Items.Remove(item);
        }
    }
}