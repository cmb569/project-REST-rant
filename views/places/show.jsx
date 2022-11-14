const React = require('react')
const Def = require('../default')



/////reminder: You will not be able to edit. That will be further down in the rest-rant.////
function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>Not Rated</p>
            <h2>Comments</h2>
            <p>No Comments</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a>     
            <a href={`/places/${data.id}?_method=DELETE`} className="btn btn-warning">Delete</a>
          
    
           </main>
        </Def>
    )
}

module.exports = show
