(function testProgram() {
    const TAX_RATE = 0.08;
    const PHONE_PRICE = 2000;
    const ACCESSORY_PRICE= 100;
    const SPENDING_THRESHOLD = 9500;
    var bank_account_balance= prompt("Enter your account balance");
    var purchase_amount = 0;
    
    spendMoney();
    
    function calculatePurchaseAmountWithTax(amount) {
        amount = amount+(amount*TAX_RATE);
        return amount;
    }
    
    function formatPriceAmount(amount) {
        return "$"+amount.toFixed(2);
    }
    
    function buyAccessory(amount) {
        amount = amount+ACCESSORY_PRICE;
        return amount;
    }
    
    function purchasePhone() {
        purchase_amount = purchase_amount + PHONE_PRICE;
        if(purchase_amount < SPENDING_THRESHOLD) {
           purchase_amount = buyAccessory(purchase_amount);
        }
    }
    
    function spendMoney() {
      while(purchase_amount <= bank_account_balance) {
        purchasePhone();
      }
      purchase_amount = calculatePurchaseAmountWithTax(purchase_amount);
      console.log(formatPriceAmount(purchase_amount));
    
      if(purchase_amount > bank_account_balance) {
          console.log("Cannot afford");
      } else {
          console.log("Thanks for the order");
      }
    }
    }());
    
    