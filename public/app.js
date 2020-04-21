
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZ3WDXoUdL49tLdbt1Q0G0o4OYmqIknXo",
    authDomain: "prws-67487.firebaseapp.com",
    databaseURL: "https://prws-67487.firebaseio.com",
    projectId: "prws-67487",
    storageBucket: "prws-67487.appspot.com",
    messagingSenderId: "601247788376",
    appId: "1:601247788376:web:d4a8c104806760da2f892d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database().ref();


  function submit() {
    const propertyRef = database.child('property')
    const address = document.getElementById('address').value
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    const zip = document.getElementById('zip').value
    const firstName = document.getElementById('fName').value
    const lastName = document.getElementById('lName').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('eMail').value

    let propertyInfo = {
      address: address,
      city: city,
      state: state,
      zip: zip,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      pictures: picArray,
  }

  propertyRef.push(propertyInfo);
  nextScreen()

  }
