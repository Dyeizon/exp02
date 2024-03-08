const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded());


class SorteadorModel {
    constructor() {
        this.history = [];
    }

    add_history(num) {
        this.history.push(num);
    }

    get_history() {
        return this.history;
    }
}

class SorteadorView {
    constructor() {}
    render(req, res, history) {
        res.render('index', { history: history });
    }
}

class SorteadorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    add_history(num) {
        this.model.add_history(parseInt(num));
    }

    show_history(req, res) {
        let history = this.model.get_history();
        this.view.render(req, res, history);
    }

    random_num(min, max) {
        min = parseInt(min);
        max = parseInt(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

let model = new SorteadorModel();
let view = new SorteadorView();
let controller = new SorteadorController(model, view);

app.get('/', (req, res) => {
    controller.show_history(req, res);
});

app.post('/sortear', (req, res) => {
    if(req.body.from && req.body.to) {
        controller.add_history(controller.random_num(req.body.from, req.body.to))
    }

    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
