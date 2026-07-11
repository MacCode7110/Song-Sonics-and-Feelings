import Heading from '../components/Heading'
import Content from '../components/Content'
import PCA from '../components/PCA'

const ExploratoryPCAPage = () => {
     return (
          <section className="section">
               <div className="container">
                    <header className="block mb-3">
                         <Heading
                              size={1}
                              className="has-text-weight-bold mb-3"
                         >
                              Music Preferences and Feelings
                         </Heading>
                         <Content
                              size={5}
                              className="p-5"
                         >
                              Examine the relationship between music
                              preferences and the construction of feelings
                              through Principle Component Analysis (PCA).
                              The Exploratory PCA Plot visualizes how
                              different songs cluster according to similar
                              sonic and emotional characteristics.
                              Russell's Core Affect Framework is utilized
                              to understand how differing extents of
                              valence and arousal contribute to the
                              construction of feelings in response to
                              listening to the songs. The Exploratory PCA
                              Plot offers dynamic features such as zooming,
                              panning, and tooltips to explore all the data
                              points and their corresponding song
                              attributes.
                         </Content>
                    </header>
                    <main className="box has-background-white-bis p-5 mb-3">
                         <div
                              className="is-flex is-justify-content-center is-align-items-center"
                              style={{ minHeight: '500px' }}
                         >
                              <PCA />
                         </div>
                    </main>
                    <footer className="block mb-3">
                         <Content
                              size={5}
                              className="p-5"
                         >
                              Main Conclusions
                         </Content>
                    </footer>
               </div>
          </section>
     )
}

export default ExploratoryPCAPage
