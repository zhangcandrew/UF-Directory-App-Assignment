/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'), 
    listings = require('./listings.json');

/* Connect to your database */
    mongoose.connect(config.db.uri)

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({ "name": "Library West" }, 'code name address coordinates', function (err, listing) {
    if (err) return handleError(err);
    console.log("Listing found! " + listing); // Space Ghost is a talk show host.
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOne({ "code": "CABL" }, 'code name address coordinates', function (err, listing) {
    if (err) return handleError(err);
    listing.remove(function(err) {
      if (err) throw err;

      console.log('listing deleted!');
    });
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOne({ "name": "Phelps Laboratory" }, 'code name address coordinates', function (err, listing) {
    if (err) return handleError(err);
    console.log(listing)
    listing.address = "102 Phelps Lab, Gainesville, FL 32611";
    listing.save(function(err) {
      if (err) throw err;

      console.log('listing updated!');
    });
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, 'code name address coordinates', function (err, listing) {
    if (err) return handleError(err);
    console.log("Everything: " + listing); // Space Ghost is a talk show host.
   })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
