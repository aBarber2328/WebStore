import React, { useState, useEffect } from "react";
import axios from "axios";


const UserCart = (props) => {

  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/cart");
      setCart(data);
    })();
  }, []);
  console.log(cart);
  // componentDidMount() {
  //   try {
  //     const userId = this.props.UserId;
  //     this.props.loadUserCart(userId);
  //     this.props.getAllEmotions();
  //     const cartId = this.props.userCart.id;
  //     this.props.loadSingleOrderEmotionData(cartId);
  //     // console.log(this.props);
  //   } catch (error) {}
  // }

  // componentDidUpdate(prevProps) {
  //   // this if statement is a infinit loop
  //   if (this.props.loadUserCart !== prevProps.loadUserCart) {
  //     const cartId = this.props.userCart.id;
  //     this.props.loadSingleOrderEmotionData(cartId);
  //   }
  // }
  // removeEmotionHandler(orderId, emotionId) {
  //   const userId = this.props.UserId;
  //   const cartId = this.props.userCart.id;
  //   this.props.unassignOrderSingleEmotion(orderId, emotionId);
  //   this.props.loadSingleOrderEmotionData(cartId);
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   const emotionId = event.target.id;
  //   const orderId = this.props.userCart.id;

  //   this.props.changeQuantity(orderId, emotionId, this.state.value);
  // }

  return (
    <div>
      <h1>Your Cart</h1>

      {/* {this.props.orderEmotionData.map((emotionData) => (
          <div key={emotionData.emotionId}>
            <h2> Emotion Name {emotions[emotionData.emotionId - 1].name}</h2>
            <h2> Emotion Quanitiy {emotionData.emotionQuantity}</h2>
            <form id={emotionData.emotionId} onSubmit={this.handleSubmit}>
              <label htmlFor="quantity"> Quanitiy</label>
              <input
                name="quantitye"
                defaultValue={emotionData.emotionQuantity}
                onChange={this.handleChange}
              />
            </form>
            <h2> Emotion Price{emotionData.emotionPriceInOrder}</h2>
            <h2>
              {" "}
              <img src={emotions[emotionData.emotionId - 1].imageURL} />
            </h2>
            <h2> Emotion Id{emotionData.emotionId}</h2>
            <button
              className="delete-button"
              onClick={() =>
                this.removeEmotionHandler(
                  emotionData.orderId,
                  emotionData.emotionId
                )
              }
            >
              Remove Emotion
            </button>
          </div>
        ))} */}
    </div>
  );
};

export default UserCart;
