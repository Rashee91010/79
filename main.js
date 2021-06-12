student_array = [];
student_array_final = [];
function submit() {
    for (var i = 1; i <= 4; i++) {
        var name = document.getElementById("student" + i).value;
        student_array.push(name);
        console.log(name);
    }

    console.log(student_array);
    var len = student_array.length;
    for (var k = 0; k < len; k++) {
        student_array_final.push("<h4>Name - " + student_array[k] + "</h4>")
    }
    console.log(student_array_final);
    document.getElementById("displaystudentwithcommas").innerHTML = student_array_final;

    var removecommas = student_array_final.join("");
    document.getElementById("displaystudentwithoutcommas").innerHTML = removecommas;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sorting").style.display = "inline-block";

}
function sorting() {
    student_array.sort();
    console.log(student_array);
    var student_array_final_sort=[];
    var len = student_array.length;
    for (var k = 0; k < len; k++) {
        student_array_final_sort.push("<h4>Name - " + student_array[k] + "</h4>")
    }
    var removecommas = student_array_final_sort.join("");
    document.getElementById("displaystudentwithoutcommas").innerHTML = removecommas;
}
function update(){
document.getElementById("displaystudentwithoutcommas").innerHTML = "<h1>" + student_array + "</h1>";
}