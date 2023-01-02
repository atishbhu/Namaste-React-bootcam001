import {useRouteError} from 'react-router-dom'

const ErrorComponent = () => {

    const errorData = useRouteError();
    return (
        <>
        <h1>Not Found</h1>
        <h2>Something !Not Kool happended</h2>
        <h3>Details: {errorData.errorMessage}</h3>
        </>
    )
}

export default ErrorComponent;