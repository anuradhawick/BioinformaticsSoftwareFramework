/**
 * Created by Vijini on 10/20/17.
 */
import fetch from 'node-fetch';

export default class WrapSignalP {
    input;

    // TODO these are the parameters
    constructor(inp = null) {
        this.input = inp;
    }

    exec() {
        return fetch('http://192.168.8.101:8080/bio-signalp', {
            method: 'POST',
            body: JSON.stringify(
                {
                    fasta: this.input
                }
            ),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => {
                return {step: 'signal-p', output: json.result}
            });
    }
}