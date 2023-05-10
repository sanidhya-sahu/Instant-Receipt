function sendwhat(){
    let customerName = document.getElementById("custname").value;
    let contact = document.getElementById("contactno").value;
    let descp = document.getElementById("dentry1").value;
    let qty = document.getElementById("qty").value;
    let stat = document.getElementById("stat").value;
    let beof = document.getElementById("beof").value;
    mydate = new Date()
    dat=mydate.getDate()
    mon=mydate.getMonth()
    yr=mydate.getFullYear()
    window.open(`http://web.whatsapp.com/send?phone=91${contact}&text=.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20----%20*Receipt*%20----%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Unicard-Enterprises%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Phone:%209822002852%0A---------------------------------------------%0ACustomer%20name:%20${customerName}%0ADate:${dat}-${mon}-${yr}%0AContact%20No.:%20${contact}%0A---------------------------------------------%0ADescription%20|%20Qty.%20|%20Rate%20|%20Amount%0A---------------------------------------------%0A${descp}%20%20%20%20%20%20%20%20%20%20%20%20%20%20${qty}%20%20%20%20%20%20%20%20%20%20NA%20%20%20%20%20%20%20NA%0A---------------------------------------------%0AStatus:%20${stat}%0A---------------------------------------------%0AFrom Uni-card:%20${beof}.`)
}