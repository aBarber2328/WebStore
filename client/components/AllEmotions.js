import React from "react";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEmotions, setEmotions } from "../store/allEmotions";
import { fetchUserById } from "../store/allUsers";
import { fetchSingleEmotion } from "../store/singleEmotion";
import { assignOrderSingleEmotion } from "../store/singleOrderEmotionData";
import { fetchUserCart } from "../store/singleOrder";
import { fetchSingleOrderEmotionData } from "../store/singleOrderEmotionData";
import { addEmotionToCart } from "../store/singleOrderEmotionData";
import EmotionNav from "./EmotionNav";

const AllEmotions = (props) => {
  const dispatch = useDispatch();
  const emotions = props.emotions;
  const userId = props.auth.id;
  const singleOrderEmotionData = props.singleOrderEmotionData;
  let cart = props.singleOrder.id;
  let singleEmotion = props.singleEmotion;
  let userCart;
  console.log(userId);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchEmotions());
    }

    fetchData();
  }, []);

  async function handleAddToCart(event) {
    const emotionId = event.target.id;
    await dispatch(fetchSingleEmotion(emotionId));
    // await dispatch(fetchUserCart(userId));
    // console.log(userCart);
    await dispatch(assignOrderSingleEmotion(props.singleOrder.id, emotionId));

    await dispatch(fetchSingleOrderEmotionData(cart.id));
  }
  console.log(props, "line40 Props");
  return (
    <div>
      <EmotionNav />
      <div className="displayAll">
        {emotions.map((emotion) => (
          <div className="singleItem" key={emotion.id}>
            <div>
              <div className="price">Price: ${emotion.price}</div>
              <div className="emotionImages">
                <Link to={`/emotions/${emotion.id}`}>
                  <div>{<img src={emotion.imageURL} />}</div>
                </Link>
              </div>
              <div className="fontSize">{emotion.name}</div>

              <div className="allProButtons">
                <div>
                  <button
                    id={emotion.id}
                    name={emotion.name}
                    type="button"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button>Special Offers</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    emotions: state.emotions,
    auth: state.auth,
    singleOrder: state.singleOrder,
    singleEmotion: state.singleEmotion,
    singleOrderEmotionData: state.singleOrderEmotionData,
    state: state,
  };
};

export default connect(mapStateToProps)(AllEmotions);
