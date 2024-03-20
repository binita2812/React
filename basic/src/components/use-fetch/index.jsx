import {useState, useEffect} from 'react';

export default function UseFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);

    async function fetchData() {
        setPending(true);
        try {
            const response = await fetch(url, {...options});
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);
        } catch (error) {
            setError('${error}. Some error occurred');
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return {data, error, pending};
}