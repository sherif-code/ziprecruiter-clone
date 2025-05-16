//salary calculator

/*function calculateSalary() {
  const hours = document.getElementById("hours").value;
  const days = document.getElementById("days").value;
  const rate = document.getElementById("rate").value;
  const hoursPerWeek = document.getElementById("hourPerWeek").value;

  // Ensure that all inputs are filled in and valid
  if (hours && days && rate && hoursPerWeek) {
    // Calculate weekly salary
    const weeklySalary = hours * days * rate;

    // Calculate monthly salary based on hours per week
    const monthlySalary = weeklySalary * (hoursPerWeek / 7) * 4; // assuming 4 weeks in a month

    // Display the result
    document.getElementById("result").textContent =
      "Monthly salary is GH " + monthlySalary.toFixed(2) + " cedis";
  } else {
    // If inputs are not valid, show an error message
    document.getElementById("result").textContent =
      "Please enter valid numbers for all fields.";
  }
}*/



  function calculateSalary() {
    // Get input values
    const hoursPerDay = parseFloat(document.getElementById("hours").value);
    const daysPerWeek = parseFloat(document.getElementById("days").value);
    const hourlyRate = parseFloat(document.getElementById("rate").value);

    // Validate inputs
    if (isNaN(hoursPerDay) || isNaN(daysPerWeek) || isNaN(hourlyRate)) {
      document.getElementById("result").innerText = "Please fill in all fields correctly.";
      return;
    }

    // Calculate weekly and monthly salary
    const totalHoursPerWeek = hoursPerDay * daysPerWeek;
    const weeklySalary = totalHoursPerWeek * hourlyRate;
    const monthlySalary = weeklySalary * 4.33;

    // Display results
    document.getElementById("result").innerText =
      `Estimated Weekly Salary: ₵${weeklySalary.toFixed(2)}\n` +
      `Estimated Monthly Salary: ₵${monthlySalary.toFixed(2)}`;
  }



//humburger menu

const humbuger = document.querySelector(".humbuger");
const navItems = document.querySelector(".navitems");

humbuger.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
