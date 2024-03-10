function calculateIncentive() {
    const salesInput = document.getElementById('salesInput').value;
    let incentive = 0;

    if (salesInput >= 50000) {
        incentive = 0.05;
        displayResult(incentive, "Eligible for a Luxury holiday package");
    } else if (salesInput >= 30000) {
        incentive = 0.035;
        displayResult(incentive, "$1000 bonus and Premium Holiday Package");
    } else if (salesInput >= 20000) {
        incentive = 0.03;
        displayResult(incentive, "Standard Holiday Package");
    } else if (salesInput >= 10000) {
        incentive = 0.015;
        displayResult(incentive,"Basic Holiday Package");
    } else {
        displayResult(incentive);
    }
}

function displayResult(incentive, bonus = "") {
    const resultDiv = document.getElementById('result');
    let message = "Incentive: " + (incentive * 100) + "%";
    if (bonus !== "") {
        message += " + " + bonus;
    }
    resultDiv.textContent = message;
}





// ------------------------------------------------------------------------------------------------------------//






function calculateIncentiveAndPackage() {
    const salesInput = document.getElementById('salesInput').value;
    let incentive = 0;

    if (salesInput >= 50000) {
        incentive = 0.05;
        holidayPackage = 'Luxury Holiday Package';
    } else if (salesInput >= 30000) {
        incentive = 0.035;
        holidayPackage = 'Premium Holiday Package';
    } else if (salesInput >= 20000) {
        incentive = 0.03;
        holidayPackage = 'Standard Holiday Package';
    } else if (salesInput >= 10000) {
        incentive = 0.015;
        holidayPackage = 'Basic Holiday Package';
    }

    displayResult(incentive, holidayPackage);
}

function displayResult(incentive, holidayPackage) {
    const resultDiv = document.getElementById('result');
    let message = "Incentive: " + (incentive * 100) + "%";
    if (holidayPackage !== "") {
        message += "<br>Selected Holiday Package: " + holidayPackage;
    }
    resultDiv.innerHTML = message;
}

