function calculateChaiIngredients() {
    // Prompt user to enter the number of chai cups to make
    const numberOfCups = window.prompt("Karibu! How many cups of Chai would you like to make?");
    
    // Convert the input string to an integer
    const cups = parseInt(numberOfCups);
    
    // Define the base recipe for one cup of chai
    const recipe = {
        water: 200,       // ml per cup
        milk: 50,         // ml per cup
        teaLeaves: 1,    // tablespoon per cup
        sugar: 2,         // teaspoons per cup
    };

    // Check if input is invalid (not a number or less than/equal to zero)
    if (!cups || cups <= 0) {
        console.log("please enter a number");
        // Recursively call the function to retry input
        return calculateChaiIngredients();
    }

    // Calculate total amount of each ingredient needed based on number of cups
    const waterNeeded = recipe.water * cups;
    const milkNeeded = recipe.milk * cups;
    const teaLeavesNeeded = recipe.teaLeaves * cups;
    const sugarNeeded = recipe.sugar * cups;

    // Output results to the console
    console.log(`To make ${cups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${waterNeeded} ml`);
    console.log(`Milk: ${milkNeeded} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeavesNeeded} tablespoons`);
    console.log(`Sugar (Sukari): ${sugarNeeded} teaspoons`);
    console.log("");
    console.log("Enjoy your Chai Bora!");
}