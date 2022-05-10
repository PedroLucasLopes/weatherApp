import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalCall = ({ children }) => {
    const api = {
        base: 'http://api.openweathermap.org/geo/1.0/',
        key: '81fa2e3b6e5997b8560c508cb56160a1',
    }
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const place = window.localStorage.getItem('location')

        fetch(`${api.base}direct?q=${place === undefined ? 'Contagem' : place}&limit=1&appid=${api.key}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    }, [api.base, api.key])

    return <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
}