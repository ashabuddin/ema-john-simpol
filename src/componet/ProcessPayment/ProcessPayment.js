import React from 'react';
import {  Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie20cBOgOIGQSKC359hDC1ojRLDAY4kUUUQpuOeqkglbYg435pplG0x5G4l3WBiv2lve1cH2pm5wtvvlcC6WeH300BjBTU9WY');


const ProcessPayment = ({handlePayment}) => {
    return (
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
            </Elements>
    );
};

export default ProcessPayment;