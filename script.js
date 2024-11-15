document.addEventListener('DOMContentLoaded', () => {
    const instructionElement = document.getElementById('instruction');
    const outputElement = document.getElementById('output');
    const commandForm = document.getElementById('command-form');
    const commandInput = document.getElementById('command-input');
    const stepCounterElement = document.getElementById('step-counter');
    const statusElement = document.getElementById('status');
    const scoreElement = document.getElementById('score');

    const steps = [
        {
            instruction: "Your first task is to scan the network for vulnerabilities. Type 'scan network' to begin.",
            correctAction: 'scan network',
            response: "Network scan complete. 3 vulnerabilities detected: 1) Outdated firewall, 2) Weak passwords, 3) Unencrypted data transmission."
        },
        {
            instruction: "Now, let's update the firewall. Type 'update firewall' to proceed.",
            correctAction: 'update firewall',
            response: "Firewall updated successfully. New rules applied to block potential threats."
        },
        {
            instruction: "Next, we need to enforce strong password policies. Type 'enforce password policy' to implement this.",
            correctAction: 'enforce password policy',
            response: "Password policy enforced. All users will be required to use strong, unique passwords."
        },
        {
            instruction: "Let's encrypt our data transmission. Type 'enable encryption' to secure our data.",
            correctAction: 'enable encryption',
            response: "Data encryption enabled. All sensitive information will now be transmitted securely."
        },
        {
            instruction: "Congratulations! You've successfully protected the network. Type 'finish' to complete the simulation.",
            correctAction: 'finish',
            response: "Simulation complete. You've successfully protected the network from potential cyber attacks!"
        }
    ];

    let currentStep = 0;
    let score = 0;

    function updateSimulation() {
        stepCounterElement.textContent = `Step ${currentStep + 1} of ${steps.length}`;
        instructionElement.textContent = steps[currentStep].instruction;
        commandInput.value = '';
        commandInput.focus();
    }

    function updateScore(points) {
        score += points;
        scoreElement.textContent = `Score: ${score}`;
    }

    function appendOutput(message) {
        outputElement.textContent += '\n' + message;
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    commandForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = commandInput.value.trim().toLowerCase();
        const currentStepData = steps[currentStep];

        if (userInput === currentStepData.correctAction) {
            appendOutput(`> ${userInput}`);
            appendOutput(currentStepData.response);
            updateScore(20);

            if (currentStep < steps.length - 1) {
                currentStep++;
                updateSimulation();
            } else {
                statusElement.textContent = 'Simulation completed!';
                statusElement.style.color = '#27ae60';
                commandInput.disabled = true;
                commandForm.querySelector('button').disabled = true;
            }
        } else {
            appendOutput(`> ${userInput}`);
            appendOutput("That's not the correct action. Please try again.");
        }
    });

    updateSimulation();
});