function payNow(amount) {
  const customerName = prompt("Please enter your name:");
  const customerEmail = prompt("Please enter your email:");
  const customerPhone = prompt("Please enter your phone number:");

  var options = {
    "key": "rzp_test_3HD1hXPVTCogTQ",
    "amount": amount,
    "currency": "INR",
    "name": "Pizza Shop",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "handler": function (response) {
      alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
    },
    "prefill": {
      "name": customerName,
      "email": customerEmail,
      "contact": customerPhone
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();

  rzp1.on('payment.failed', function (response) {
    alert("Payment failed. Error: " + response.error.description);
    alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
  });
}
