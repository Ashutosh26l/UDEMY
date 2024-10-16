var guestlist = ["angela", "ashutosh", "icecream"];
var guestname = readline("Enter the person you are going to search");

if (guestlist.includes(guestname)) {
    alert(guestname + " is on the guest list!");
} else {
    alert(guestname + " is not on the guest list.");
}
