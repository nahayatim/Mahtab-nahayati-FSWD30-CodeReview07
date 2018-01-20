			
	class Person {

  constructor( name, surname, age, gender, img, like, inRelation) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.img = img;    
    this.like = 0;
    this.inRelation = inRelation;
  }


  render(i) {
    let msg ='';
    if (i%3==0) 
      {msg +='<div style="clear:both"></div>'
      }; 
     msg+= `
  
      <div class="pers" style="float:left">
        <div class="pic">
          <img src="${this.img}">
        </div>
        <div class="text">
          <h4> Name:<strong> ${this.name}</strong></h4>
          <h4> Surname:<strong>${this.surname}</strong></h4>
          <p> Gender: ${this.gender}</p>
          <p> Age:<strong> ${this.age}</strong></p>                  
          <button onclick="like(`+ i +`)">Like</button>
          <span id="like`+ i +`">${this.like} </span><img src="img/like.png">
        </div>
      </div>
      `;
    return msg;
  }
}

function like (index){
  persAll[index].like=persAll[index].like+1;
  document.getElementById('like' + index).innerHTML=persAll[index].like;
           }


// Stored Data
var persAll = [
		new Person("Susane","as",23,"Woman","img/w1.jpg",true),

		new Person("Angella","op",32,"Woman","img/w2.jpg",false),
				new Person("Hidi","Rt",30,"Woman","img/w3.jpg",true),
				new Person("Lili","An",25,"Woman","img/w4.jpg",false),
				new Person("Blinda","KH",35,"Woman","img/w5.jpg",true),
				new Person("Hili","SD",26,"Woman","img/w6.jpg",false),
				new Person("Breta","Bj",29,"Woman","img/w7.jpg",true),
				new Person("Mari", "At", 33, "Woman","img/w8.jpg",true),
				new Person("Sabine", "wv", 34, "Woman","img/w9.jpg",false),
				new Person("Agatha", "CR", 27, "Woman","img/w10.jpg",false),
				new Person("Jack", "Mn", 25, "Man","img/m1.jpg",true),
				new Person("Michael", "Ld", 28, "Man","img/m2.jpg",true),
				new Person("wiliam", "Fd", 34, "Man","img/m3.jpg",false),
				new Person("Tomas", "DS", 27, "Man","img/m4.jpg",false),
				new Person("jason", "CD", 28, "Man","img/m5.jpg",true),
				new Person("David", "Kh", 27, "Man","img/m6.jpg",false),
				new Person("Alex", "Bl",29,"Man","img/m7.jpg",true),
				new Person("Artur","Am",33,"Man","img/m8.jpg",false),
				new Person("philip","Ma",35,"Man","img/m9.jpg",true),
				new Person("philip","Ma",32,"Man","img/m10.jpg",true),
				
			];
//function for index.html - page

function allList() {
  let allList = document.getElementById("allPerson");
  for (var i = 0; i < persAll.length; i++) {

    allList.innerHTML += persAll[i].render(i);
  }
}

//Function for men.html-page

function onlyMen() {
  let allList = document.getElementById("men");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "Man") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}

//Function for women.html-page

function onlyWomen() {
  let allList = document.getElementById("Women");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "Woman") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}
