# abi-decoder
Nodejs and Javascript library for decoding data params and events from etherem transactions
See master branch for details and example use cases

# For our purposes
Run: 
```
npm run API3
```
Contents in ./stakers.txt

# Note
1) It's using my free Infura key which only has 100k requests per day, and it's at 21,389 at the time of this commit. So if you need to re-run it a few times you might want to swap it out for yours. 

2) It's throwing a few warnings. It's fully functional though. But if it's worth debugging here they are:
```
(node:17133) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:17133) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:17133) UnhandledPromiseRejectionWarning: Error: Invalid JSON RPC response: ""
    at Object.InvalidResponse (/Users/danhep/Coding/HAI/abi-decoder/node_modules/web3-core-helpers/lib/errors.js:43:16)
    at XMLHttpRequest.request.onreadystatechange (/Users/danhep/Coding/HAI/abi-decoder/node_modules/web3-providers-http/lib/index.js:95:32)
    at XMLHttpRequestEventTarget.dispatchEvent (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request-event-target.js:34:22)
    at XMLHttpRequest._setReadyState (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request.js:208:14)
    at XMLHttpRequest._onHttpRequestError (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request.js:349:14)
    at ClientRequest.<anonymous> (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request.js:252:61)
    at ClientRequest.emit (events.js:400:28)
    at TLSSocket.socketErrorListener (_http_client.js:475:9)
    at TLSSocket.emit (events.js:400:28)
    at emitErrorNT (internal/streams/destroy.js:106:8)
    at emitErrorCloseNT (internal/streams/destroy.js:74:3)
    at processTicksAndRejections (internal/process/task_queues.js:82:21)
(node:17133) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:17133) UnhandledPromiseRejectionWarning: Error: Invalid JSON RPC response: ""
    at Object.InvalidResponse (/Users/danhep/Coding/HAI/abi-decoder/node_modules/web3-core-helpers/lib/errors.js:43:16)
    at XMLHttpRequest.request.onreadystatechange (/Users/danhep/Coding/HAI/abi-decoder/node_modules/web3-providers-http/lib/index.js:95:32)
    at XMLHttpRequestEventTarget.dispatchEvent (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request-event-target.js:34:22)
    at XMLHttpRequest._setReadyState (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request.js:208:14)
    at XMLHttpRequest._onHttpRequestError (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request.js:349:14)
    at ClientRequest.<anonymous> (/Users/danhep/Coding/HAI/abi-decoder/node_modules/xhr2-cookies/dist/xml-http-request.js:252:61)
    at ClientRequest.emit (events.js:400:28)
    at TLSSocket.socketErrorListener (_http_client.js:475:9)
    at TLSSocket.emit (events.js:400:28)
    at emitErrorNT (internal/streams/destroy.js:106:8)
    at emitErrorCloseNT (internal/streams/destroy.js:74:3)
    at processTicksAndRejections (internal/process/task_queues.js:82:21)
(node:17133) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 3)
```

