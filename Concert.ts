class Concert {
    private name: string;
    private date: Date;
    private venue: string;
    private ticketsAvailable: number;
    private ticketPrice: number;
    private artist: string; 
    private genre: string; 
    private duration: number; 
    private customers: { name: string, mobile: string, tickets: number }[] = [];

    constructor(name: string, date: Date, venue: string, ticketsAvailable: number, ticketPrice: number, artist: string, genre: string, duration: number) {
        this.name = name;
        this.date = date;
        this.venue = venue;
        this.ticketsAvailable = ticketsAvailable;
        this.ticketPrice = ticketPrice;
        this.artist = artist;
        this.genre = genre;
        this.duration = duration;
    }

    displayConcertDetailsHTML(): string {
        return `
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Concert Details
                            </div>
                            <div class="card-body">
                                <p><strong>Name:</strong> ${this.name}</p>
                                <p><strong>Date:</strong> ${this.date}</p>
                                <p><strong>Venue:</strong> ${this.venue}</p>
                                <p><strong>Tickets Available:</strong> ${this.ticketsAvailable}</p>
                                <p><strong>Ticket Price:</strong> ${this.ticketPrice}</p>
                                <p><strong>Artist:</strong> ${this.artist}</p>
                                <p><strong>Genre:</strong> ${this.genre}</p>
                                <p><strong>Duration:</strong> ${this.duration}</p>
                                <form id="bookingForm">
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name"><br><br>
                                    <label for="mobile">Mobile:</label>
                                    <input type="text" id="mobile" name="mobile"><br><br>
                                    <label for="tickets">Number of Tickets:</label>
                                    <input type="number" id="tickets" name="tickets"><br><br>
                                    <input type="submit" value="Book Tickets">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
} 

export default Concert;
