function yes() { var button = document.getElementById('test'); var name = document.getElementById('name'); var age = document.getElementById('age'); var location = document.getElementById('location'); var str = 'Hello ' + name.value + ', you are ' + age.value + ' years old and from ' + location.value; document.getElementById('test').innerHTML=str; };
