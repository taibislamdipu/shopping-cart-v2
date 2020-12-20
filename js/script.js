
const phonePrice = 1219;
const casePrice = 59;

function subtotal() {
    const totalPhonePrice = document.getElementById('phonePrice').innerText;
    const totalPhonePriceNumber = parseInt(totalPhonePrice);

    const totalCasePrice = document.getElementById('casePrice').innerText;
    const totalCasePriceNumber = parseInt(totalCasePrice);

    const totalSubtotal = totalPhonePriceNumber + totalCasePriceNumber;

    document.getElementById('subtotal').innerText = totalSubtotal;
}

const addPhone = document.getElementById('addPhone').addEventListener('click', function () {
    const phoneQantity = document.getElementById('phoneQantity').value;
    const phoneQantityNumber = parseInt(phoneQantity);
    const totalQuantity = phoneQantityNumber + 1;
    document.getElementById('phoneQantity').value = totalQuantity;

    const totalPrice = phonePrice * totalQuantity;
    document.getElementById('phonePrice').innerText = totalPrice;
    subtotal();
})

const removePhone = document.getElementById('removePhone').addEventListener('click', function () {
    const phoneQantity = document.getElementById('phoneQantity').value;
    const phoneQantityNumber = parseInt(phoneQantity);
    if (phoneQantityNumber <= 0) {
        alert('No item in cart')
    } else {
        const totalQuantity = phoneQantityNumber - 1;
        document.getElementById('phoneQantity').value = totalQuantity;

        const totalPrice = phonePrice * totalQuantity;
        document.getElementById('phonePrice').innerText = totalPrice;

        subtotal();
    }
})

const addCase = document.getElementById('addCase').addEventListener('click', function () {
    const caseQuantity = document.getElementById('caseQuantity').value;
    const caseQuantityNumber = parseInt(caseQuantity);
    const totalQuantity = caseQuantityNumber + 1;
    document.getElementById('caseQuantity').value = totalQuantity;

    const totalPrice = casePrice * totalQuantity;
    document.getElementById('casePrice').innerText = totalPrice;

    subtotal();
})

const removeCase = document.getElementById('removeCase').addEventListener('click', function () {
    const caseQuantity = document.getElementById('caseQuantity').value;
    const caseQantityNumber = parseInt(caseQuantity);

    if (caseQantityNumber <= 0) {
        alert('No item in cart')
    } else {
        const totalQuantity = caseQantityNumber - 1;
        document.getElementById('caseQuantity').value = totalQuantity;

        const totalPrice = casePrice * totalQuantity;
        document.getElementById('casePrice').innerText = totalPrice;

        subtotal();
    }
})



