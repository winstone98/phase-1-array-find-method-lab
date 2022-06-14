// code your solution here
//https://github.com/winstone98/phase-1-array-find-method-lab.
function superbowlWin(record) {
    let winningYearObject = record.find(element => element.result === "W")
    if (typeof (winningYearObject) === "object") {
        return winningYearObject.year
    }
}