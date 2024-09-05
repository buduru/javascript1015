function add(x,y){
    console.log(x+y);
}

function print(){
    var city="hyd";
    console.log(city);
}

function fn(x){
    console.log(x);
    x();
    x();
    x();
}

fn(function (){
    var city ="vizag";
    console.log(city);
});


add(10);
print();
