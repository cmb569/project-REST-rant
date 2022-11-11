const React = require('react')
const Def = require('./default.jsx')

function home () {
    return (
      <Def>
<main>
  
    <h1>HOME</h1>
    <div>
      <img src="/images/chia-snack.jpg" alt="Chia Fruit Shake" height="100px" width="100px"/>
      <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>


      </Def>
    )
  }
  

module.exports = home
