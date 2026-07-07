# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney

## Technologies: Python, Pandas, yt-dlp, FFmpeg, Essentia Audio Analysis, PCA (Principal Component Analysis), Russell's Core Affect Framework

## Data Collection, Cleaning, and Processing Summary

The _Music Preferences And Feelings Survey_ was administered to a targeted 250 full-time employees in the United States through Survey Monkey from May 28th, 2026 - June 5th, 2026. A total of 275 survey responses from full-time employees were collected and downloaded to `music_preferences_and_feelings_survey_data_master_raw.csv`.

Since `music_preferences_and_feelings_survey_data_master_raw.csv` is a small dataset and contains open-response survey data that represents human thought and writing, steps are manually executed and executed through Python programs to build the succeeding CSV files:

1. V1: [Initial Quality Sweep - Manual Context Review, Establish Structural Baseline] -> `music_preferences_and_feelings_survey_data_master_cleaned_v1.csv`

2. V2: [Dataset Truncation (Simple Random Sampling) - Python Program Execution, Select Representative Subset of Dataset] -> `music_preferences_and_feelings_survey_data_master_cleaned_v2.csv`

3. V3: [Complete Quality Sweep & Song URL Insertion - Manual Context Review, Remove Invalid Data and Systematically Correct Information] -> `music_preferences_and_feelings_survey_data_master_cleaned_v3.csv`

4. V4: [Primary Feeling Mapping - Python Program Execution, Map each data cell in the [primary_feeling] column to a quadrant in Russell's Core Affect Framework] -> `music_preferences_and_feelings_survey_data_master_cleaned_v4.csv`

## Song Release Context

1. Songs are released to different audiences through the succeeding format groups:
    
    a. Primary Release Formats:
        
        I. Standard Recording LP (Long Play): A standard recording LP release is a complete presentation of songs frequently consisting of at least seven songs.
        
        II. Double LP (Double Long Play): A double LP release is a collection of two distinct volumes presented within one product. A double LP release is a standard recording LP release.
        
        III. Standard Recording EP (Extended Play): A standard recording EP release is a presentation of four to six songs.
        
        IV. Single: A single release is a presentation of one to three songs maintaining a focus on a lead promotional song.
        
        V. Maxi-single: A maxi-single release is a collection containing a lead promotional single and an array of remix recordings, instrumental recordings, and B-sides.
    
    b. Specialized Audio Edition Release and Re-release Formats:
        
        I. Deluxe: A deluxe release is an extended reissue of an existing standard recording LP containing bonus songs, demo songs, and B-sides.
        
        II. Remastered: A remastered release contains songs that are sonically optimized through contemporary technology, which frequently encompasses increasing volume and modifying dynamic range.
        
        III. Remixed: A remixed release contains songs that are completely rearranged, rebalanced, and sonically altered.
        
        IV. Anniversary Edition: An anniversary edition release is a collection of discs combining remastered songs from a standard recording LP with an array of live recordings, unreleased studio gatherings, books, and collectibles.
        
        V. Audiophile Pressing: An audiophile pressing release is a collection of songs measured through a specific manufacturing standard.
        
        VI. Spatial Mix: A spatial mix release is a collection of songs released through a multi-channel structure, which may include channels such as Dolby Atmos and Sony 360 Reality Audio.
    
    c. Specialized Compilation Release Formats:
        
        I. Sampler: A sampler release is a compilation built to present record label rosters and upcoming eras of music.
        
        II. Tribute: A tribute release is a compilation featuring different artists collaborating to record covers of songs written and performed by one artist.
        
        III. Split Release: A split release is a compilation containing songs from different artists.
        
        IV. Audio Demonstration: An audio demonstration release is a compilation created to evaluate the output of advanced audio equipment.
        
        V. Historical Anthology: A historical anthology release is a compilation aiming to keep record of geographic movements, musical movements, and timeframes with supporting documentation.
        
        VI. Greatest Hits: A greatest hits release is a collection of an artist's most successful songs.
        
        VII. Mixtapes: A mixtape release is a collection of songs released by different artists melded into a continuous audio stream.
    
    d. Soundtrack Release Formats:
        
        I. Original Motion Picture Soundtrack (OST): An OST release is a collection of songs presented throughout a particular media product. OSTs contain sourced songs and songs specifically produced for the particular media product.
        
        II. Original Score: An original score release only contains instrumental songs produced to synchronize with on-screen movement and build tone.
        
        III. Mixed Soundtrack: A mixed soundtrack release is a hybrid collection of sourced songs, songs specifically produced for a particular media product, and instrumental songs.
        
        IV. Cast Recordings: A cast recording release is a collection of songs capturing actors performing musical numbers presented in a particular production.
        
        V. Inspirational Recordings: An inspirational recording release is a collection of songs that accompanies a particular media product. The songs are inspired by the concept and characters of the particular media product. The collection of songs frequently functions as a marketing effort to promote the release of the particular media product. 
    
    e. Alternative Performance and Recording Release Formats:
        
        I. Acoustic: An acoustic release is a collection of songs presenting simplified instrumentation utilizing acoustic equipment.
        
        II. Unplugged: An unplugged release is a type of acoustic performance recorded in a live setting with an audience.
        
        III. Live: A live release is a collection of audio captured from a performance, which contains room acoustics, audience sounds, and real-time differences from recorded songs.
        
        IV. Cover: A cover release is a recording of a song originally written, recorded, and performed by a different artist.
        
        V. Demo Recording: A demo release is a collection of songs presenting sparse production.
        
        VI. Mashup: A mashup release is a recording presenting multiple songs sonically combined to create a new song.

2. A standard recording LP release is the official version of a Long Play.

3. A standard recording EP release is the official version of an Extended Play.

4. An official release of a song is an Audio Object in YouTube Music, which is different from a Music Video Object in YouTube Music. A song is officially released through any one of the release format groups detailed in Item 1. A song is not officially released as a music video.

5. There is some probability that the release of a song in one particular format contains different engineering output and musical qualities compared to the release of a song in a different particular format.

6. An original release of a song is the release format where the song is first available. A song is first available through one of the release format groups detailed in Item 1.

## Data Correction Measures

1. Execute Steps 2-4 to achieve all of the succeeding measures:
    
    a. A song officially and originally released by the artist where the intention of the respondent is completely clear in the [song_name] and [artist_name] response columns.
    
    b. A primary feeling that is one word, completely grammatically correct, reasonably reflects natural speech, and communicates an understandable meaning where the intention of the respondent is reasonably clear in the [primary_feeling] response column.

2. Correct song, artist, and primary feeling writing for formatting accuracy when there is a completely clear formatting issue:
    
    a. Example: Changing a song with a leading space, " 7 Words" to a song without a leading space, "7 Words".

3. Correct song, artist, and primary feeling writing for logical accuracy when there is a completely clear logical issue:
    
    a. Example: Changing an artist from “DeFTONes” to “Deftones”.

4. Correct primary feeling writing for concision, grammar, natural speech, and clarity -> 
    
    a. When at least one of the succeeding conditions is satisfied:
        
        I. Concision: The word count of the primary feeling writing exceeds one word.
        
        II. Grammar: The primary feeling writing is not completely grammatically correct.
        
        III. Natural Speech: The primary feeling writing does not reasonably reflect natural speech.
        
        IV. Clarity: The primary feeling writing communicates a meaning with reasonable clarity, and there is sufficient written context to substitute with one word that communicates an understandable meaning where the intention of the respondent is reasonably clear in the [primary_feeling] response column.
    
    b. Examples: 
        
        I. Concision Correction: Changing a primary feeling from "I feel like a surge of electricity bouncing through the house." to "Energized".
        
        II. Grammar Correction: Changing a primary feeling from "Saddening" to "Sad".
        
        III. Natural Speech Correction: Changing a primary feeling from "Happiness" to "Happy". 
        
        IV. Concision and Clarity Correction: Changing a primary feeling from "I feel happy, sad, and angry simultaneously." to "Ambivalent".

## Data Research Questions

1. Through what release format was the song officially and originally released?

2. Is the current release format (rendered in YouTube Music) the official and original release of the song?

3. For Questions 4-6, reference the succeeding definitions:
    
    a. A particular release that maintains the original count, list, and ordering of songs for the release format is structurally correct.

    b. A particular release that does not maintain the original count, list, and ordering of songs for the release format is structurally incorrect.

4. If the song was officially and originally released through a standard recording LP, then ->
    
    a. Is the standard recording LP containing the official song accessible in YouTube Music? If so, is the standard recording LP containing the official song structurally correct?

    b. If the song was also officially released within a standard recording EP, is the standard recording EP containing the official song accessible in YouTube Music? If so, is the standard recording EP containing the official song structurally correct?
    
    c. If the song was also officially released within a single, is the single accessible in YouTube Music? If so, is the single containing the official song structurally correct?

5. If the song was officially and originally released through a standard recording EP, then ->
    
    a. Is the standard recording EP containing the official song accessible in YouTube Music? If so, is the standard recording EP containing the official song structurally correct?
    
    b. If the song was also officially released within a standard recording LP, is the standard recording LP containing the official song accessible in YouTube Music? If so, is the standard recording LP containing the official song structurally correct?
    
    c. If the song was also officially released within a single, is the single accessible in YouTube Music? If so, is the single containing the official song structurally correct?

6. If the song was officially and originally released through a single, then ->
    
    a. Is the single accessible in YouTube Music? If so, is the single containing the official song structurally correct?
    
    b. If the song was also officially released within a standard recording EP, is the standard recording EP containing the official song accessible in YouTube Music? If so, is the standard recording EP containing the official song structurally correct?
    
    c. If the song was also officially released within a standard recording LP, is the standard recording LP containing the official song accessible in YouTube Music? If so, is the standard recording LP containing the official song structurally correct?

## Data Evaluation Measures

1. Sufficient data in YouTube Music achieves at least one of the succeeding findings:

    a. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the official song is accessible in YouTube Music. 

    b. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the official song is not accessible in YouTube Music. The song was also officially released within a standard recording EP, and the official, structurally correct standard recording EP containing the official song is accessible in YouTube Music.

    c. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the official song is not accessible in YouTube Music. The song was also officially released as a single, and the official, structurally correct single containing the official song is accessible in YouTube Music.
        
    d. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the official song is accessible in YouTube Music.

    e. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the official song is not accessible in YouTube Music. The song was also officially released within a standard recording LP, and the official, structurally correct standard recording LP containing the official song is accessible in YouTube Music.

    f. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the official song is not accessible in YouTube Music. The song was also officially released as a single, and the official, structurally correct single containing the official song is accessible in YouTube Music.

    g. The song was officially and originally released as a single, and the official, structurally correct single release containing the official song is accessible in YouTube Music.

    h. The song was officially and originally released as a single, and the official, structurally correct single release containing the official song is not accessible in YouTube Music. The song was also officially released within a standard recording EP, and the official, structurally correct standard recording EP containing the official song is accessible in YouTube Music.

    i. The song was officially and originally released as a single, and the official, structurally correct single release containing the official song is not accessible in YouTube Music. The song was also officially released within a standard recording LP, and the official, structurally correct standard recording LP containing the official song is accessible in YouTube Music.

2. Insufficient data in YouTube Music achieves at least one of the succeeding findings:

    a. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the official song is not accessible in YouTube Music. There is no official, structurally correct standard recording EP release containing the official song accessible in YouTube Music, and there is no official, structurally correct single release containing the official song accessible in YouTube Music.

    b. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the official song is not accessible in YouTube Music. There is no official, structurally correct standard recording LP release containing the official song accessible in YouTube Music, and there is no official, structurally correct single release containing the official song accessible in YouTube Music.

    c. The song was officially and originally released within a single, and the official, structurally correct single release containing the official song is not accessible in YouTube Music. There is no official, structurally correct standard recording EP release containing the official song accessible in YouTube Music, and there is no official, structurally correct standard recording LP release containing the official song accessible in YouTube Music.
    
## Song Selection Method

1. To guarantee a fair procedure for sonic feature extraction throughout all songs, only URLs for official, earliest accessible song releases through structurally correct standard recording LPs, standard recording EPs, and singles are obtained from YouTube Music. Standard recording LPs, standard recording EPs, and singles represent the primary initiatives where song writing, recording, and arrangement is purposeful and originally produced for a comprehensive listening experience. Conversely, release formats belonging to the specialized audio editions and re-release, specialized compilation, soundtrack, and alternative performance and recording groups represent secondary initiatives that differ from the established selection method. Restricting the pipeline to consume song releases from structurally correct standard recording LPs, standard recording EPs, and singles creates a sonic control variable. The restriction equips the PCA Plot clustering to reflect differences in musical qualities with greater accuracy rather than differences in release formats and engineering output. The PCA Plot presents reasonably accurate sonic representations of each selected song.

## Pipeline Limitations

1. The survey population is bounded completely to full-time employees in the United States. This constraint creates a sampling selection bias, which structurally omits demographics with different music preferences such as full-time students, part-time students, part-time employees, and retired individuals. Consequently, all data points rendered in the PCA Plot reflect the music preferences of a subset of the full-time employee demographic in the United States rather than a general demographic in the United States.

2. The yt-dlp Python library is utilized to download and extract compressed audio from YouTube Music. Subsequently, yt-dlp uses FFmpeg to transform the compressed audio into an uncompressed WAV file. There is some probability that the subset of selected songs are associated with WAV files containing different levels of distortion. When distortion is present in an uncompressed WAV file, there is also some probability that high-frequency overtones (harmonic distortion), Harmonic-to-Noise Ratio (HNR), and compression of dynamic range manipulate the digital audio signal. As a result, data clustering in the PCA Plot may partially reflect manipulated musical qualities that do not accurately represent the authentic musical qualities of some songs.

3. By utilizing untampered WAV files through standard recording LPs, standard recording EPs, and singles, the Essentia sonic feature extraction process introduces a systematic production bias. Since standard recording LPs, standard recording EPs, and singles frequently experience differing mastering procedures and structural modifications, the resulting Essentia sonic features represent differences in release format and engineering output as well as the musical qualities of the songs. Consequently, data clustering in the PCA Plot may partially group songs based on release format and engineering output rather than similar musical qualities.

4. There is some probability that a subset of the selected songs from the full-time employee respondent pool are not accessible in YouTube Music as a result of regional licensing restrictions. Although YouTube Music functions globally, distribution contracts function regionally, which means that the extent of official release accessibility relies on the location of the user. Consequently, data clustering in the PCA Plot may not present songs that are only accessible in YouTube Music to a subset of regions.

5. When YouTube Music offers certain standard recording LPs, standard recording EPs, and singles containing songs that also have been altered for secondary initiatives, there is some probability that the audio streamed through this particular subset of standard recording LPs, standard recording EPs, and singles is sourced from altered modifications of the songs. The acquisition of songs from standard recording LPs, standard recording EPs, and singles in YouTube Music also creates a systematic production bias. Consequently, data clustering in the PCA Plot may partially group songs based on engineering output rather than similar musical qualities.

6. When YouTube Music offers certain standard recording LPs, standard recording EPs, and singles, there is some probability that duplicates of these official releases are also accessible. YouTube Music provides duplicates of standard recording LPs, standard recording EPs, and singles when the distributor resends the official release with updated information. There is also some probability that at least one of the duplicates is structurally incorrect and contains songs altered for secondary initiatives. Consequently, data clustering in the PCA Plot may partially group songs based on engineering output rather than similar musical qualities.

## Applying Russell's Core Affect Framework

1. To provide a method for understanding the creation of feelings in comparison to sonic features extracted from Essentia, each corrected primary feeling in the resulting set of usable data rows is mapped to one of the four quadrants in Russell's Core Effect Framework. Functioning as a reliable system for describing the creation of feelings, Russell's Core Effect Framework communicates that all human emotions are almagamations of Valence and Arousal, which are essential neurophysiological dimensions. Valence measures the extent of pleasure and displeasure, and Arousal measures the extent of activation and deactivation. Valence maps to the x-axis where values range from highly unpleasant to highly pleasant, and Arousal maps to the y-axis where values range from highly enervated to highly energized. Moving through the Valence and Arousal neurophysiological dimensions builds a circular space mapping different feelings to the succeeding quadrants:

    a. Quadrant 1 (Top-Right): High Arousal + Positive Valence

    b. Quadrant 2 (Top-Left): High Arousal + Negative Valence

    c. Quadrant 3 (Bottom-Left): Low Arousal + Negative Valence

    d. Quadrant 4 (Bottom-Right): Low Arousal + Positive Valence

---

## [2026-6-29 - V1] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preferences_and_feelings_survey_data_master_raw.csv` -> `music_preferences_and_feelings_survey_data_master_cleaned_v1.csv`
- **Data Shape Change:** 277 rows (2 header rows + 275 data rows) * 19 columns -> 276 (1 header row + 275 data rows) rows * 3 columns
- **Purpose:** [Initial Quality Sweep - Manual Context Review, Establish Structural Baseline]
- **Initial Raw Submissions:** 275 total survey responses

### Steps Executed:

1. **[Removal and Schema Renaming]** Deleted 16 columns and renamed the 3 remaining survey response columns to standard identifiers:
   a. [Song Name] -> [song_name]
   b. [Artist Name] -> [artist_name]
   c. [Open-Ended Response] -> [primary_feeling]
2. **[Removal]** Deleted 1 filler row (Row 1) containing survey question column names [What is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling.], [What is the primary feeling that your favorite song creates within you? Please enter only one feeling and use correct spelling.].
3. **[Correction]** Standardized 22 null values to display NA.

---

## [2026-6-30 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preferences_and_feelings_survey_data_master_cleaned_v1.csv` -> `music_preferences_and_feelings_survey_data_master_cleaned_v2.csv`
- **Data Shape Change:** 276 (1 header row + 275 data rows) rows * 3 columns -> 86 (1 header row + 85 data rows) rows * 3 columns
- **Purpose:** [Dataset Truncation (Simple Random Sampling) - Python Program Execution, Select Representative Subset of Dataset]
- **Methodology:** To maintain an efficient data cleaning workflow and provide an unbiased, representative subset of the full-time employee respondent pool, a Simple Random Sampling method was applied. Executing `simple_random_sampling.py` with a constant random seed (random_state=75) to enforce reproducibility, 85 unique survey responses were randomly selected from the 275 data rows following the *Initial Quality Sweep* in V1. The sample size represents approximately 30.9% of the full-time employee respondent pool, which asserts a 95% confidence level and a margin of error less than 9%. All non-selected responses were omitted from this phase of analysis.
- **Resulting Batch Size:** 85 data rows

### Steps Executed:

1. **[Removal]** Executed `simple_random_sample.py` to randomly select 85 unique survey responses from the 275 data rows, omitting 190 remaining data rows.

---

## [2026-7-3 - V3] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preferences_and_feelings_survey_data_master_cleaned_v2.csv` -> `music_preferences_and_feelings_survey_data_master_cleaned_v3.csv`
- **Data Shape Change:** 86 (1 header row + 85 data rows) rows * 3 columns -> 46 (1 header row + 45 data rows) rows * 4 columns
- **Purpose:** [Complete Quality Sweep & Song URL Insertion - Manual Context Review, Remove Invalid Data and Systematically Correct Information]
- **Statistical Acknowledgement**: While the 85 data rows sampled during the *Dataset Truncation (Simple Random Sampling)* in V2 establishes a 95% confidence level and margin of error less than 9% for the full-time employee pool, the rigid domain constraints enforced in V3 decreased the usable data rows to 45. The resulting PCA Plot operates as an exploratory subset of the 85 sampled data rows.

### Steps Executed:

1.   **[Addition]** Appended 1 new column, [youtube_music_url], to record the YouTube Music song URLs for all remaining valid [song_name], [artist_name], and [primary_feeling] row groupings to establish a process control variable for downloading corresponding WAV files from YouTube Music.
2.   **[Complete Quality Sweep]** Processed remaining 85 rows to remove invalid data and systematically correct information:

     a. [Removal] 1 row deleted because the song, artist, and primary feeling contained exclusively NA values.

     b. [Removal] 26 rows deleted because although the song, artist and primary feeling did not contain exclusively NA values, the song, artist, and primary feeling lacked sufficient written context to achieve both of the succeeding measures as presented in *Data Correction Measures*:

        I. A song officially and originally released by the artist where the intention of the respondent is completely clear in the [song_name] and [artist_name] response columns.

        II. A primary feeling that is one word, completely grammatically correct, reasonably reflects natural speech, and communicates an understandable meaning where the intention of the respondent is reasonably clear in the [primary_feeling] response column.

     c. [Removal] 3 rows deleted because although there was sufficient written context to verify that the artist officially and originally released the song, the artist did not officially and originally release the song through any of the succeeding formats:

        I. Standard Recording LP
        
        II. Standard Recording EP

        III. Single

     d. [Removal] 9 rows deleted because although there was sufficient written context to verify that the artist officially and originally released the song within a standard recording LP, standard recording EP, or as a single, the song and artist grouping is connected to insufficient data in YouTube Music as presented in *Data Research Questions* and *Data Evaluation Measures*.

     e. [Removal] 1 row deleted because although there was sufficient written context to verify that the artist officially and originally released the song within a standard recording LP, standard recording EP, or as a single, and the song and artist grouping is connected to sufficient data in YouTube Music as presented in *Data Research Questions* and *Data Evaluation Measures*, the song and artist grouping is a duplication of a song and artist grouping corrected prior in the *Complete Quality Sweep*.

     f. [Correction] Corrected information in [song_name], [artist_name] and [primary_feeling] columns for 45 remaining rows in the sequence.

     g. [Addition] Added the YouTube Music song URL in the [youtube_music_url] column for 45 remaining rows in the sequence.

---

## [2026-7-5 - V4] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preferences_and_feelings_survey_data_master_cleaned_v3.csv` -> `music_preferences_and_feelings_survey_data_master_cleaned_v4.csv`
- **Data Shape Change:** 46 (1 header row + 45 data rows) rows * 4 columns -> 46 (1 header row + 45 data rows) rows * 5 columns
- **Purpose:** [Primary Feeling Mapping - Python Program Execution, Map each corrected primary feeling in the [primary_feeling] column to one of the four quadrants established in Russell's Core Affect Framework]
- **Methodology:** To provide a method for understanding the creation of feelings in comparison to sonic features extracted from Essentia, executing `primary_feeling_quadrant_mapping.py` maps each corrected primary feeling in the [primary_feeling] column to one of the four quadrants established in Russell's Core Affect Framework as described in *Applying Russell's Core Affect Framework*. Valence maps to the x-axis. Arousal maps to the y-axis. Through examining the coordinates of Valence and Arousal, emotional qualities are categorically represented within the spatial geometry of the PCA Plot.

### Steps Executed:

1. **[Addition]** Appended 1 new column, [core_affect_quadrant], to represent the categorical coordinate mapping for each corresponding primary feeling.

2. **[Mapping Execution]** Executed the `primary_feeling_quadrant_mapping.py` program to assign each of the 45 corrected primary feelings in the [primary_feeling] column to one of the four quadrants in Russell's Core Affect Framework:

    a. Quadrant 1 (Top-Right): High Arousal + Positive Valence

    b. Quadrant 2 (Top-Left): High Arousal + Negative Valence

    c. Quadrant 3 (Bottom-Left): Low Arousal + Negative Valence

    d. Quadrant 4 (Bottom-Right): Low Arousal + Positive Valence

3. **[Integrity Verification]** Verified that complex primary feelings (such as the corrected "Awestruck", and "Melancholic") are evaluated through specific research as a means of preventing skewed categorical representation in the PCA Plot.

---

## [2026-7-6 - V5] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preferences_and_feelings_survey_data_master_cleaned_v4.csv` -> `music_preferences_and_feelings_survey_data_master_cleaned_v5.csv`
- **Data Shape Change:** 46 (1 header row + 45 data rows) rows * 5 columns -> 46 (1 header row + 45 data rows) rows * _ columns
- **Purpose:** []
- **Methodology:**
