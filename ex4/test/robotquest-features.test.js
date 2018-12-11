const featuresToTest = require('../src/robotquest-features');
const featuresToTestFromMainFile = require('../src/robotquest');



test('robot reaches the flag when its position meets `F` on the board', () => {
    let board = [
        ['.', 'F'] // only one line to this board
    ];
    let winningRobot = {
        position: {
            line: 0,
            column: 1
        },
        head: 'right'
    };

    let anotherRobot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'right'
    };


    expect(featuresToTest.checkIfFlagReached(winningRobot, board)).toBe(true);
    expect(featuresToTest.checkIfFlagReached(anotherRobot, board)).toBe(false);

});

// TODO: write some more tests on checkIfFlagReached


test('applyStep returns true only when step is move', () => {
    let robot = {
        position: {
            line: 0,
            column: 1
        },
        head: 'right'
    };

    expect(featuresToTestFromMainFile.applyStep(robot, 'move', 4, 4)).toBe(true);
    expect(featuresToTestFromMainFile.applyStep(robot, 'turn-right', 4, 4)).toBe(false);
    expect(featuresToTestFromMainFile.applyStep(robot, 'turn-left', 4, 4)).toBe(false);
    expect(featuresToTestFromMainFile.applyStep(robot, undefined, 4, 4)).toBe(false);

});
