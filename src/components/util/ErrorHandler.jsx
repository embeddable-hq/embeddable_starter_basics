import Error from './Error'

export default function ErrorHandler({ error }) {
    return <Error msg={error?.message}/>;
}