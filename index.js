// code your solution here
//https://github.com/winstone98/phase-1-array-find-method-lab.
function superbowlWin(record) {
    let yearWon = record.find(element => element.result === "W")
    if (typeof (yearWon) === "object") {
        return yearWon.year
    }
}