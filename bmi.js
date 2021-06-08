function my() {
    let h = document.getElementById("h").value;
    let w = document.getElementById("w").value;
    let r = (w/(h*h));
    let d = document.getElementById("result");
    d.innerHTML="BMI is:"+r;
    console.log(d);
}