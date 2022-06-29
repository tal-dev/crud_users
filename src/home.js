import { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import axios from "axios"
function Home() {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {

        fetch("http://localhost:3001/app/users")
            .then(res => res.json())
            .then(req => setData(req))

    }, [status])
    const sortData = (array) => {
        let sorted = array.sort((a, b) => {
            let c = new Date(a.date)
            let d = new Date(b.date)
            return d - c
        })
        return sorted
    }
    const handleRemove = (id) => {
        axios.delete(`http://localhost:3001/app/remove/${id}`).then(res => console.log())

        setTimeout(() => {

            setStatus(false)
        }, 2000)
        setStatus(true)


    }
    return (
        <div>
            {status && <h4>item has been removed</h4>}
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Date joined</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sortData(data).length ? data.map((user, ind) => {
                            return (
                                <tr>
                                    <th>{ind + 1}</th>
                                    <td>{user.fullname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date.toString().slice(0, 10)}</td>
                                    <td onClick={() => handleRemove(user._id)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></td>

                                </tr>

                            )
                        }) : <h4>No data loaded yet</h4>
                    }
                </tbody>
            </Table >
        </div>
    )
}

export default Home