import HealthPotion from "../assets/HealthPotion.png";
import ManaPotion from "../assets/ManaPotion.png";
import Herb from "../assets/Herb.png";
import Copper from "../assets/Copper.png";
import Silver from "../assets/Silver.png";
import Gold from "../assets/Gold.png";

import StrengthPotion from "../assets/StrengthPotion.png";
import Bow1 from "../assets/Bow1.png";
import Bow2 from "../assets/Bow2.png";
import Crossbow1 from "../assets/Crossbow1.png";
import Crossbow2 from "../assets/Crossbow2.png";
import Arrows from "../assets/Arrows.png";
import Ruby from "../assets/Ruby.png";
import Emerald from "../assets/Emerald.png";
import GemPowder from "../assets/GemPowder.png";
import Oil from "../assets/Oil.png";
import Salt from "../assets/Salt.png";
import DragonsEye from "../assets/DragonsEye.png";
import DragonsBlood from "../assets/DragonsBlood.png";


const shopItems = [

    /* Functions:
    id: Keep track of the item ID
    name: Name of the item
    image: default image of the item, imported at top
     |- Can be overridden in buttons, by using image (for different types of items)
    toRemove: Lowest value of removing an item from cart, default to 1
    specMeasurement: Displays special value for items with measurements
    buttons: Shop buttons for adding different types of same item
        helpText: Text that goes inside the button in the shop
        label: Helper text that identifies different objects of the same type
        displayedPrice: Price displayed in the shop button
        pricePer: Individual price of each item, used to calculate price
        quantity: How many of the item gets added to cart
        cartKey: position that it shows up in the cart. Same cart keys stack items
    */
    { 
        id: 1, 
        name: "Health Potion", 
        image: HealthPotion,
        buttons: [
            { helpText: "Add Small", label: "(Small)", displayedPrice: 30, pricePer: 30, quantity: 1, cartKey: 1 },
            { helpText: "Add Large", label: "(Large)", displayedPrice: 50, pricePer: 50, quantity: 1, cartKey: 2 },
        ]
    },
    { 
        id: 2, 
        name: "Mana Potion", 
        image: ManaPotion,
        buttons: [
        { helpText: "Add Small", label: "(Small)", displayedPrice: 20, pricePer: 20, quantity: 1, cartKey: 3 },
        { helpText: "Add Large", label: "(Large)", displayedPrice: 40, pricePer: 40, quantity: 1, cartKey: 4 },
        ]
    },
    {
        id: 3, 
        name: "Strength Potion", 
        image: StrengthPotion,
        buttons: [
        { helpText: "Add Small", label: "(Small)", displayedPrice: 80, pricePer: 80, quantity: 1, cartKey: 5 },
        { helpText: "Add Large", label: "(Large)", displayedPrice: 130, pricePer: 130, quantity: 1, cartKey: 6 },
        ]
    },
    {
        id: 4, 
        name: "Oil", 
        image: Oil,
        toRemove: 250,
        specMeasurement: "ml",
        buttons: [
            { helpText: "250 ml", label: "", displayedPrice: 50, pricePer: .2, quantity: 250, cartKey: 7 },
        { helpText: "500 ml", label: "", displayedPrice: 100, pricePer: .2, quantity: 500, cartKey: 7 },
        { helpText: "1 L", label: "", displayedPrice: 200, pricePer: .2, quantity: 1000, cartKey: 7 },
        ]
    },
    {
        id: 4, 
        name: "Herb", 
        image: Herb,
        buttons: [
        { helpText: "Add One", label: "", displayedPrice: 5, pricePer: 5, quantity: 1, cartKey: 8 },
        { helpText: "Add Ten", label: "", displayedPrice: 45, pricePer: 5, quantity: 10, cartKey: 8 },
        ]
    },
    {
        id: 5,
        name: "Salt",
        image: Salt,
        toRemove: 5,
        specMeasurement: "oz.",
        buttons: [
            { helpText: "5 oz.", label: "", displayedPrice: 15, pricePer: 3, quantity: 5, cartKey: 9 },
            { helpText: "25 oz.", label: "", displayedPrice: 75, pricePer: 3, quantity: 25, cartKey: 9 },
            { helpText: "50 oz.", label: "", displayedPrice: 150, pricePer: 3, quantity: 50, cartKey: 9 },
        ]
    },
    {
        id: 6,
        name: "Bow",
        image: Bow1,
        buttons: [
            { helpText: "Short Bow", label: "(Low Quality)", displayedPrice: 300, pricePer: 300, quantity: 1, cartKey: 10, image: Bow1 },
            { helpText: "Refined Bow", label: "(High Quality)", displayedPrice: 855, pricePer: 855, quantity: 1, cartKey: 11, image: Bow2 },
        ]
    },
    {
        id: 7,
        name: "Crossbow",
        image: Crossbow2,
        buttons: [
            { helpText: "Wooden Crossbow", label: "(Wooden)", displayedPrice: 900, pricePer: 900, quantity: 1, cartKey: 12, image: Crossbow1 },
            { helpText: "Metal Crossbow", label: "(Metal)", displayedPrice: 1480, pricePer: 1480, quantity: 1, cartKey: 13, image: Crossbow2 },
        ]
    },
    {
        id: 8,
        name: "Arrows",
        image: Arrows,
        toRemove: 25,
        buttons: [
            { helpText: "Add 25", label: "", displayedPrice: 50, pricePer: 2, quantity: 25, cartKey: 14 },
            { helpText: "Add 50", label: "", displayedPrice: 100, pricePer: 2, quantity: 50, cartKey: 14 },
            { helpText: "Add 100", label: "", displayedPrice: 200, pricePer: 2, quantity: 100, cartKey: 14 },
        ]
    },
    {
        id: 9,
        name: "Ruby",
        image: Ruby,
        buttons: [
            { helpText: "Add One", label: "", displayedPrice: 950, pricePer: 950, quantity: 1, cartKey: 15 },
            { helpText: "Add Three", label: "", displayedPrice: 2375, pricePer: 950, quantity: 3, cartKey: 15 },
        ]
    },
    {
        id: 10,
        name: "Emerald",
        image: Emerald,
        buttons: [
            { helpText: "Add One", label: "", displayedPrice: 600, pricePer: 600, quantity: 1, cartKey: 16 },
            { helpText: "Add Three", label: "", displayedPrice: 1500, pricePer: 600, quantity: 3, cartKey: 16 },
        ]
    },
    {
        id: 11,
        name: "Gem Powder",
        image: GemPowder,
        toRemove: 3,
        specMeasurement: "g",
        buttons: [
            { helpText: "3 g", label: "", displayedPrice: 90, pricePer: 30, quantity: 3, cartKey: 17 },
            { helpText: "15 g", label: "", displayedPrice: 450, pricePer: 30, quantity: 15, cartKey: 17 },
            { helpText: "30 g", label: "", displayedPrice: 900, pricePer: 30, quantity: 30, cartKey: 17 },
        ]
    },
    {
        id: 12,
        name: "Dragon's Eye",
        image: DragonsEye,
        buttons: [
            { helpText: "Add One", label: "", displayedPrice: 2222, pricePer: 2222, quantity: 1, cartKey: 18 },
        ]
    },
    {
        id: 13,
        name: "Dragon's Blood",
        image: DragonsBlood,
        toRemove: 100,
        specMeasurement: "ml",
        buttons: [
            { helpText: "100 ml", label: "", displayedPrice: 1300, pricePer: 13, quantity: 100, cartKey: 19 },
        ]
    }
];

// Calcuate price function (apply disccouonts too)
const calculatePrice = (item) => {
    let gross = item.pricePer * item.quantity;
    // Apply discount to item Herb (10 for the price of 9)
    if (item.name === "Herb"){
        const discount = Math.floor(item.quantity / 10) * 5;
        gross -= discount;
    }
    // Apply discount to Ruby and Emerald (Buy 2 get next half off)
    if (item.name === "Ruby" || item.name === "Emerald") {
        const discount = Math.floor(item.quantity / 3) * (item.pricePer / 2);
        gross -= discount;
    }
    // Apply discount to Gem Powder (1 silver off if you buy 40g or more)
    if (item.name === "Gem Powder" && item.quantity >= 40) {
        const discount = Math.floor(item.quantity / 40) * 100;
        if (discount >= 100){
            gross -= 100;
        }
    }
    return gross;
}

// Turns base copper price into gold and silver values
const formatPrice = (copper) => {
    const gold = Math.floor(copper / (100 * 100));
    const silver = Math.floor(copper % (100 * 100) / 100);
    const remainingCopper = copper % 100;

    return (
        <>
            {gold > 0 && <span>{gold} <img src={Gold} style={{ width: "15px", height: "15px", objectFit: "contain" }} /> </span>}
            {silver > 0 && <span>{silver} <img src={Silver} style={{ width: "15px", height: "15px", objectFit: "contain" }} /> </span>}
            {remainingCopper > 0 && <span>{remainingCopper} <img src={Copper} style={{ width: "15px", height: "15px", objectFit: "contain" }} /> </span>}
        </>
    );
}

const ShopBox = ({ type, cartItems, cartKeys, addToCart, removeOne, removeAll, onCheckout }) => {
    const title = type === "shop" ? "Shop" : "Cart";

    const total = cartItems ? cartItems.reduce((sum, item) => sum + calculatePrice(item), 0) : 0;

    return (

        <div className="box">
            <h2 className="semi-title">{title}</h2>
            {/* Shop box */}
            {type === "shop" && shopItems.map((item, index) => (
                <div key={index} className="internal-box">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={item.image} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <p className="text">{item.name}</p>
                        </div>
                        {item.buttons.map((btn, btnIndex) => (
                            <button key={btnIndex} onClick={() => addToCart({ ...item, pricePer: btn.pricePer, label: btn.label, quantity: btn.quantity, cartKey: btn.cartKey, image: btn.image || item.image })}>
                                {btn.helpText} - {formatPrice(btn.displayedPrice)}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

{/* Cart box */}
    {type === "cart" && 
        <div style={{ flex: 1, overflowY: "auto" }}>
            {cartItems.map((item, index) => (
                <div key={cartKeys[index]} className="internal-box">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={item.image} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <p className="text">{item.name} {item.label} x{item.quantity} {item.specMeasurement}</p>
                        </div>
                        <div>
                            <p className="text">{formatPrice(calculatePrice(item))}</p>
                        </div>
                        <button onClick={() => removeOne(cartKeys[index], item.toRemove)}>Remove {item.toRemove || 1} {item.specMeasurement}</button>
                        <button onClick={() => removeAll(cartKeys[index])}>Remove All</button>
                    </div>
                </div>
            ))}
        </div>
    }
    {type === "cart" && (
        <div className="checkout-box" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <p className="semi-title">Total: {formatPrice(total)}</p>
            <button className="semi-title" onClick={onCheckout}>Checkout</button>
        </div>
    )}
    </div>
  );
};

export default ShopBox;