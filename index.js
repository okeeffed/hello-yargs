var argv = require('yargs-parser')(process.argv.slice(2));

const help = `
    Usage
    $ node index.js <action> <option>

    Action
    ---
    hello [name]    Echoes hello. Defaults to "world".
    friends         Echoes what they are

    Examples
    $ node index.js hello
    $ node index.js hello --name clark
    $ node index.js friends
`;

/**
 * Logs back a friendly hello.
 * @example
 * node index.js hello
 * // logs back 'hello clark'
 * node index.js hello --name bilfred
 * // logs back 'hello bilfred'
 *
 */
const hello = () => {
    const name = argv.name
        ? argv.name
        : 'clark';
    console.log(`hello ${name}`);
};

/**
 * Logs back to friends argument.
 * @example
 * node index.js friends
 * // logs 'are like flowers'
 *
 */
const friends = () => console.log('are like flowers');

/**
 * Run a function based on the argument provided.
 *
 */
const main = async() => {
    console.log('Running cool CLI');

    try {
        switch (argv._[0]) {
            case 'hello':
                hello();
                break;
            case 'friends':
                friends();
                break;
            default:
                console.log(help);
                break;
        }
    } catch (err) {
        console.error(err);
    }
};

// Run the program
main();