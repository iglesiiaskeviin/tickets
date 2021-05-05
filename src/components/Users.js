import React, {useState, useEffect} from "react";


function Users(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("/users/").then(res =>{
            console.log(res.ok)
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setUsers(jsonRes))
    })

    return(
        <div className="container">
        <p className="search-yourPly text-center mx-3 display-3">Tickets</p>
        <hr/>
        <div className="col-lg">
        <div className="table-responsive">
            <table className="table">
                <thead className='bg-dark text-white text-center'>
                    <tr>
                        <th scope="col-12">Ticket Id</th>
                        <th scope="col-12">Date</th>
                        <th scope="col-12">User</th>
                        <th scope="col-12">Title</th>
                        <th scope="col-12">Info</th>
                        <th scope="col-12">Status</th>
                    </tr>
                </thead>
                {users.map((data) => (
                    <tbody key={data.ticketId} className="table bg-dark text-white shadow-md">
                        <td>{data.ticketId}</td>
                        <td>{data.date}</td>
                        <td>{data.from}</td>
                        <td>{data.subject}</td>
                        <td>{data.body}</td>
                        <td><div className="mx-auto my-auto"><button type="button" class="btn bg-primary border-none text-center">{data.status}</button></div></td>
                    </tbody>
                ))}
            </table>
            </div>
        </div>
    </div>
    )

}
export default Users;