
const db = require("./database");

// Check foreign key relationships
db.all("PRAGMA foreign_key_list(bookings)", (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Foreign Key Relationships:");

        rows.forEach((row) => {
            console.log(
                `Bookings references ${row.table} through ${row.from}`
            );
        });
    }

    db.close();
});
