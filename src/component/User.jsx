import React from 'react';

let userContext= React.createContext()

let userProvider= userContext.Provider
let userConsumer= userContext.Consumer

export default (userProvider, userConsumer)