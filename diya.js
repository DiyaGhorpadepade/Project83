var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://img.freepik.com/premium-vector/our-dad-is-best-cute-flat-cartoon-father-two-daughters-with-text-vertical_137966-102.jpg?w=2000", "https://static.vecteezy.com/system/resources/previews/020/146/787/original/mother-day-cartoon-illustration-mother-hugging-her-daughter-vector.jpg" , "https://www.shutterstock.com/shutterstock/photos/759255565/display_1500/stock-vector-two-hand-drawn-beautiful-cute-girls-sisters-stand-back-to-back-with-arms-crossed-vector-759255565.jpg"];
https
var names = ["Family Book", "Prathap Ghorpade- Father", "Shilpa Prathap Ghorpade - Mother", "Diya Prathap Ghorpade- Me", "Disha Prathap Ghorpade - Sister"];

var age = [ 42, 34, 10, 5]

age.sort();

age.sort();

age.reverse();

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    var max_number = Math.max.apply(Math, age );
    console.log("The highest age is: ", max_number);

    var min_number = Math.min.apply(Math, age);
    console.log("The lowest age is: ", min_number);
}