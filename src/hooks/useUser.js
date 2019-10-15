import React, { useState, useCallback } from "react";

export const useUser = (newUser) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [email, setEmail] = useState(newUser.email);
    const [firstName, setFirstName] = useState(newUser.firstName);
    const [lastName, setLastName] = useState(newUser.lastName);

    return {
        login: useCallback(() => setIsLoggedIn(true)),
        logout: useCallback(() => setIsLoggedIn(false)),
        email,
        firstName,
        lastName,
        //avatarSrc,
        isLoggedIn
    }
};
