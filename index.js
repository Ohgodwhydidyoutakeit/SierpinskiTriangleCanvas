
class App {
    startingPoints = []
    canvas = document.getElementById("canvas");
    button = document.getElementsByTagName("button")[0]
    options = {
        numberOfMidpoints: 10000,
        colorOfPoints: '#32CD32',
        sizeOfPoints: 3,
        isAnimate: true

    }
    points = []

    constructor() {
        // set size for canvas
        this.setCanvasSize()
        // append initial points
        this.setInitialPoints()
        this.drawInitialPoints()
        this.addEventsListeners()
        this.buttonEventListener();
        this.points.push(this.getARandomPointBetweenTwo(this.startingPoints[0], this.startingPoints[1]))
        this.createMidPoints();
    }

    setCanvasSize = () => {
        this.canvas.height = window.innerHeight / 1.5
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
                ctx.fillStyle = 'blue'
                ctx.fillRect(element.x, element.y, 5, 5);
            })
        }
    }
    addEventsListeners = () => {
        // number of points
        document.getElementById("input").value = this.options.numberOfMidpoints
        document.getElementById("input").addEventListener("input", (e) => {
            this.options.numberOfMidpoints = e.target.value
        })
        // color of points
        document.getElementById('inputColor').value = this.options.colorOfPoints
        document.getElementById('inputColor').addEventListener('input', (e) => {
            this.options.colorOfPoints = e.target.value
        })
        // size of points
        document.getElementById('inputSize').value = this.options.sizeOfPoints
        document.getElementById('inputSize').addEventListener('input', (e) => {
            this.options.sizeOfPoints = e.target.value
        })
        // isAnimate
        document.getElementById('inputAnimate').checked = this.options.isAnimate
        document.getElementById('inputAnimate').addEventListener('input', (e) => {
        
            this.options.isAnimate =e.target.checked
        })
    }
    buttonEventListener = () => {
        this.button.addEventListener("click", () => {
            if (this.options.numberOfMidpoints < 0) alert("Number cannot be less then 0")
            this.createMidPoints(this.options.numberOfMidpoints)
            this.draw()

        })

    }
    draw = () => {
        console.log(this.options.isAnimate)
        var context = this.canvas.getContext('2d');
        var i = 0;
        const animate = () => {
            context.fillStyle = this.options.colorOfPoints
            context.fillRect(this.points[i].x, this.points[i].y, this.options.sizeOfPoints, this.options.sizeOfPoints);
            i++;
            if (i == this.points.length) i = 0;
            setTimeout(animate, 2);
        };
        if(this.options.isAnimate) animate();
        this.points.forEach((el) =>{
            context.fillRect(el.x, el.y, this.options.sizeOfPoints, this.options.sizeOfPoints);

        })

    }


    createMidPoints = (numberOfMidpoints) => {
        // f(x) = ax + b
        // create a random point between 2 points 
        for (let i = 0; i < numberOfMidpoints; i++) {
            let writtenPoint = this.getAPointBetweenTwo(this.points[this.points.length - 1], this.getARandomStartingPoint(this.startingPoints))
            this.points.push(writtenPoint)

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