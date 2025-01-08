type TrafficLightState = "red" | "yellow" | "green";
type TrafficLightEvent = "CHANGE";

const transitions: Record<TrafficLightState, Record<TrafficLightEvent, TrafficLightState>> = {
    red: { CHANGE: "green" },
    green: { CHANGE: "yellow" },
    yellow: { CHANGE: "red" },
};

class TrafficLight {                    // Creating a class allows encapsulation
    private state: TrafficLightState;

    constructor(initialState: TrafficLightState) {
        this.state = initialState;
        console.log(`Traffic light initialized as: ${this.state}`);
    }

    changeState(event: TrafficLightEvent): void {
        const newState = transitions[this.state][event];

        if (!newState) {
            console.log(`Invalid transition from ${this.state}`);
            return;
        }

        this.state = newState;
        console.log(`Light is now ${this.state}`);
    }

    getState(): TrafficLightState {
        return this.state;
    }
}

const trafficLight = new TrafficLight("red");

trafficLight.changeState("CHANGE"); // Light is now green
trafficLight.changeState("CHANGE"); // Light is now yellow
trafficLight.changeState("CHANGE"); // Light is now red

/*As we can see, the transitions using Record<> allows us to create a key value pair and avoid using 
several if-else statements, which improves efficiency. Also, adding new states is easy
and we wouldn't have to restructure our logic*/