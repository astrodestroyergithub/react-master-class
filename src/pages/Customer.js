import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from '../components/NotFound';
import { baseUrl } from '../shared';

export default function Customer() {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        console.log('useEffect');
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
        .then((response) => {
            if(response.status === 404) {
                // render a 404 component in this page
                setNotFound(true);
            }
            return response.json();
        })
        .then((data) => {
            setCustomer(data.customer);
        });
    }, []);

    function deleteCustomer() {
        console.log('deleting...')
    }

    return ( 
    <>
    {notFound ? <p>The customer with id {id} was not found</p> : null}
        {customer ? (
            <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div> 
        ) : null}

        <button onClick={(e) => {
            const url = baseUrl + 'api/customers/' + id;
            fetch(url, {method: 'DELETE', headers: {
                'Content-Type': 'application/json'
            }})
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Something went wrong');
                }
                navigate('/customers');
                // assume things went well
            }).catch((e) => {
                console.log(e);
            })
        }}>
            Delete
        </button>

        <Link to='/customers'>Go back</Link>
    </>
    );
}