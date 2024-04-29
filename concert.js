"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concert = /** @class */ (function () {
    function Concert(name, date, venue, ticketsAvailable, ticketPrice, artist, genre, duration) {
        this.customers = [];
        this.name = name;
        this.date = date;
        this.venue = venue;
        this.ticketsAvailable = ticketsAvailable;
        this.ticketPrice = ticketPrice;
        this.artist = artist;
        this.genre = genre;
        this.duration = duration;
    }
    Concert.prototype.displayConcertDetailsHTML = function () {
        return "\n            <div class=\"container mt-5\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                Concert Details\n                            </div>\n                            <div class=\"card-body\">\n                                <p><strong>Name:</strong> ".concat(this.name, "</p>\n                                <p><strong>Date:</strong> ").concat(this.date, "</p>\n                                <p><strong>Venue:</strong> ").concat(this.venue, "</p>\n                                <p><strong>Tickets Available:</strong> ").concat(this.ticketsAvailable, "</p>\n                                <p><strong>Ticket Price:</strong> ").concat(this.ticketPrice, "</p>\n                                <p><strong>Artist:</strong> ").concat(this.artist, "</p>\n                                <p><strong>Genre:</strong> ").concat(this.genre, "</p>\n                                <p><strong>Duration:</strong> ").concat(this.duration, "</p>\n                                <form id=\"bookingForm\">\n                                    <label for=\"name\">Name:</label>\n                                    <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n                                    <label for=\"mobile\">Mobile:</label>\n                                    <input type=\"text\" id=\"mobile\" name=\"mobile\"><br><br>\n                                    <label for=\"tickets\">Number of Tickets:</label>\n                                    <input type=\"number\" id=\"tickets\" name=\"tickets\"><br><br>\n                                    <input type=\"submit\" value=\"Book Tickets\">\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
    };
    return Concert;
}());
exports.default = Concert;
