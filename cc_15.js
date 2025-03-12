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
            <span class="risk-level">Level: ${riskLevel}</span><br>
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
            const levelElement = card.querySelector(".risk-level");
            const currentLevel = levelElement.textContent.split(': ')[1]; // Extract level name
        
            let newLevel = currentLevel;
            switch (currentLevel) {
                case 'Low':
                    newLevel = 'Medium';
                    card.style.backgroundColor = 'yellow';
                    break;
                case 'Medium':
                    newLevel = 'High';
                    card.style.backgroundColor = 'red';
                    break;
                case 'High':
                    newLevel = 'High';
                    card.style.backgroundColor = 'red';
                    break;
            }
        
            // Update the level text in the card
            levelElement.textContent = `Level: ${newLevel}`;
        });
    });

    // Task 6: Handling Event Propagation
    // Ensuring clicks inside a risk card don’t trigger unwanted actions
    riskDashboard.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Dashboard clicked, but not through a risk card.");
    });
});
