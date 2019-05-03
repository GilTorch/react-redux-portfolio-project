import React from 'react';
import { Table,Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const DisplayLessons=({ lessons })=>{

    return(
        <div>
            {lessons!==[]}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Real ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th colspan="3" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {lessons.map((lesson,id)=>{
                            return(
                            <React.Fragment>
                                 <td>{id}</td>
                                 <td>{lesson.id}</td>
                                 <td>{lesson.title}</td>
                                 <td>{lesson.content}</td>
                                 <td>
                                     <Button variant={"success"}>View</Button>  
                                 </td>
                                 <td>
                                     <Button variant={"danger"}>Delete</Button>                                         
                                 </td>
                                 <td>
                                    <Button variant={"primary"}>Edit</Button>  
                                 </td>                       
                            </React.Fragment>
                            )
                        })}
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

DisplayLessons.defaultProps={
    lessons:[{id:"No Id",title:"No Title",content:"No content"}]
}

export default DisplayLessons;