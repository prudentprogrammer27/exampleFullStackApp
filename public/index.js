alert("Javascript Loaded Again");

$.get('/pets')
.success((petData) => {
  //manipulate DOM to display pet data
})