import React from 'react';

function List (){
    let peopleList= [
        {id:1,
        name:'pou'},
        {id:2,
        name:'subho'}
    ]
    return ( 

        <div>{
            peopleList.length > 0 ? peopleList.map(people => <li key={people.id}>{people.name}</li>) : <h3>Insert names</h3>
            }
            
            
        </div>
    )
}

export default List