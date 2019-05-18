// from data.js
var tableData = data;

// Select <tbody> element
var tbody = d3.select("tbody");
var row = tbody.append("tr");

// Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country, shape, durationMinutes, comments)
data.forEach(function(ufoReport) {
  // console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    
    var cell = row.append("td");
    cell.text(value);
  });
});

var filter = d3.select("#filter-btn");


filter.on("click", function() {
  // Prevent the page from reloading
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  
  var filteredData = tableData.filter(ufoReport2 => ufoReport2.datetime === inputValue);
  console.log(filteredData);

  tbody.text("");
  filteredData.forEach(entry => {
    var row = tbody.append('tr');
    Object.entries(entry).forEach(([key, value]) => {
      row.append('td').text(value);
    });
  });
});

  
  



