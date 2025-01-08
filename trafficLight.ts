type TrafficLightState = "red" | "yellow" | "green";
type TrafficLightEvent = "CHANGE";

const transitions: Record<TrafficLightState, Record<TrafficLightEvent, TrafficLightState>> = {
    red: { CHANGE: "green" },
    green: { CHANGE: "yellow" },
    yellow: { CHANGE: "red" },
};

class TrafficLight {
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