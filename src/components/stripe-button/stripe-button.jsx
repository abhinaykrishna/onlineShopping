import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePaymentAmount = price * 100;
  const publishableKey =
    "pk_test_51J2BswSBgYSkdvDKccLxbvXzj23i9fGdYzLnXjC1vGxGf6ZcGnylAbjovJeBHGOlx8rQhetJrNR1k7u2zt8nsy9h00S8SYSLfx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="The Full Cart Pvt Ltd."
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ₹${price}`}
      amount={stripePaymentAmount}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeCheckoutButton;
