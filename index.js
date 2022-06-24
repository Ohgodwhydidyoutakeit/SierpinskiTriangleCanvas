
class App {
    startingPoints = []
    canvas = document.getElementById("canvas");
    button = document.getElementsByTagName("button")[0]
    numberOfMidpoints = 10000
    points = []
    pointSize = {
        x: 1,
        y: 1
    }
    constructor() {
        // set size for canvas
        this.setCanvasSize()
        // append initial points
        this.setInitialPoints()
        this.drawInitialPoints()
        this.numberChangeListener()
        this.buttonEventListener();

        this.points.push(this.getARandomPointBetweenTwo(this.startingPoints[0], this.startingPoints[1]))

        this.createMidPoints();


    }

    setCanvasSize = () => {
        this.canvas.height = window.innerHeight / 1.1
        this.canvas.width = window.innerWidth / 1.5
    }
    setInitialPoints = () => {
        const firstPoint = new Point(this.canvas.width / 2, this.canvas.height / 10)
        const secondPoint = new Point(this.canvas.width / 10, this.canvas.height / 1.1)
        const thirdPoint = new Point(this.canvas.width / 1.1, this.canvas.height / 1.1)
        this.startingPoints.push(firstPoint, secondPoint, thirdPoint)
    }
    drawInitialPoints = () => {
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext('2d');
            this.startingPoints.forEach((element) => {
                ctx.fillRect(element.x, element.y, 2, 2);
            })
        }
    }
    numberChangeListener = () => {
        document.getElementById("input").value = this.numberOfMidpoints
        document.getElementById("input").addEventListener("input", (e) => {
            this.numberOfMidpoints = e.target.value
        })
    }
    buttonEventListener = () => {
        this.button.addEventListener("click", () => {
            if (this.numberOfMidpoints < 0) alert("Number cannot be less then 0")
            this.createMidPoints(this.numberOfMidpoints)
            // this.draw()
        })

    }
    // draw = () => {
    //     var ctx = this.canvas.getContext('2d');
    //     // ctx.draw(this.points[i].x, this.points[i], this.pointSize.x, this.pointSize.y)
    //     this.points.forEach((el, index) => {
    //         ctx.draw(el.x, el.y, this.pointSize.x, this.pointSize.y)
    //     })


    // }

    createMidPoints = (numberOfMidpoints) => {
        // f(x) = ax + b
        // create a random point between 2 points 
        var ctx = this.canvas.getContext('2d');

        for (let i = 0; i < numberOfMidpoints; i++) {
                            let writtenPoint = this.getAPointBetweenTwo(this.points[this.points.length - 1], this.getARandomStartingPoint(this.startingPoints))
            this.points.push(writtenPoint)

            // console.log(test)
            ctx.fillRect(writtenPoint.x, writtenPoint.y, this.pointSize.x, this.pointSize.y)
        }

    }

    getARandomPointBetweenTwo = (pointA, pointB) => {
        let a = (pointB.y - pointA.y) / (pointB.x - pointA.x)
        let b = ((a * -1) * pointA.x) + pointA.y
        let randomX = Math.floor(Math.min(pointA.x, pointB.x) + Math.random() * (Math.max(pointA.x, pointB.x) - Math.min(pointA.x, pointB.x) + 1))
        let randomY = a * randomX + b
        return new Point(randomX, randomY)
    }

    getAPointBetweenTwo = (pointA, pointB) => {
        return new Point((pointA.x + pointB.x) / 2, (pointA.y + pointB.y) / 2)
    }

    getARandomStartingPoint = (startingPoints) => {
        return startingPoints[Math.floor((Math.random() * startingPoints.length))];
    }

    cl = () => {
        // console.log(this.startingPoints)
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