function calculator(perc) {

    if(perc === 5) {
        const bill = Number(document.getElementById('b-number').value);
        const people = Number(document.getElementById('p-number').value);

        const totalTipAmount = bill*0.05;
        const tipPerPerson = totalTipAmount / people;

        const totalBill = totalTipAmount + bill;
        const totalPerPerson = totalBill / people;
        
        document.getElementById('tip-amount').value = tipPerPerson;
        document.getElementById('people-total').value = totalPerPerson;
    }

    if(perc === 10) {
        const bill = Number(document.getElementById('b-number').value);
        const people = Number(document.getElementById('p-number').value);

        const totalTipAmount = bill*0.10;
        const tipPerPerson = totalTipAmount / people;

        const totalBill = totalTipAmount + bill;
        const totalPerPerson = totalBill / people;
        
        document.getElementById('tip-amount').value = tipPerPerson;
        document.getElementById('people-total').value = totalPerPerson;
    }

    if(perc === 15) {
        const bill = Number(document.getElementById('b-number').value);
        const people = Number(document.getElementById('p-number').value);

        const totalTipAmount = bill*0.15;
        const tipPerPerson = totalTipAmount / people;

        const totalBill = bill + totalTipAmount;
        const totalPerPerson = totalBill / people;
        
        document.getElementById('tip-amount').value = tipPerPerson;
        document.getElementById('people-total').value = totalPerPerson;
    }

    if(perc === 25) {
        const bill = Number(document.getElementById('b-number').value);
        const people = Number(document.getElementById('p-number').value);

        const totalTipAmount = bill*0.25;
        const tipPerPerson = totalTipAmount / people;

        const totalBill = bill + totalTipAmount;
        const totalPerPerson = totalBill / people;
        
        document.getElementById('tip-amount').value = tipPerPerson;
        document.getElementById('people-total').value = totalPerPerson;
    }

    if(perc === 50) {
        const bill = Number(document.getElementById('b-number').value);
        const people = Number(document.getElementById('p-number').value);

        const totalTipAmount = bill*0.50;
        const tipPerPerson = totalTipAmount / people;

        const totalBill = bill + totalTipAmount;
        const totalPerPerson = totalBill / people;
        
        document.getElementById('tip-amount').value = tipPerPerson;
        document.getElementById('people-total').value = totalPerPerson;
    }
}

function changeCustom() {
    alert("Sorry we don't have this function yet");
    
}