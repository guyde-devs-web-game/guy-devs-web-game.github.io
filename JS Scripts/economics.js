document.getElementById("tabButton4").disabled = true
sleep(3000).then(() => {
    start()
})
function start() {
    alert("Your community has evolved to the economic phase.\nEconomics Tab Unlocked.")
    document.getElementById("tabButton4").disabled = false
}