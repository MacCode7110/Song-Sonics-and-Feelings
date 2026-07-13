import { Link } from 'react-router-dom'

const NavBar = () => {
     return (
          <nav
               className="navbar has-background-success-light"
               role="navigation"
               aria-label="main navigation"
          >
               <div className="navbar-menu">
                    <div className="navbar-start">
                         <Link
                              to="/exploratory-pca"
                              className="navbar-item is-family-secondary has-text-black"
                         >
                              Exploratory PCA
                         </Link>
                         <Link
                              to="/data-methodology"
                              className="navbar-item is-family-secondary has-text-black"
                         >
                              Data Methodology
                         </Link>
                    </div>
               </div>
          </nav>
     )
}

export default NavBar
