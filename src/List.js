import React from 'react';

const List = props => {

        const nameList = props.list;
        const datas = nameList.map(data =>{
            return(
                <div className="testcompo" key={data.id}>
                    <div>Name: {data.name}</div>
                    <div>Age: {data.age}</div>
                    <div>Sexe: {data.sexe}</div>
                </div>
            )
        })
        return (
            <div className="name-list">
                {datas}
            </div>
        );
    }


export default List;
