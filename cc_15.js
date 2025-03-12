// Task 2 - Adding Risk Items
document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskButton = document.getElementById("increaseRiskLevels");
    console.log("Risk Dashboard Loaded");

    // Adding Risk Items
    function addRiskItem(riskName, riskLevel, department) {
        const card = document.createElement("div");
        card.className = `riskCard ${riskLevel.toLowerCase()}`;
        card.innerHTML = `
            <strong>${riskName}</strong><br>
            Level: ${riskLevel}<br>
            Department: ${department}<br>
            <button class="resolve">Resolve</button>
        `;
  
    // Task 3: Removing Risk Items
  card.querySelector(".resolve").addEventListener("click", (e) => {
    e.stopPropagation();
    card.remove();
});

riskDashboard.appendChild(card);
}

         // Task 2 (continued) - Handling Form Submission
    riskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const riskName = document.getElementById("riskName").value;
        const riskLevel = document.getElementById("riskLevel").value;
        const department = document.getElementById("department").value;
        addRiskItem(riskName, riskLevel, department);
        riskForm.reset();
    });

        // Task 5: Implementing Bulk Updates
        increaseRiskButton.addEventListener("click", () => {
            const riskCards = document.querySelectorAll(".riskCard");
            riskCards.forEach(card => {
                const level = card.classList.contains("low") ? "Medium" : card.classList.contains("medium") ? "High" : "High";
                card.className = `riskCard ${level.toLowerCase()}`;
                card.querySelector("strong").nextSibling.nodeValue = `\nLevel: ${level}\n`;
            });
        });

         // Task 6: Handling Event Propagation
    // Ensuring clicks inside a risk card don’t trigger unwanted actions
    riskDashboard.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Dashboard clicked, but not through a risk card.");
    });
});
