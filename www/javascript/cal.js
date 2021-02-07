document.getElementById("emi").addEventListener("click", emi);

function emi() {
    var total = parseInt(document.getElementById("total").value);
    var down = parseInt(document.getElementById("down_payment").value);
    var n = parseInt(document.getElementById("year").value);
    var r = parseInt(document.getElementById("intrest").value);
    var p = total - down;

    var e = p * n * r / 100;
    var emi = (e + p) / (12 * n);
    var pay = e + p;

    document.getElementById("ruppes").innerHTML = emi.toFixed(1);
    localStorage.setItem('loan', p);
    localStorage.setItem('intrest', e);
    localStorage.setItem('total', pay);
}