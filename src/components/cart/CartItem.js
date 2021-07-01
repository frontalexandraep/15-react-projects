import { useGlobalContext } from "../../context/context";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart__item">
      <img src={img} alt={title} />
      <div className="cart__item__info">
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => console.log("remove")}>
          Remove
        </button>
      </div>
      <div className="cart__item__amount">
        <button className="amount-btn" onClick={() => console.log("increase")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">1</p>
        <button className="amount-btn" onClick={() => console.log("decrease")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;