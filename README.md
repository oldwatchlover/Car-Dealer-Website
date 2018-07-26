
# Car Dealer Website Demo

This is a small demo of a dynamic webpage using HTML / CSS / Javascript

Inspired by a short project I did - I recreated the guts of it here (to remember
it myself as well as share)

The site was for a small local (specialized) used car dealership. No IT department,
no super tech-savvy folks to manage their site (no budget!)

So I modified the Excel spreadsheet already used to manage their inventory to
export a JSON object of the inventory (using a Visual Basic macro in Excel)

This JSON file containted all the information about each car for sale.

From the web page, I used JQuery to load the JSON file into an array and create
a dynamic portion of the web page that held the "current inventory".

In the real use case, this proved quite manageable - the web page changed maybe
daily and another script I wrote (not here) "published" the content files up to 
their web hosting provider.

Per my contract I did not own the rights to the code I did, but the Excel->JSON->html5
stuff was useful I thought, so I have created this simple sample web page to
demonstrate the technique used.

It is stripped down raw code; not intended to be "pretty" but to demonstrate the main
elements of the data import and dynamic invnetory page construction.


To run everything you will need to host the page on a server with the files located
in the same directory, as shown here and in the code.



