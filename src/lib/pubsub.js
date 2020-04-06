/**
 * Simple Pub/Sub message handler
 */

let topics = {};
const hOP = topics.hasOwnProperty;

export function subscribe(topic, listener) {
    // ensure that we have an array to add listeners to
    if (!hOP.call(topics, topic)) topics[topic] = [];

    // get index of new listener
    const index = topics[topic].push(listener) - 1;

    return {
        remove: function() {
            delete topics[topic][index];
        }
    }
}

export function publish(topic, info) {
    // ensure the topic is valid
    if (!hOP.call(topics, topic)) return;

    topics[topic].forEach(function(item) {
        item(info != undefined ? info : {});
    });
}

export const TOPICS = {
    PEG_BOARD: {
        MOVE: 'PEG_BOARD/MOVE'
    }
};