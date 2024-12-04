// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Get references to the HTML elements that will be used
    const instructionElement = document.getElementById('instruction');
    const outputElement = document.getElementById('output');
    const commandForm = document.getElementById('command-form');
    const commandInput = document.getElementById('command-input');
    const stepCounterElement = document.getElementById('step-counter');
    const statusElement = document.getElementById('status');
    const scoreElement = document.getElementById('score');

    // Define the steps of the simulation, each step has an instruction, correct action, and response
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

    // Initialize the current step counter and score
    let currentStep = 0;
    let score = 0;

    // Function to update the simulation display, showing the current step and instruction
    function updateSimulation() {
        // Update the step counter display
        stepCounterElement.textContent = `Step ${currentStep + 1} of ${steps.length}`;
        
        // Display the instruction for the current step
        instructionElement.textContent = steps[currentStep].instruction;
        
        // Clear the input field and focus it for the next user input
        commandInput.value = '';
        commandInput.focus();
    }

    // Function to update the user's score
    function updateScore(points) {
        score += points;  // Add the given points to the score
        scoreElement.textContent = `Score: ${score}`;  // Update the displayed score
    }

    // Function to append messages to the output area
    function appendOutput(message) {
        // Add a new message to the output area with a line break before it
        outputElement.textContent += '\n' + message;
        
        // Scroll the output area to the bottom to show the latest message
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    // Event listener for form submission (when the user submits a command)
    commandForm.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        
        // Get the user's input, trim excess spaces, and convert to lowercase
        const userInput = commandInput.value.trim().toLowerCase();
        
        // Get the data for the current step
        const currentStepData = steps[currentStep];

        // Check if the user's input matches the correct action for the current step
        if (userInput === currentStepData.correctAction) {
            // If the input is correct, append the command and response to the output
            appendOutput(`> ${userInput}`);
            appendOutput(currentStepData.response);

            // Update the score by adding 20 points for a correct action
            updateScore(20);

            // If there are more steps, move to the next step
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateSimulation();  // Update the simulation to show the next step
            } else {
                // If all steps are completed, mark the simulation as finished
                statusElement.textContent = 'Simulation completed!';
                statusElement.style.color = '#27ae60';  // Green text for success
                commandInput.disabled = true;  // Disable the command input field
                commandForm.querySelector('button').disabled = true;  // Disable the submit button
            }
        } else {
            // If the input is incorrect, display a message asking the user to try again
            appendOutput(`> ${userInput}`);
            appendOutput("That's not the correct action. Please try again.");
        }
    });

    // Initialize the simulation by displaying the first step
    updateSimulation();
});
