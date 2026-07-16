import Heading from '../components/Heading'
import Content from '../components/Content'
import PCA from '../components/PCA'

const ExploratoryPCAPage = () => {
  return (
    <section className="section">
      <div className="container">
        <header className="block mb-3">
          <Heading size={1} className="is-family-primary has-text-black">
            Music Preferences and Feelings
          </Heading>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            Examine the relationship between song sonics and the mapping of feelings through <span className="is-italic">Principal Component Analysis (PCA)</span>. The{' '}
            <span className="is-italic">Exploratory PCA</span> visualizes how different songs cluster according to linear combinations of similar scaled sonic values. Twelve unique scaled sonic values
            are processed to build the <span className="is-italic">PCA</span> coordinates for each song. The twelve scaled sonic features represented in the <span className="is-italic">PCA</span> are{' '}
            <span className="is-italic">scaled_bpm</span>, <span className="is-italic">scaled_danceability</span>, <span className="is-italic">scaled_onset_rate</span>,{' '}
            <span className="is-italic">scaled_average_loudness</span>, <span className="is-italic">scaled_dynamic_complexity</span>,{' '}
            <span className="is-italic">scaled_spectral_energy</span>, <span className="is-italic">scaled_chords_changes_rate</span>,{' '}
            <span className="is-italic">scaled_pitch_salience</span>, <span className="is-italic">scaled_spectral_complexity</span>,{' '}
            <span className="is-italic">scaled_spectral_centroid</span>, <span className="is-italic">scaled_barkbands_flatness_db</span>, and{' '}
            <span className="is-italic">scaled_zerocrossingrate</span>. Additionally, <span className="is-italic">Russell's Core Affect Framework</span> is implemented
            to understand how different levels of <span className="is-italic">valence</span> and <span className="is-italic">arousal</span> align with <span className="is-italic">PCA</span>{' '}
            coordinates and influence feelings. The <span className="is-italic">Exploratory PCA</span> offers a comprehensive tooltip to explore all data points and their corresponding song
            attributes. <span className="is-italic">Russell's Core Affect Framework</span> maps each <span className="is-italic">Primary Feeling</span> into one of four neurophysiological quadrants
            depending on the particular manifestation of <span className="is-italic">valence</span> and <span className="is-italic">arousal</span>. Each quadrant is color-coded as{' '}
            <span
              style={{
                color: 'rgb(200, 180, 0)',
                opacity: 0.8,
              }}
            >
              ■ Quadrant 1 (High <span className="is-italic">Arousal</span> + Positive <span className="is-italic">Valence</span>)
            </span>
            ,{' '}
            <span
              style={{
                color: 'rgb(255,0,0)',
                opacity: 0.8,
              }}
            >
              ■ Quadrant 2 (High <span className="is-italic">Arousal</span> + Negative <span className="is-italic">Valence</span>)
            </span>
            ,{' '}
            <span
              style={{
                color: 'rgb(0,0,255)',
                opacity: 0.8,
              }}
            >
              ■ Quadrant 3 (Low <span className="is-italic">Arousal</span> + Negative <span className="is-italic">Valence</span>)
            </span>
            , and{' '}
            <span
              style={{
                color: 'rgb(0, 180, 0)',
                opacity: 0.8,
              }}
            >
              ■ Quadrant 4 (Low <span className="is-italic">Arousal</span> + Positive <span className="is-italic">Valence</span>)
            </span>
            . <span className="is-italic">Principal Component 1</span> represents the horizontal axis of <span className="is-italic">valence</span> (moving from negative feeling on the left to
            positive feeling on the right), while <span className="is-italic">Principal Component 2</span> represents the vertical axis of <span className="is-italic">arousal</span> (moving from
            low-energy feeling at the bottom to high-energy feeling at the top). Observe that a subset of songs is associated with a <span className="is-italic">Primary Feeling</span> mapping to a{' '}
            <span className="is-italic">Core Affect Quadrant</span> that differs from the surrounding spatial quadrant in the <span className="is-italic">Exploratory PCA</span>. Although{' '}
            <span className="is-italic">My Sacrifice</span> by <span className="is-italic">Creed</span> is associated with <span className="is-italic">Core Affect Quadrant 1</span>, the scatter point
            is spatially located in Quadrant 3 in the <span className="is-italic">Exploratory PCA</span>. This occurrence presents an opportunity to (1) consider why some songs are associated with a
            particular <span className="is-italic">Core Affect Quadrant</span> but mathematically cluster to a different spatial quadrant in the <span className="is-italic">Exploratory PCA</span>, and
            (2) consider why some respondents experience a particular <span className="is-italic">Primary Feeling</span> when listening to a song.
          </Content>
        </header>
        <main className="box has-background-white-bis p-5 mb-3">
          <div className="is-flex is-justify-content-center is-align-items-center">
            <PCA />
          </div>
        </main>
      </div>
    </section>
  )
}

export default ExploratoryPCAPage
