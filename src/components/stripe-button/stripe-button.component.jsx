import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8yqpCXwoVOwgXp95ee6DNQPg';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd'
        shippingAddress
        billingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
         />
    )
}

export default StripeCheckoutButton;