let clientData = {
  id: 094545,
  fullName: 'Not set',

  setUserName: function(firstName, lastName) {
    console.log('콜백호출');
    console.log(`setUsername에 전달받은 ${firstName}, ${lastName}`);
    this.fullName = firstName + ' ' + lastName;
  }
}

function getUserInput(firstName, lastName, callback) {
  callback(firstName, lastName);
}

getUserInput('Barack', 'Obama', clientData.setUserName);

getUserInput('jimmy', 'jaeyeon', clientData.setUserName('firstName', 'lastName'));