
class App {
    startingPoints = []
    canvas = document.getElementById("canvas");
    constructor() {
        // set size for canvas
        this.setCanvasSize()
        // append initial points
        this.setInitialPoints()
        this.draw()

    }

    setCanvasSize = () => {
        this.canvas.height = window.innerHeight / 2
        this.canvas.width = window.innerWidth / 1.5
    }
    setInitialPoints = () => {
        const firstPoint = new Point(this.canvas.width / 2, this.canvas.height / 10)
        const secondPoint = new Point(this.canvas.width / 10, this.canvas.height / 1.1)
        const thirdPoint = new Point(this.canvas.width / 1.1, this.canvas.height / 1.1)
        this.startingPoints.push(firstPoint, secondPoint, thirdPoint)
    }
    draw = () => {
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext('2d');
            this.startingPoints.forEach((element) => {
                console.log(element)
                ctx.fillRect(element.x, element.y, 2, 2);
            })
        }
    }
    cl = () => {
        console.log(this.canvas.width, this.canvas.height)
     
    }
}

class Point {
    constructor(x, y) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }
    point = () => {
        return [this.x, this.y]
    }
}

let game = new App();
game.cl()