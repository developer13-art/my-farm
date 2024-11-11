
// Nationality data
const nationalities = {
  "Nigeria": {
    "states": ["Abia", "Adamawa", "Akwai ibon", "Ananbra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross river", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateu", "River", "Sokoto", "Taraba", "Yobe", "Zanfara", "Abuja"],
    "localGovernments": {
      "Abia": ["Web Developer"],
      "Adamawa": [],
      "Ananbra": [],
      "Bauchi": [],
      "Bayelsa": [],
      "Benue": [],
      "Borno": [],
      "Cross river": [],
      "Delta": [], 
      "Ebonyi": [], 
      "Edo": [], 
      "Ekiti": [], 
      "Enugu": [], 
      "Gombe": [], 
      "Imo": [], 
      "Jigawa": [], 
      "Kaduna": [], 
      "Kano": [], 
      "Kastina": [], 
      "Kebbi": [], 
      "Kogi": [], 
      "Kwara": [], 
      "Lagos": [], 
      "Nasarawa": [], 
      "Niger": [], 
      "Ogun": [], 
      "Ondo": [], 
      "Osun": [], 
      "Oyo": [], 
      "Plateu": [], 
      "River": [], 
      "Sokoto": [], 
      "Taraba": [], 
      "Yobe": [], 
      "Zanfara": [], 
      "Abuja": []
    }
  },
  "American": {
    "states": ["Alabama", "California", "New York"],
    "localGovernments": {
      "Alabama": ["Birmingham", "Montgomery"],
      "California": ["Los Angeles", "San Francisco"],
      "New York": ["New York City", "Buffalo"]
    }
  },
  "Indian": {
    "states": ["Andhra Pradesh", "Maharashtra", "Uttar Pradesh"],
    "localGovernments": {
      "Andhra Pradesh": ["Visakhapatnam", "Vijayawada"],
      "Maharashtra": ["Mumbai", "Pune"],
      "Uttar Pradesh": ["Lucknow", "Kanpur"]
    }
  }
};

// Function to update state options based on nationality
function updateStates() {
  const nationality = document.getElementById("nationality").value;
  const stateSelect = document.getElementById("state");
  stateSelect.innerHTML = "<option value=''>Select State</option>";
  nationalities[nationality].states.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
}

// Function to update local government options based on state
function updateLocalGovernments() {
  const nationality = document.getElementById("nationality").value;
  const state = document.getElementById("state").value;
  const localGovernmentSelect = document.getElementById("local-government");
  localGovernmentSelect.innerHTML = "<option value=''>Select Local Government</option>";
  nationalities[nationality].localGovernments[state].forEach((localGovernment) => {
    const option = document.createElement("option");
    option.value = localGovernment;
    option.textContent = localGovernment;
    localGovernmentSelect.appendChild(option);
  });
}