var h = window.history;
console.log("History")
for (var prop in h) {
    console.log("key: " + prop)
    console.log("value: " + h[prop]);
  }

//   var nav = window.navigator;
//   console.log("Navigator");
//   for (var prop in nav) {
//     console.log("key: " + prop)
//     console.log("value: " + nav[prop]);
//   }

//   var loc = window.location;
//   console.log("Location");
//   for (var prop in loc) {
//     console.log(prop + " : "+ loc[prop]);
//   }
