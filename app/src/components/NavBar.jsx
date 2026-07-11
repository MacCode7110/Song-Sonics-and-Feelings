import { Link } from 'react-router-dom'

const NavBar = () => {
     return (
          <nav
               className="navbar has-background-danger-light"
               role="navigation"
               aria-label="main navigation"
          >
               <div className="navbar-menu">
                    <div className="navbar-start">
                         <Link
                              to="/exploratory-pca"
                              className="navbar-item"
                         >
                              Exploratory PCA
                         </Link>
                         <Link
                              to="/data-methodology"
                              className="navbar-item"
                         >
                              Data Methodology
                         </Link>
                    </div>
               </div>
          </nav>
     )
}

export default NavBar
