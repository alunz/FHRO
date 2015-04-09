class Form {
    constructor(id) {
        var el = document.getElementById(id);
        this.ctx = el.getContext("2d");
    }
}


class Circle extends Form {
    constructor(id, color, x, y, radius) {
        super(id);
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
    }
}

class Arc extends Form {
    constructor(id, x, y, width) {
        super(id);
        this.x = x;
        this.y = y;
        this.width = width;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.width, 0, Math.PI, false);
        this.ctx.stroke();
    }
}

var body = new Circle('draw', 'yellow', 100, 100, 70);
body.draw();

var leftEye = new Circle('draw', 'black', 75, 75, 10);
leftEye.draw();

var rightEye = new Circle('draw', 'black', 125, 75, 10);
rightEye.draw();

var mouth = new Arc('draw', 100, 100, 50);
mouth.draw();
