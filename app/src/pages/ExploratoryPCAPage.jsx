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
                              className="is-family-primary has-text-black"
                         >
                              Music Preferences and Feelings
                         </Heading>
                         <Content
                              size={5}
                              className="is-family-secondary has-text-black p-5"
                         >
                              Examine the relationship between music
                              preferences and the construction of feelings
                              through Principle Component Analysis (PCA).
                              The Exploratory PCA Plot visualizes how
                              different songs cluster according to similar
                              scaled sonic and emotional characteristics.
                              Russell's Core Affect Framework is utilized
                              to understand how different types and extents
                              of valence and arousal contribute to the
                              construction of feelings in response to
                              listening to the songs. The Exploratory PCA
                              Plot offers dynamic interaction such as a
                              comprehensive tooltip to explore all the data
                              points and their corresponding song
                              attributes. Russell's Core Affect Framework
                              maps each primary feeling into one of four
                              neurophysiological quadrants depending on the
                              particular manifestation of valence and
                              arousal. Each quadrant is color-coded as{' '}
                              <span style={{ color: 'rgb(200, 180, 0)' }}>
                                   ■ Quadrant 1 (High Arousal + Positive
                                   Valence)
                              </span>
                              ,{' '}
                              <span style={{ color: 'rgb(255,0,0)' }}>
                                   {' '}
                                   ■ Quadrant 2 (High Arousal + Negative
                                   Valence)
                              </span>
                              ,{' '}
                              <span style={{ color: 'rgb(0,0,255)' }}>
                                   ■ Quadrant 3 (Low Arousal + Negative
                                   Valence)
                              </span>
                              , and{' '}
                              <span style={{ color: 'rgb(0, 180, 0)' }}>
                                   ■ Quadrant 4 (Low Arousal + Positive
                                   Valence)
                              </span>
                              .
                         </Content>
                    </header>
                    <main className="box has-background-white-bis p-5 mb-3">
                         <div className="is-flex is-justify-content-center is-align-items-center">
                              <PCA />
                         </div>
                    </main>
                    <footer className="block mb-3">
                         <Content
                              size={5}
                              className="is-family-secondary has-text-black p-5"
                         >
                              Main Conclusions
                         </Content>
                    </footer>
               </div>
          </section>
     )
}

export default ExploratoryPCAPage
