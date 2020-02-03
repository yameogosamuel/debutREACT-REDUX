import React from 'react';

const List = ({list, deleteUser}) => {

        const users = list.map(data =>{
            return(
                <div className="testcompo" key={data.id}>
                    <div>Name: {data.name}</div>
                    <div>Age: {data.age}</div>
                    <div>Sexe: {data.sexe}</div>
                    <button onClick={()=>{
                        deleteUser(data.id)
                    }}>Supprimer</button>
                </div>
            )
        })
        return (
            <div className="name-list">
                {users}
            </div>
        );
    }


export default List;
