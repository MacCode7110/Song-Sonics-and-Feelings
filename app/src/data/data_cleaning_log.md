# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney

## Technologies: Python, Pandas, yt-dlp, FFmpeg, Essentia Audio Analysis, PCA (Principal Component Analysis)

## Data Collection, Cleaning, and Processing Summary

The _Music Preferences And Feelings Survey_ was administered to a targeted 250 full-time employees in the United States through Survey Monkey from May 28th, 2026 - June 5th, 2026. A total of 275 survey responses from full-time employees were collected and downloaded to `music_preferences_and_feelings_survey_data_master_raw.csv`.

Since `music_preferences_and_feelings_survey_data_master_raw.csv` is a small dataset and contains open-response survey data that represents human thought and writing, steps are manually executed and executed through Python programs to build the succeeding CSV files:

1. V1: [Initial Quality Sweep - Manual Context Review, Establish Structural Baseline] -> `music_preferences_and_feelings_survey_data_master_cleaned_v1.csv`

2. V2: [Dataset Truncation (Simple Random Sampling) - Python Program Execution, Select Representative Subset of Dataset] -> `music_preferences_and_feelings_survey_data_master_cleaned_v2.csv`

3. V3: [Complete Quality Sweep - Manual Context Review, Remove Invalid Data and Systematically Correct Information] -> `music_preferences_and_feelings_survey_data_master_cleaned_v3.csv`

## Music Release Context

    1. Music is released to different audiences through the following format groups:
        a. Primary Release Formats:
            I. Standard Recording LP (Long Play): A full-length presentation of songs, which usually consists of at least seven songs.
            II. Double LP (Double Long Play): A collection consisting of a pair of distinct volumes released within the same product. A Double LP is a standard recording LP.
            III. Standard Recording EP (Extended Play): Usually consists of four to six songs and is longer than a single.
            IV. Single: Usually consists of one to three songs with a focus on a lead promotional song.
            V. Maxi-single: A specific collection frequently utilized in Dance, Electronic, and Hip Hop music that contains a lead single and an array of remix recordings, instrumental recordings, and B-sides.
        b. Specialized Audio Editions and Re-release Formats:
            I. Deluxe: An extended reissue of an existing standard recording LP containing bonus songs, demo songs, and/or b-side songs.
            II. Remastered: A song that is sonically optimized through contemporary technology, which usually encompasses increasing volume and modifying dynamic range.
            III. Remixed: A song where the original stems are completely rearranged, rebalanced, or sonically altered.
            IV. Anniversary Edition: A collection of multiple discs combining remastered modifications of songs from a standard recording LP with an array of live recordings, unreleased studio gatherings, books, and collectibles.
            V. Audiophile Pressing: Collections defined by a specific manufacturing standard as opposed to song makeup.
            VI. Spatial Mix: A collection of songs released through a multi-channel structure, which may include channels such as Dolby Atmos and Sony 360 Reality Audio as examples.
        c. Specialized Compilation Formats:
            I. Sampler: A compilation constructed to present a record label artist roster or an upcoming era of music.
            II. Tribute: A compilation where multiple artists collaborate to record covers of songs written and performed by a single artist.
            III. Split Release: A compilation containing tracks from two-three individual artists.
            IV. Audio Demonstration: Compilations created to evaluate the results of advanced audio equipment.
            V. Historical Anthology: A historical compilation aiming to keep record of a specific geographic movement, musical movement, or timeframe frequently with supporting documentation.
            VI. Greatest Hits: A collection containing an artist's most successful songs since the beginning of their career.
            VII. Mixtapes: A collection that contains songs frequently released by multiple artists melded into a continuous audio stream. Mixtapes commonly encompass Hip Hop, Electronic, and Urban music.
        d. Soundtrack Formats:
            I. Original Motion Picture Soundtrack (OST): A collection of songs presented throughout a media product. OSTs frequently contain sourced songs and songs specifically produced for the media product.
            II. Original Score: Consists only of background instrumental songs produced to synchronize with on-screen movement and build tone. At least one composer executes the production. The production frequently contains electronic, ambient, and orchestral elements.
            III. Mixed Soundtrack: Hybrid collections that contain both sourced and/or specifically produced songs for the media product and a subset of instrumental songs.
            IV. Cast Recordings: Studio and/or live recordings of the actors performing the musical numbers featured in a distinct production.
            V. Inspirational Recordings: Recordings that accompany a media product and may contain songs that do not feature in the media product. The particular songs are inspired by the concept and/or characters of the media product. The recording frequently operates as a marketing effort to accompany the release of the media product. 
        e. Alternative Performance and Recording Formats:
            I. Acoustic: Features simplified instrumentation, which encompasses acoustic equipment rather than electronic equipment.
            II. Unplugged: A particular subset of acoustic performance recorded live facing an audience.
            III. Live: Audio captured directly from a performance, which consists of room acoustics, audience sounds, and real-time differences from recorded songs.
            IV. Cover: A distinct recording of a song originally written and performed by a different artist.
            V. Demo Recording: A collection presenting raw songs with sparse production.
            VI. Mashup: A recording where at least two songs are sonically combined to construct a new song.

    2. A standard recording LP is the official version of a Long Play.

    3. A standard recording EP is the official version of an Extended Play.

    4. An official release of a song is an Audio Object in YouTube Music, which is different from a Music Video Object in YouTube Music. A song is officially released through any one of the release format groups detailed in Item 1. A song is not officially released as a music video.

    5. There is some probability that the release of a song in one particular format contains different engineering output and musical qualities compared to the release of a song in a different particular format.

    6. An original release of a song is the release format where the song is first available. A song is first available through any one of the release format groups detailed in Item 1.

    7. Later pressings of an original release format that are renamed qualify as the original release format.

## Data Correction Measures

    1. Correct song, artist, and primary feeling writing for formatting accuracy when there is a completely clear formatting issue:
        a. Example: Changing a song with a leading space, " 7 Words" to a song without a leading space, "7 Words".

    2. Correct song, artist, and primary feeling writing for logical accuracy when there is a completely clear logical issue:
        a. Example: Changing an artist from “DeFTONes” to “Deftones”.

    3. Correct primary feeling writing for concision, grammar, natural speech, and clarity -> 
        a. When at least one of the succeeding conditions is satisfied:
            I. Concision: The word count of the primary feeling writing exceeds one word.
            II. Grammar: The primary feeling writing is not completely grammatically correct.
            III. Natural Speech: The primary feeling writing does not completely reflect natural speech.
            IV. Clarity: The primary feeling writing communicates a meaning with partial clarity, and there is sufficient written context to substitute with one word that communicates a completely understandable, reasonably accurate meaning.
        b. Examples: 
            I. Concision Correction: Changing a primary feeling from "I feel like a surge of electricity bouncing through the house." to "Energized".
            II. Grammar Correction: Changing a primary feeling from "Saddening" to "Sad".
            III. Natural Speech Correction: Changing a primary feeling from "Happiness" to "Happy". 
            IV. Concision and Clarity Correction: Changing a primary feeling from "I feel happy, sad, and angry simultaneously." to "Ambivalent".

## Data Research Questions

    1. Through what release format was the song officially and originally released?

    2. Is the current release format (rendered in YouTube Music) the official and original release of the song?

    For questions 3-5, reference the succeeding definitions:

        1. A particular release that maintains the original count, list, and ordering of songs for the release format is structurally correct.
        
        2. A particular release that does not maintain the original count, list, and ordering of songs for the release format is structurally incorrect.

    3. If the song was officially and originally released through a standard recording LP, then ->
        a.  Is the standard recording LP containing the song in YouTube Music? If so, is the standard recording LP containing the song structurally correct?
        b. If the song was also officially released within a standard recording EP, is the standard recording EP containing the song in YouTube Music? If so, is the standard recording EP containing the song structurally correct?
        c. If the song was also officially released within a single, is the single in YouTube Music? If so, is the single structurally correct?

    4. If the song was officially and originally released through a standard recording EP, then ->
        a.  Is the standard recording EP containing the song in YouTube Music? If so, is the standard recording EP containing the song structurally correct?
        b. If the song was also officially released within a standard recording LP, is the standard recording LP containing the song in YouTube Music? If so, is the standard recording LP containing the song structurally correct?
        c. If the song was also officially released within a single, is the single in YouTube Music? If so, is the single structurally correct?

    5. If the song was officially and originally released through a single, then ->
        a.  Is the single in YouTube Music? If so, is the single structurally correct?
        b. If the song was also officially released within a standard recording EP, is the standard recording EP containing the song in YouTube Music? If so, is the standard recording EP containing the song structurally correct?
        c. If the song was also officially released within a standard recording LP, is the standard recording LP containing the song in YouTube Music? If so, is the standard recording LP containing the song structurally correct?

## Data Evaluation Measures

    1. Sufficient data in YouTube Music achieves at least one of the succeeding findings:

        I. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the song is in YouTube Music. If the song was also officially released within a standard recording EP and the release is in YouTube Music, then the official standard recording EP containing the song in YouTube Music is structurally correct. If the song was also officially released as a single and the release is in YouTube Music, then the official single in YouTube Music is structurally correct.

        II. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the song is not in YouTube Music. The song was also officially released within a standard recording EP, and the official, structurally correct standard recording EP containing the song is in YouTube Music.

        III. The song was officially and originally released within a standard recording LP, and the official, structurally correct standard recording LP release containing the song is not in YouTube Music. The song was also officially released as a single, and the official, structurally correct single is in YouTube Music.
        
        IV. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the song is in YouTube Music. If the song was also officially released within a standard recording LP and the release is in YouTube Music, then the standard recording LP containing the song in YouTube Music is structurally correct. If the song was also officially released as a single and the release is in YouTube Music, then the official single in YouTube Music is structurally correct.

        V. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the song is not in YouTube Music. The song was also officially released within a standard recording LP, and the official, structurally correct standard recording LP containing the song is in YouTube Music.

        VI. The song was officially and originally released within a standard recording EP, and the official, structurally correct standard recording EP release containing the song is not in YouTube Music. The song was also officially released as a single, and the official, structurally correct single is in YouTube Music.

        VII. The song was officially and originally released as a single, and the official, structurally correct single release containing the song is in YouTube Music. If the song was also officially released within a standard recording EP and the release is in YouTube Music, then the official standard recording EP containing the song in YouTube Music is structurally correct. If the song was also officially released as a standard recording LP and the release is in YouTube Music, then the official, standard recording LP containing the song in YouTube Music is structurally correct.

        VIII. The song was officially and originally released as a single, and the official, structurally correct single release containing the song is not in YouTube Music. The song was also officially released within a standard recording EP, and the official, structurally correct standard recording EP containing the song is in YouTube Music.

        IX. The song was officially and originally released as a single, and the official, structurally correct single release containing the song is not in YouTube Music. The song was also officially released within a standard recording LP, and the official, structurally correct standard recording LP containing the song is in YouTube Music.

    2. Insufficient data in YouTube Music achieves at least one of the succeeding findings:

        I. The song was officially and originally released within a standard recording LP, and there is at least one official, structurally incorrect standard recording LP release containing the song that is in YouTube Music.
        
        II. The song was officially and originally released within a standard recording LP, and there is at least one official, structurally incorrect standard recording EP release containing the song that is in YouTube Music.

        III. The song was officially and originally released within a standard recording LP, and there is at least one official, structurally incorrect single release that is in YouTube Music.

        IV. The song was officially and originally released within a standard recording EP, and there is at least one official, structurally incorrect standard recording EP release containing the song that is in YouTube Music.
        
        V. The song was officially and originally released within a standard recording EP, and there is at least one official, structurally incorrect standard recording LP release containing the song that is in YouTube Music.

        VI. The song was officially and originally released within a standard recording EP, and there is at least one official, structurally incorrect single release containing the song that is in YouTube Music.

        VII. The song was officially and originally released within a single, and there is at least one official, structurally incorrect single release containing the song that is in YouTube Music.
        
        VIII. The song was officially and originally released within a single, and there is at least one official, structurally incorrect standard recording EP release containing the song that is in YouTube Music.

        IX. The song was officially and originally released within a single, and there is at least one official, structurally incorrect standard recording LP release containing the song that is in YouTube Music.
    
## Song Identification Method

To guarantee a fair procedure for sonic feature extraction throughout all songs, only official song releases through structurally correct standard recording LPs, standard recording EPs, and singles are obtained from YouTube Music. Structurally correct standard recording LPs, standard recording EPs, and singles represent the primary initiatives where song writing, recording, and arrangement is purposeful and originally produced for a comprehensive listening experience. Conversely, release formats belonging to the specialized audio editions and re-release, specialized compilation, soundtrack, and alternative performance and recording groups represent secondary initiatives that differ from the established identification method. Restricting the pipeline to consume song releases from structurally correct standard recording LPs, standard recording EPs, and singles creates a sonic control variable. The restriction equips the PCA Plot clustering to reflect differences in musical qualities with greater accuracy rather than differences in release formats and engineering output. The PCA Plot presents unique sonic representations of each selected song.

## Pipeline Limitations

1. The survey population is bounded completely to full-time employees in the United States. This constraint creates a sampling selection bias, which structurally omits demographics with different music preferences such as full-time students, part-time students, part-time employees, and retired individuals. Consequently, all data points rendered in the PCA Plot reflect the music preferences of a subset of the full-time employee demographic in the United States rather than a general demographic in the United States.

2. The yt-dlp Python library is utilized to download and extract the highest quality available compressed audio from YouTube Music. Subsequently, yt-dlp uses FFmpeg to transform the compressed audio into an uncompressed WAV file. There is some probability that the subset of selected songs are associated with WAV files containing different levels of distortion. When distortion is present in an uncompressed WAV file, there is also some probability that high-frequency overtones (harmonic distortion), Harmonic-to-Noise Ratio (HNR), and compression of dynamic range manipulate the digital audio signal. As a result, data clustering in the PCA Plot may partially reflect manipulated musical qualities that do not accurately represent the authentic musical qualities of some songs.

3. By utilizing untampered WAV files through standard recording LPs, standard recording EPs, and singles, the Essentia sonic feature extraction process introduces a systematic production bias. Since standard recording LPs, standard recording EPs, and singles frequently experience differing mastering procedures and structural modifications, the resulting Essentia sonic features represent differences in release format and engineering output as well as the musical qualities of the songs. Consequently, data clustering in the PCA Plot may partially group songs based on release format and engineering output rather than similar musical qualities.

4. There is some probability that a subset of the selected songs from the full-time employee respondent pool are not offered in YouTube Music as a result of regional liscensing restrictions. Although YouTube Music functions globally, distribution contracts function regionally, which means that the extent of official release accessibility relies on the location of the user. Consequently, data clustering in the PCA Plot may not present songs that are only offered in YouTube Music to a subset of regions.

5. When YouTube Music offers certain standard recording LPs, standard recording EPs, and singles containing songs that also have been altered for secondary initiatives, there is some probability that the audio streamed through this particular subset of standard recording LPs, standard recording EPs, and singles is sourced from altered modifications of the songs. The acquisition of songs from standard recording LPs, standard recording EPs, and singles in YouTube Music also creates a systematic production bias. Consequently, data clustering in the PCA Plot may partially group songs based on engineering output rather than similar musical qualities.

6. When YouTube Music offers certain standard recording LPs, standard recording EPs, and singles, there is some probability that duplicates of these official releases are also offered. YouTube Music provides duplicates of standard recording LPs, standard recording EPs, and singles when the distributor resends the official release with updated information. There is also some probability that at least one of the duplicates is structurally incorrect and contains songs altered for secondary initiatives. Consequently, data clustering in the PCA Plot may partially group songs based on engineering output rather than similar musical qualities.

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
- **Methodology:** To maintain an efficient data cleaning workflow and provide an unbiased, representative subset of the full-time employee respondent pool, a Simple Random Sampling method was applied. Using the `simple_random_sampling.py` Python program with a constant random seed (random_state=75) to enforce reproducibility, 85 unique survey responses were randomly selected from the 275 data rows following the *Initial Quality Sweep* in V1. The sample size represents approximately 30.9% of the full-time employee respondent pool, which asserts a 95% confidence level and a margin of error less than 9%. All non-selected responses were omitted from this phase of analysis.
- **Resulting Batch Size:** 85 data rows

### Steps Executed:

1. **[Removal]** Executed `simple_random_sample.py` to randomly select 85 unique survey responses from the 275 data rows, omitting 190 remaining data rows.

---

## [2026-7-2 - V3] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preferences_and_feelings_survey_data_master_cleaned_v2.csv` -> `music_preferences_and_feelings_survey_data_master_cleaned_v3.csv`
- **Data Shape Change:** 86 (1 header row + 85 data rows) rows * 3 columns -> _ rows * 3 columns
- **Purpose:** [Complete Quality Sweep - Manual Context Review, Remove Invalid Data and Systematically Correct Information]
- **Statistical Acknowledgement**: While the 85 data rows sampled during the *Dataset Truncation (Simple Random Sampling)* in V2 establishes a 95% confidence level and margin of error less than 9% for the full-time employee pool, the rigid domain constraints enforced in V3 decreased the usable data rows to _. The resulting PCA Plot operates as an exploratory subset of the 85 sampled data rows.

### Steps Executed:

1.   **[Complete Quality Sweep]** Processed remaining 85 rows to remove invalid data and systematically correct information:

     a. [Removal] _ row deleted because the song, artist, and primary feeling contained exclusively NA values.

     b. [Removal] 3 rows deleted because although the song, artist and primary feeling did not contain exclusively NA values, the song, artist, and primary feeling lacked sufficient written context to achieve both of the succeeding measures as detailed in *Data Correction Measures*:

        I. A song officially and originally released by the artist where the intention of the respondent is completely clear in the written response.

        II. A primary feeling that is one word, completely grammatically correct, completely reflects natural speech, and communicates a completely understandable, reasonably accurate meaning.

     c. [Removal] _ rows deleted because although there was sufficient written context to verify that the artist officially and originally released the song, the artist did not officially and originally release the song through any of the succeeding formats:

        I. Standard Recording LP
        
        II. Standard Recording EP

        III. Single

     d. [Removal] _ rows deleted because although there was sufficient written context to verify that the artist officially and originally released the song within a standard recording LP, Standard recording EP, or as a single, the song and artist pairing is connected to insufficient data in YouTube Music as detailed in *Data Research Questions* and *Data Evaluation Measures*.

     e. [Removal] _ row deleted because although there was sufficient written context to verify that the artist officially and originally released the song within a standard recording LP, standard recording EP, or as a single, and the song and artist pairing is connected to sufficient data in YouTube Music as detailed in *Data Research Questions* and *Data Evaluation Measures*, the song and artist pairing is a duplication of a song and artist pairing corrected prior in the *Complete Quality Sweep*.

     f. [Correction] Corrected information in [song_name], [artist_name] and [primary_feeling] columns for 9 remaining rows in the sequence.

---
