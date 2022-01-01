function myFunction() {
    var input, filter, div, div1, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myUL");
    div1 = div.getElementsById("wrapper");
    for (i = 0; i < p.length; i++) {
        a = div1[i].getElementsById("name")[0];
        txtValue = a.textContent || a.Id;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div1[i].style.display = "";
        } else {
            div1[i].style.display = "none";
        }
    }
}