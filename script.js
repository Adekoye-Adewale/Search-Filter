function myFunction() {
    var input, filter, div, p, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myUL");
    p = div.getElementsByTagName("p");
    for (i = 0; i < p.length; i++) {
        a = p[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "none";
        }
    }
}