import React from 'react';
import ReactDoM from 'react-dom';
import InternetServiceCard from './InternetServiceCard';


function App() {
  const plans = [
    {
      planName: "Basic Plan",
      price: "$0/month",
      speed: "Up to 100 Mbps",
      features: [
        { text: "Single user", enabled: true },
        { text: "50GB storage", enabled: true },
        { text: "Unlimited public projects", enabled: true },
        { text: "Community access", enabled: true },
        { text: "Unlimited private projects", enabled: false },
        { text: "Dedicated phone support", enabled: false },
        { text: "Free sub domain", enabled: false },
        { text: "Monthly status report", enabled: false }
      ],
      buttonText: "Subscribe"
    },
    {
      planName: "Pro Plan",
      price: "$10/month",
      speed: "Up to 500 Mbps",
      features: [
        { text: "Single user", enabled: true },
        { text: "50GB storage", enabled: true },
        { text: "Unlimited public projects", enabled: true },
        { text: "Community access", enabled: true },
        { text: "Unlimited private projects", enabled: true },
        { text: "Dedicated phone support", enabled: false },
        { text: "Free sub domain", enabled: false },
        { text: "Monthly status report", enabled: false }
      ],
      buttonText: "Subscribe"
    },
    {
      planName: "Premium Plan",
      price: "$49/month",
      speed: "Up to 1 Gbps",
      features: [
        { text: "Single user", enabled: true },
        { text: "50GB storage", enabled: true },
        { text: "Unlimited public projects", enabled: true },
        { text: "Community access", enabled: true },
        { text: "Unlimited private projects", enabled: true },
        { text: "Dedicated phone support", enabled: true },
        { text: "Free sub domain", enabled: true },
        { text: "Monthly status report", enabled: true }
      ],
      buttonText: "Subscribe"
    }
  ];

  return (
    <div className="App">
      <div className="react-pricecard">
        <div className="container">
            <h1 class="text-center mb-5">Internet Service Plans</h1>
          <div className="price-cards row">
            {plans.map((plan, index) => (
              <InternetServiceCard
                key={index}
                planName={plan.planName}
                price={plan.price}
                speed={plan.speed}
                features={plan.features}
                buttonText={plan.buttonText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
