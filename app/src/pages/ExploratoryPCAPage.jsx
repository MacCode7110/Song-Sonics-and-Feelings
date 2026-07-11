import Heading from '../components/Heading'
import TextContent from '../components/TextContent'
import ContentAccordion from '../components/ContentAccordion'
import PCA from '../components/PCA'

const ExploratoryPCAPage = () => {
     return (
          <section className="section">
               <div className="container">
                    <header className="block mb-6">
                         <Heading size={1} className="has-text-weight-bold mb-2">
                              Music Preferences and Feelings
                         </Heading>
                         <TextContent size={5}>
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
                         </TextContent>
                    </header>
                    <main className="box p-5 mb-6 has-background-white-bis">
                         <div
                              className="is-flex is-justify-content-center is-align-items-center"
                              style={{ minHeight: '400px' }}
                         >
                              <PCA />
                         </div>
                    </main>
                    <footer className="block">
                         <ContentAccordion title="Key Conclusion 1">
                              <p>Key Conclusion 1</p>
                         </ContentAccordion>
                         <ContentAccordion title="Key Conclusion 2">
                              <p>Key Conclusion 2</p>
                         </ContentAccordion>
                    </footer>
               </div>
          </section>
     )
}

export default ExploratoryPCAPage
