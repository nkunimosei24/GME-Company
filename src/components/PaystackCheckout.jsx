import React from 'react';
import { PaystackButton } from 'react-paystack';
import Swal from 'sweetalert2';

const PaystackCheckout = ({ email, amount, productName }) => {
  const publicKey = 'pk_live_1eedb5e5e44b7d7404dcdd0707c09e5a8ff3a171';

  const handleSuccess = (ref) => {
    Swal.fire({
      title: 'Payment Successful!',
      text: `Thank you for your purchase. Ref: ${ref.reference}`,
      icon: 'success',
      confirmButtonText: 'Close'
    });
  };

  const handleClose = () => {
    Swal.fire({
      icon: 'info',
      title: 'Payment Cancelled',
      text: 'You closed the checkout without completing the payment.',
      confirmButtonColor: '#d33',
    });
  };

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    currency: 'GHS',
    metadata: {
      product_name: productName,
    },
    text: 'Checkout Now',
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return (
    <div className="mt-4">
      <PaystackButton
        {...componentProps}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      />
    </div>
  );
};

export default PaystackCheckout;
