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
                              to="/interactive-pca"
                              className="navbar-item"
                         >
                              Interactive PCA Plot
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
