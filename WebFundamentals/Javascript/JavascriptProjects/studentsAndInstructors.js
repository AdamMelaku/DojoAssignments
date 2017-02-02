function output(){

  var users = {
   'Students': [
       {first_name:  'Michael', last_name : 'Jordan'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
    ],
   'Instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
    ]
   }

   console.log("Students");
  for (var i = 0; i < users.Students.length; i++) {
    var student = users.Students[i]
    console.log((i+1) +" - "+ student.first_name + " " + student.last_name + " - ");
  }

  console.log("Instructors");
  for (var i = 0; i < users.Instructors.length; i++) {
    var instructor = users.Instructors[i];
  console.log((i+1) +" - "+ instructor.first_name + " " + instructor.last_name + " - ");
  }

}

output();
