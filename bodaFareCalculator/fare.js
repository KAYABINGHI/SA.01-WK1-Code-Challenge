function calculateBodaFare() {
    // Prompt user to enter the distance in kilometers
    const distanceInKm = window.prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    
    // Convert the input string to an integer
    const distance = parseInt(distanceInKm);

    // Check if the input is invalid (not a number or less than/equal to 0)
    if (!distance || distance <= 0) {
        console.log("please enter your km");
        // Return the function itself to allow retry (note: this may not work as intended, consider recursive call or alternative)
        return calculateBodaFare;
    }

    // Define the base fare in KES
    const baseFare = 50; // KES
    // Define the charge per kilometer in KES
    const chargePerKm = 15; // KES
    // Calculate the trip charge based on distance
    const tripCharge = distanceInKm * chargePerKm; // KES
    // Calculate the total fare (base fare + trip charge)
    const totalFare = baseFare + tripCharge;

    // Output results to the console
    console.log(`Uko kwote ? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: ${baseFare}`);
    console.log(`Mpaka Uko: ${tripCharge}`);
    console.log(`Total: ${totalFare}`);
    console.log(`panda Pikipiki!`);
}