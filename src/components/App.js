import React from "react";
import { Provider } from "react-redux";

const App = () => {
  //action generator
  const createPolicy = (name, amount) => {
    return {
      type: "CREATE_POLICY",
      payload: {
        name,
        amount,
      },
    };
  };
  //action generator
  const createClaim = (name, amount) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name,
        amount,
      },
    };
  };

  // action generator
  const deletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: {
        name,
      },
    };
  };

  //reducer (departmans) its take(oldList-store,form-action) return new data

  const claimsHistory = (oldLisOfClaims = [], action) => {
    switch (action.type) {
      case "CREATE_CLAIM":
        return [...oldLisOfClaims, action.payload];
      default:
        return oldLisOfClaims;
    }
  };

  const accounting = (bagOfMoney = 100, action) => {
    switch (action.type) {
      case "CREATE_POLICY":
        return bagOfMoney + action.payload.amount;
      case "CREATE_CLAIM":
        return bagOfMoney - action.payload.amount;
      default:
        return bagOfMoney;
    }
  };

  const policies = (oldListPolicies = [], action) => {
    switch (action.type) {
      case "CREATE_POLICY":
        return [...oldListPolicies, action.payload.name];
      case "DELETE_POLICY":
        return oldListPolicies.filter((name) => !name === action.payload.name);
      default:
        return oldListPolicies;
    }
  };
  console.log(createPolicy("shenay", 20));

  console.log(Redux);

  return (
    <div>
      <h1>appp</h1>
    </div>
  );
};

export default App;
