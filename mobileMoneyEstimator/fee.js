function estimateTransactionFee() {
    // Prompt user to enter the amount to send in KES
    const amountInput = window.prompt("Unatuma Ngapi? (KES):");
    
    // Convert the input string to an integer
    const amountToSend = parseInt(amountInput);

    // Calculate 1.5% of the amount as the transaction fee
    let fee = amountToSend * 0.015;
    
    // Ensure minimum fee is KES 10
    if (fee < 10) {
        fee = 10;
    }
    // Cap maximum fee at KES 70
    else if (fee > 70) {
        fee = 70;
    }
    
    // Calculate total amount to be debited (amount + fee)
    let totalAmount = amountToSend + fee;
    
    // Output results to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("Send Money Securely!");
}