// Command (команда) помогает отделить клиента от получателя
// Позволяет передавать запросы как аргументы в методы
// Идет разделение на бизнес-логику (Engine), интерфейс (Driver) и команду (Start/Stop Commands)
// Бизнес-логика не запускается напрямую с интерфейса. Взаимодействие идет через команды

class Engine {
    constructor() {
        this.state = false;
    }

    getStatus() {
        return this.state;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class Driver {
    action(command) {
        command.execute();
    }
}

class StartCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

class StopCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
}

// init

const driver = new Driver();
const engine = new Engine();

const startCommand = new StartCommand(engine);
const stopCommand = new StopCommand(engine);

console.log('engine is running 1:', engine.getStatus());

// start engine

driver.action(startCommand);

console.log('engine is running 2:', engine.getStatus());

// stop engine

driver.action(stopCommand);

console.log('engine is running 3:', engine.getStatus());
