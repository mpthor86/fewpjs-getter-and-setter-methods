// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    set diameter(r) {
        this.radius = r / 2
    }

    set circumference(c) {
        this.radius = c / (Math.PI * 2)
    }

    get diameter() {
        return this.radius + this.radius
    }

    get circumference() {
        return (Math.PI * this.radius) * 2
    }

    get area() {
        return (this.radius * this.radius) * Math.PI
    }

}