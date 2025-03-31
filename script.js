const locations = {
  "Hazratganj": { famousFood: "Tunday Kababi", places: "British Residency, Begum Hazrat Mahal Park", metro: true, autoFare: 30, busFare: 10 },
  "Bara Imambara": { famousFood: "Rahim Nihari Kulcha", places: "Rumi Darwaza, Chota Imambara", metro: false, autoFare: 50, busFare: 15 },
  "Aminabad": { famousFood: "Prakash Kulfi", places: "Tunday Kababi, Nakhas Market", metro: true, autoFare: 40, busFare: 12 },           
   "Chota Imambara": { famousFood: "Prakash Kulfi", places: "Tunday Kababi, Nakhas Market", metro: true, autoFare: 40, busFare: 12 },
  "Rumi Darwaza": { famousFood: "Prakash Kulfi", places: "Tunday Kababi, Nakhas Market", metro: true, autoFare: 40, busFare: 12 },
  "Chowk Market": { famousFood: "Prakash Kulfi", places: "Tunday Kababi, Nakhas Market", metro: true, autoFare: 40, busFare: 12 },
  "Gomti Riverfront Park": { famousFood: "Prakash Kulfi", places: "Tunday Kababi, Nakhas Market", metro: true, autoFare: 40, busFare: 12 },
  "Ambedkar Memorial Park": { famousFood: "Prakash Kulfi", places: "Tunday Kababi, Nakhas Market", metro: true, autoFare: 40, busFare: 12 },
  

};

function sendMessage() {
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const chatLog = document.getElementById("chat-log");

  chatLog.innerHTML += `<p><strong>You:</strong> From ${pickup} to ${drop}</p>`;

  if (locations[pickup] && locations[drop]) {
      const pickupDetails = locations[pickup];
      const dropDetails = locations[drop];

      let response = `<strong>✅ Route Details:</strong><br>From ${pickup} to ${drop}<br><br>`;
      response += `🍴 <strong>Famous Food in ${pickup}:</strong> ${pickupDetails.famousFood}<br>`;
      response += `🍴 <strong>Famous Food in ${drop}:</strong> ${dropDetails.famousFood}<br><br>`;
      response += `🏙️ <strong>Places in ${pickup}:</strong> ${pickupDetails.places}<br>`;
      response += `🏙️ <strong>Places in ${drop}:</strong> ${dropDetails.places}<br><br>`;
      response += `🚇 <strong>Metro Availability:</strong> ${pickupDetails.metro ? "Available" : "Not Available"} in ${pickup}<br>`;
      response += `🚇 <strong>Metro Availability:</strong> ${dropDetails.metro ? "Available" : "Not Available"} in ${drop}<br><br>`;
      response += `🛺 <strong>Auto Fare:</strong> ₹${pickupDetails.autoFare} - ₹${dropDetails.autoFare}<br>`;
      response += `🚌 <strong>Bus Fare:</strong> ₹${pickupDetails.busFare} - ₹${dropDetails.busFare}<br><br>`;
      response += `🚖 <strong>Book a Ride:</strong> <a href="https://www.olacabs.com/" target="_blank">Ola</a> | <a href="https://www.uber.com/" target="_blank">Uber</a> | <a href="https://www.rapido.bike/" target="_blank">Rapido</a><br>`;

      chatLog.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
  } else {
      chatLog.innerHTML += `<p><strong>Bot:</strong> Sorry, I don't have details for the route ${pickup} to ${drop}.</p>`;
  }

  chatLog.scrollTop = chatLog.scrollHeight;
}
