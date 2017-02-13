
var allData=[];
var dataByCountry=[];
var countByCountry=[];
var dataByMonth=[];
var countByMonth=[];
//initialize data
d3.csv("south-china-sea.csv", function(data) {
  data.forEach(function(d) {
     d.sourcecode = +d.sourcecode;
  	d.sourcename = d.sourcename;
  	d.targetcode = +d.targetcode;
  	d.targetname = d.targetname;
  	d.date = +d.date;
  	d.verbal = +d.verbal;
  	d.count = +d.count;
  	d.eventcode = +d.eventcode; 
  });
  allData=data;

    dataByCountry = d3.nest()
  .key(function(d) { return d.sourcename; })
  .entries(this.allData);

  dataByMonth = d3.nest()
  .key(function(d) { return d.date; })
  .entries(this.allData);


  countByCountry = d3.nest()
  .key(function(d) { return d.sourcename; })
  .rollup(function(v) { return v.length; })
  .entries(allData);
console.log(JSON.stringify(countByCountry));



  countByMonth = d3.nest()
  .key(function(d) { return d.date; })
  .rollup(function(v) { return v.length; })
  .entries(allData);
console.log(JSON.stringify(countByMonth));

});