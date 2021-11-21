var name_of_guest_array=[];
function go()
{
    guestName=document.getElementById("enter").value;
    name_of_guest_array.push(guestName);
    document.getElementById("name").innerHTML= name_of_guest_array;
    console.log( name_of_guest_array);
    var length_of_array= name_of_guest_array.length;
    console.log(length_of_array);
}
function done()
{
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("guest").innerHTML=i.toString();
}
function sorted()
{
    name_of_guest_array.sort();
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("sorting").innerHTML=i.toString();
}
function Search() {
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found + 1;
        }
    }
    document.getElementById("Search_names").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+ found+" Time/s");
}