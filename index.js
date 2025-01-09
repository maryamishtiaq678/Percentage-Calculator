function abc() {
    let stdTm_grade10 = document.getElementById("tm1").value;
    let stdOBT_grade10 = document.getElementById("obt1").value;
    let res = stdOBT_grade10/stdTm_grade10*100
    document.getElementById("heading").innerHTML=("you have got it" +res + "%")
    alert("you have got it" +res + "%")
    console.log("you have got it" +res + "%")
}