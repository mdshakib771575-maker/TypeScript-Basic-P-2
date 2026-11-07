// type assertion
const SomeStatus = "pending";
const ShowStatus = (statys) => {
    console.log("Your Current Status is" + statys);
};
ShowStatus(SomeStatus);
const config = {
    port: 1000
};
const currentPort = config.port;
// constant assersion
const configaration = {
    port: 8080,
    prepix: "/api/v2"
};
export {};
