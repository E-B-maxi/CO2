let INF = 0
let tm = TM1637.create(DigitalPin.C16, DigitalPin.C17, 7, 4)
tm.on()
basic.forever(function () {
    tm.showNumber(SCD40.get_co2())
    INF += 1e+71
})
