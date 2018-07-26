
/*
 * inventory.js
 * 
 * This script build the dynamic content for the car dealer inventory from
 * the JSON object holding the current inventory.
 *
 * In this example, the JSON is exported from an Excel spreadsheet (although it 
 * could be coming from a database or other source)
 *
 */

/*
 *
 * MIT License
 *
 * Copyright (c) 2018 Steve Anderson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

$.getJSON( "inventory/inventory.json", function( json ) {

// load inventory from json file into an array:
var inv_array = [];
for (var key in json) {
    if (json.hasOwnProperty(key)) {
        var item = json[key];
        inv_array.push({
            Stock:       item.Stock,
            Year:        item.Year,
            Make:        item.Make,
            Model:       item.Model,
            Color:       item.Color,
            Mileage:     item.Mileage,
            Description: item.Description,
            Price:       item.Price,
            Pic1:        item.Pic1,
            Pic2:        item.Pic2,
            Pic3:        item.Pic3,
            Pic4:        item.Pic4,
            Pic5:        item.Pic5
        });            
    }
}

// we are going to display the inventory in the "main" div
var main_elem = document.getElementById("main");

var p_elem = document.createElement('p');

	// loop through all cars in the array we loaded
for (i=0; i<inv_array.length; i++) {

	// create a text element with the info on this car
    var car = "";
    car += "Stock: " + inv_array[i].Stock + ", ";
    car += "Year: " + inv_array[i].Year + ", ";
    car += "Make: " + inv_array[i].Make + ", ";
    car += "Color: " + inv_array[i].Color + ", ";
    car += "Description: " + inv_array[i].Description + ", ";
    car += "Price: " + "$" + inv_array[i].Price + ".";
    var new_node = document.createTextNode(car);

	// create a new div, class "car" to hold this car
    var carDiv = document.createElement('div');
    carDiv.id = inv_array[i].Stock;
    carDiv.className = "car";

	// we load one picture of the car (could be multiple pictures)
    var picSrc = "";
    picSrc += "inventory/" + inv_array[i].Stock + "/";
    picSrc += inv_array[i].Pic1;
    var carPic = document.createElement('img');
    carPic.src = picSrc;

	// add this car's picture and information to the empty car div
    carDiv.appendChild(carPic);
    carDiv.appendChild(new_node);

	// add this car div to main
    main_elem.appendChild(carDiv);
    main_elem.appendChild(p_elem);
}

});

