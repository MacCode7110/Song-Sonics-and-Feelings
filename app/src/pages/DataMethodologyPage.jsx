import Heading from '../components/Heading'
import Content from '../components/Content'

const DataMethodologyPage = () => {
  return (
    <section className="section">
      <div className="container">
        <header className="block mb-1">
          <Heading size={1} className="is-family-primary has-text-black">
            Data Methodology
          </Heading>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            The <span className="is-italic">Music Preferences and Feelings Survey</span> was administered to a targeted 250 full-time employees in the United States through SurveyMonkey distribution
            panels from May 28th, 2026 to June 5th, 2026. The <span className="is-italic">Music Preferences and Feelings Survey</span> also required each respondent to answer two questions: (1) What
            is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling. (2) What is the primary feeling that your favorite song creates
            within you? Please enter only one feeling and use correct spelling. A total of 275 survey responses were collected and stored in{' '}
            <span className="is-italic">survey_data_master_raw.csv</span>. <span className="is-italic">JavaScript</span>, <span className="is-italic">React</span>,{' '}
            <span className="is-italic">D3</span>, <span className="is-italic">Python</span>, <span className="is-italic">Pandas</span>, <span className="is-italic">yt-dlp</span>,{' '}
            <span className="is-italic">FFmpeg</span>, <span className="is-italic">WAV</span>, <span className="is-italic">Essentia Audio Analysis</span>,{' '}
            <span className="is-italic">PCA (Principal Component Analysis)</span>, and{' '}
            <span className="is-italic">
              <span className="is-italic">Russell's Core Affect Framework</span>
            </span>{' '}
            were utilized to build <span className="is-italic">Exploratory PCA: Musical Qualities and Construction of Feelings</span>. The 275 survey responses stored in{' '}
            <span className="is-italic">survey_data_master_raw.csv</span> proceeded through 8 unique cleaning and processing phases to build the output file{' '}
            <span className="is-italic">pca_matrix.json</span>. The corrected survey writing, PCA coordinates, and scaled sonic values stored in <span className="is-italic">pca_matrix.json</span> are
            presented through <span className="is-italic">Exploratory PCA: Musical Qualities and Construction of Feelings</span>.
          </Content>
        </header>
        <main className="block mb-1">
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">1. Initial Quality Sweep, Manual Context Review, Establishing structural base</span>: <span className="is-italic">survey_data_master_raw.csv</span>{' '}
            was refactored to only contain <span className="is-italic">[song_name]</span>, <span className="is-italic">[artist_name]</span>, and <span className="is-italic">[primary_feeling]</span>{' '}
            columns. Additionally, all null values were standardized to display NA. The results were recorded to <span className="is-italic">survey_data_master_structural_base.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">
              2. Dataset Truncation (Simple Random Sampling), <span className="is-italic">Python</span> Program Execution, Selecting representative subset of dataset
            </span>
            : To maintain an efficient data cleaning workflow and provide an unbiased, representative subset of the full-time employee respondent pool, a simple random sampling method was applied.
            By executing <span className="is-italic">simple_random_sampling.py</span> on <span className="is-italic">survey_data_master_structural_base.csv</span> with a constant random seed
            (random_state=75) to enforce reproducibility, we randomly selected 85 unique survey responses from the 275 data rows following the{' '}
            <span className="is-italic">Initial Quality Sweep</span> in Item 1. The sample size represents approximately 30.9% of the full-time employee respondent pool, which asserts a 95% confidence
            level and a margin of error less than 9%. All non-selected responses were omitted from this phase of analysis. The results were recorded to{' '}
            <span className="is-italic">survey_data_master_sampled.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">3. Complete Quality Sweep and Song URL Insertion, Manual Context Review, Removing invalid data and systematically correcting information</span>: While
            the 85 data rows sampled during the <span className="is-italic">Dataset Truncation (Simple Random Sampling)</span> in Item 2 established a 95% confidence level and margin of error less
            than 9% for the full-time employee pool, the domain constraints enforced in Item 3 decreased the usable data rows to 45. The resulting <span className="is-italic">PCA</span> operates as an
            exploratory subset of the 85 sampled data rows. The domain constraints detailed in sections <span className="is-italic">Data Correction Measures</span>,{' '}
            <span className="is-italic">Data Research Questions</span>, <span className="is-italic">Data Evaluation Measures</span>, and <span className="is-italic">Song Selection Method</span> in{' '}
            <span className="is-italic">data_methodology_log.md</span> were applied to <span className="is-italic">survey_data_master_sampled.csv</span> to remove invalid data and systematically
            correct information. The results were recorded to <span className="is-italic">survey_data_master_corrected.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">
              4. Primary Feeling Mapping, <span className="is-italic">Python</span> Program Execution, Mapping each remaining primary feeling in the <span className="is-italic">[primary_feeling]</span>{' '}
              column to one of the four quadrants established in <span className="is-italic">Russell's Core Affect Framework</span>
            </span>
            : To provide a method for understanding the creation of feelings in comparison to sonic features extracted from <span className="is-italic">Essentia</span>, executing{' '}
            <span className="is-italic">primary_feeling_quadrant_mapping.py</span> on <span className="is-italic">survey_data_master_corrected.csv</span> mapped each remaining primary feeling in the{' '}
            <span className="is-italic">[primary_feeling]</span> column to one of the four quadrants established in <span className="is-italic">Russell's Core Affect Framework</span> as detailed in
            section{' '}
            <span className="is-italic">
              Applying <span className="is-italic">Russell's Core Affect Framework</span>
            </span>{' '}
            in <span className="is-italic">data_methodology_log.md</span>. Valence maps to the x-axis. Arousal maps to the y-axis. Through examining the coordinates of valence and arousal, emotional
            qualities are categorically represented within the spatial geometry of the <span className="is-italic">PCA</span>. The results were recorded to{' '}
            <span className="is-italic">survey_data_master_primary_feelings_mapped.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">
              5. Song Downloading and <span className="is-italic">WAV</span> Conversion, <span className="is-italic">Python</span> Program Execution, Downloading each song in the{' '}
              <span className="is-italic">[song_name]</span> column through the corresponding URL in the <span className="is-italic">[youtube_music_url]</span> column and converting to{' '}
              <span className="is-italic">WAV</span>
            </span>
            : To build a standardized audio collection for sonic feature extraction from <span className="is-italic">Essentia</span>, executing <span className="is-italic">wav_file_creation.py</span>{' '}
            on <span className="is-italic">survey_data_master_primary_feelings_mapped.csv</span> utilized <span className="is-italic">yt-dlp</span> to loop through the 45 remaining data rows and
            obtain compressed audio streams through the verified song URLs in the <span className="is-italic">[youtube_music_url]</span> column. To enforce consistent file input for sonic feature
            extraction from <span className="is-italic">Essentia</span>, <span className="is-italic">yt-dlp</span> dictated the underlying <span className="is-italic">FFmpeg</span> processing
            framework to post-process and transcode the compressed audio streams into uncompressed <span className="is-italic">WAV</span> files. The results were recorded to{' '}
            <span className="is-italic">survey_data_master_song_download.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">
              6. <span className="is-italic">Essentia</span> Sonic Feature Extraction, <span className="is-italic">Python</span> Program Execution, Calculating and recording 12 sonic scalar values for each
              of the 45 remaining data rows through accessing the <span className="is-italic">WAV</span> file referenced in the <span className="is-italic">[wav_filename]</span> column
            </span>
            : To build a collection of sonic features extracted from <span className="is-italic">Essentia</span>, executing <span className="is-italic">sonic_feature_extraction.py</span> on{' '}
            <span className="is-italic">survey_data_master_song_download.csv</span> obtained 12 native, low-level mathematical parameters. During the process, data transformation reduced thousands of
            frame-by-frame time-series measurements into scalar averages (<span className="is-italic">.mean</span>). The sonic features needed to create a consistent data matrix were recorded to{' '}
            <span className="is-italic">survey_data_master_sonic_feature_calculations.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">
              7. Sonic Feature Scalar Standardization, <span className="is-italic">Python</span> Program Execution, Standardizing the 12 sonic scalar values for each of the 45 remaining data rows
            </span>
            : To prepare the 12 sonic scalar values for correct rendering on the <span className="is-italic">PCA</span>, executing <span className="is-italic">sonic_feature_standardization.py</span>{' '}
            on <span className="is-italic">survey_data_master_sonic_feature_calculations.csv</span> looped through the 45 remaining data rows and applied a standardization operation to each of the
            sonic scalar values. The operation utilized a z-score normalization to transform each of the 12 sonic scalar values, assigning a mean of 0 and a standard deviation of 1. Since the{' '}
            <span className="is-italic">PCA</span> calculates variance according to magnitude, the geometric relationships between points are accurately presented. The results were recorded to{' '}
            <span className="is-italic">survey_data_master_sonic_feature_standardization.csv</span>.
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5 mb-1">
            <span className="has-text-weight-semibold">
              8. <span className="is-italic">PCA</span> Dimensionality Reduction, <span className="is-italic">Python</span> Program Execution, Compressing 12 multi-dimensional standardized sonic features
              into 2 static spatial dimensions (<span className="is-italic">pca_x</span> and <span className="is-italic">pca_y</span>) for <span className="is-italic">PCA</span> rendering
            </span>
            : To map multi-dimensional standardized sonic features onto a 2D scatter plot area, executing <span className="is-italic">calculate_pca_coordinates.py</span> on{' '}
            <span className="is-italic">survey_data_master_sonic_feature_standardization.csv</span> applied a linear dimensionality reduction. The reduction projected the 12 standardized sonic
            features recorded in <span className="is-italic">survey_data_master_sonic_feature_standardization.csv</span> onto an orthogonal subspace. Songs with highly similar underlying mathematical
            characteristics closely aggregate on the <span className="is-italic">PCA</span>. The results were recorded to <span className="is-italic">pca_matrix.json</span>.
          </Content>
        </main>
        <footer className="block mb-1">
          <Content size={5} className="is-family-secondary has-text-black p-5">
            <span className="is-italic">JavaScript</span>, <span className="is-italic">React</span>, and <span className="is-italic">D3</span> programs were implemented to load and render the
            corrected survey writing, <span className="is-italic">PCA</span> coordinates, and scaled sonic values stored in <span className="is-italic">pca_matrix.json</span> through the{' '}
            <span className="is-italic">PCA</span>.
          </Content>
        </footer>
      </div>
    </section>
  )
}

export default DataMethodologyPage
