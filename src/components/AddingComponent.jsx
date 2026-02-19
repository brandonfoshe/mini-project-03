import HealthPotion from "../assets/HealthPotion.png";
// import ManaPotion from "../assets/ManaPotion.png";
import Herb from "../assets/Herb.png";
import Copper from "../assets/Copper.png";
import Silver from "../assets/Silver.png";
import Gold from "../assets/Gold.png";


const shopItems = [
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
        image: "",
        buttons: [
        { helpText: "Add Small", label: "(Small)", displayedPrice: 20, pricePer: 20, quantity: 1, cartKey: 3 },
        { helpText: "Add Large", label: "(Large)", displayedPrice: 40, pricePer: 40, quantity: 1, cartKey: 4 },
        ]
    },
    {
        id: 3, 
        name: "Herb", 
        image: Herb,
        buttons: [
        { helpText: "Add One", label: "", displayedPrice: 5, pricePer: 5, quantity: 1, cartKey: 5 },
        { helpText: "Add Ten", label: "", displayedPrice: 45, pricePer: 5, quantity: 10, cartKey: 5 },
        ]
    },
];

// Calcuate price function (apply disccouonts too)
const calculatePrice = (item) => {
    let gross = item.pricePer * item.quantity;
    // Apply discount to item Herb (10 for the price of 9)
    if (item.name === "Herb"){
        const discount = Math.floor(item.quantity / 10) * 5;
        gross -= discount;
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
                            <button key={btnIndex} onClick={() => addToCart({ ...item, pricePer: btn.pricePer, label: btn.label, quantity: btn.quantity, cartKey: btn.cartKey })}>
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
                            <p className="text">{item.name} {item.label} x{item.quantity}</p>
                        </div>
                        <div>
                            <p className="text">{formatPrice(calculatePrice(item))}</p>
                        </div>
                        <button onClick={() => removeOne(cartKeys[index])}>Remove One</button>
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