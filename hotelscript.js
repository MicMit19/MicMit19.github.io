
      var r1 = 0; //The number of people in room 1//
      var r2 = 0; //The number of people in room 2/
      var r3 = 0; //The number of people in room 2//
      var r4 = 0; //The number of people in room 2//

      function background() {
    	  document.body.style.background = 'url("tumblrpic.gif")';
        document.body.style.backgroundSize = "cover";
        document.getElementById('font').style.textShadow = "5px 5px 5px #fff06a";
  	  }
 
      function addGuest() {
        r1++;  //Adds +1 to the number of people in room 1//
        if (r1 <= 3) {
          //SPLIT YOUR CODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!//
          var li = document.createElement("li");
          var guest1 = document.getElementById('x').value;
          var textnode = document.createTextNode(guest1);
          li.appendChild(textnode);
          document.getElementById("roomList1").appendChild(li);
          document.getElementById('r1counter').innerHTML = r1;
          }
          else {
            document.getElementById('room1button').style.display = "none";
          }
        }
      
      function removeGuest() {
        
        var list = document.getElementById("roomList1");
        var select = document.getElementById('firstRoomRemove').value;
        list.removeChild(list.childNodes[select]);
        document.getElementById('room1button').style.display = "block";
        r1-=1;
        document.getElementById('r1counter').innerHTML = r1;
      }
      

      function addGuest2() {
        r2++;  //Adds +1 to the number of people in room 1//
        if (r2 <= 3) {
          //SPLIT YOUR CODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!//
          var li = document.createElement("li");
          var guest2 = document.getElementById('y').value;
          var textnode = document.createTextNode(guest2);
          li.appendChild(textnode);
          document.getElementById("roomList2").appendChild(li);
          }
          else {
            document.getElementById('room2button').style.display = "none";
          }
        }
      
      function removeGuest2() {
        r2-=1;
        var list = document.getElementById("roomList2");
        var select = document.getElementById('secondRoomRemove').value;
        list.removeChild(list.childNodes[select]);
        document.getElementById('room2button').style.display = "block";
      }
      
      function addGuest3() {
        r3++;  //Adds +1 to the number of people in room 1//
        if (r3 <= 3) {
          //SPLIT YOUR CODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!//
          var li = document.createElement("li");
          var guest3 = document.getElementById('u').value;
          var textnode = document.createTextNode(guest3);
          li.appendChild(textnode);
          document.getElementById("roomList3").appendChild(li);
          }
          else {
            document.getElementById('room3button').style.display = "none";
          }
        }
      
      function removeGuest3() {
        r3-=1;
        var list = document.getElementById("roomList3");
        var select = document.getElementById('thirdRoomRemove').value;
        list.removeChild(list.childNodes[select]);
        document.getElementById('room3button').style.display = "block";
      }
      
      function addGuest4() {
        r4++;  //Adds +1 to the number of people in room 1//
        if (r4 <= 3) {
          //SPLIT YOUR CODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!//
          var li = document.createElement("li");
          var guest4 = document.getElementById('o').value;
          var textnode = document.createTextNode(guest4);
          li.appendChild(textnode);
          document.getElementById("roomList4").appendChild(li);
          }
          else {
            document.getElementById('room4button').style.display = "none";
          }
        }
      
      function removeGuest4() {
        r4-=1;
        var list = document.getElementById("roomList4");
        var select = document.getElementById('fourthRoomRemove').value;
        list.removeChild(list.childNodes[select]);
        document.getElementById('room4button').style.display = "block";
      }
      