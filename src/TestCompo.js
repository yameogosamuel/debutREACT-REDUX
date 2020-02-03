import React, {Component} from 'react';

class TestCompo extends Component {
    render() {
        const nameList = this.props.list;
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
}

export default TestCompo;
