/**
 * Generic types
 */
interface Image {
    id: string;
    path: string;
}

enum Currency {
    USD,
    EUR,
    CHF,
    GBP,
}

interface Price {
    amount: number;
    currency: Currency;
}

/**
 * Products
 */
interface ProductCategory {
    id: number;
    name: string;
    image: Image;
}

enum ProductType {
    FOOD,
    DRINK,
    OPTION,
}

interface Product {
    id: number;
    name: string;
    description: string;
    image: Image; // Most probably an entity from different table / collection
    type: ProductType;
    category: ProductCategory;
    availableOptions: [number];
    price: Price;
    vatRate: number;
    options: {
        min: number; // Minimum amount to be added to cart
        max: number; // Maximum amount to be added to cart
        textInput: boolean; // Makes the option a text input, could be an enum if more custom types are required in future
    };
}

/**
 * Cart
 */
interface LineItemOption {
    product?: Product;
    price: Price;
    quantity: number;
    data?: string|object // This could be a string property too, could be morphed into any shape depending on the product config
}

enum LineItemType {
    COST_ITEM,
    GRAND_TOTAL,
    MENU_ITEM,
    DISCOUNT,
}

interface LineItem {
    product?: Product;
    quantity: number;
    type: LineItemType;
    options: [LineItemOption];
}

interface Cart {
    lineItems: [LineItem];
}
