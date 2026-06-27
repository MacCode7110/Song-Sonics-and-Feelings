# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney (Web Developer, Data Researcher)

## Technologies: Python, Pandas, yt-dlp, FFmpeg, Essentia Audio Analysis, PCA (Principal Component Analysis)

## Data Collection & Management Summary

The _Music Preference Survey - Independent Study 2026_ survey was administered to a targeted 250 full-time employees in the United States through Survey Monkey from May 28th, 2026 - June 5th, 2026. A total 275 survey responses from full-time employees were collected and downloaded to `music_preference_survey_data_master_raw.csv`.

As music_preference_survey_data_master_raw is a small dataset and contains open-response survey data that represents human thought and writing, certain steps are manually executed to remove and correct song and artist information using human evaluation and decision. Python programs are executed to build `music_preference_survey_data_master_cleaned_v1`, `music_preference_survey_data_master_cleaned_v2`, `music_preference_survey_data_master_cleaned_v3`, `music_preference_survey_data_master_cleaned_v4`, and `music_preference_survey_data_master_cleaned_v5` to add WAV files from Youtube Music using yt-dlp and sonic features through Essentia for each song.

## Music Release Context

    1. Music is released to different audiences through the following format groups:
        a. Primary Release Formats:
            I. Standard Recording LP (Long Play): A full-length presentation of songs, which usually consists of at least seven songs.
            II. Standard Recording EP (Extended Play): Usually consists of four to six songs and is longer than a single.
            III. Single: Usually consists of one to three songs with a focus on a lead promotional song.
            IV. Maxi-Single: A specific collection frequently utilized in Dance, Electronic, and Hip Hop music that contains a lead single and an array of remix recordings, instrumental recordings, and B-sides.
            V. Double LP: A collection consisting of a pair of distinct volumes released within the same product. This is also a subset of the standard recording LP release type.
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
            V. Inspirational Recordings: Recordings that companion media products and contain songs that may not feature in the media product. The particular songs are inspired by the concept and/or characters of the media product. The recording frequently operates as a marketing effort to accompany the release of the media product. 
        e. Alternative Performance and Recording Formats:
            I. Acoustic: Features simplified instrumentation, which encompasses acoustic equipment rather than electronic equipment.
            II. Unplugged: A particular subset of acoustic performance recorded live facing an audience.
            III. Live: Audio captured directly from a performance, which consists of room acoustics, audience sounds, and real-time differences from recorded songs.
            IV. Cover: A distinct recording of a song originally written and performed by a different artist.
            V. Demo Recording: A raw collection presenting unpolished, minimally produced songs.
            VI. Mashup: A recording where at least two songs are sonically combined to construct a new song.

    2. A standard recording LP is the official version of a Long Play.

    3. A standard recording EP is the official version of an Extended Play.

    4. An official release of a song is an Audio Object in Youtube Music, which is different from a Music Video Object in Youtube Music. A song is officially released through any one of the release type groups detailed in Item 1. A song is not officially released as a music video.

    5. There is some probability that the release of a song in one particular format is sonically different compared to the release of a song in a different particular format.

    6. An original release of a song is the type of release where the song is first available. A song is first available through any one of the release type groups detailed in Item 1.

    7. Later pressings of an original release type that are renamed qualify as the original release type.

## Data Correction Standards

    1. Correct song, artist, and primary feeling writing for formatting accuracy when there is a completely clear formatting issue:
        a. Example: Changing a song with a leading space, " 7 Words" to a song without a leading space, "7 Words".

    2. Correct song, artist, and primary feeling writing for logical accuracy when there is a completely clear logical issue:
        a. Example: Changing an artist from “DeFTONes” to “Deftones”.

    3. Correct primary feeling writing for concision and clarity -> 
        a. When at least one of the following conditions is met:
            I. The primary feeling writing exceeds one word.
            II. The primary feeling writing communicates a meaning with partial clarity, and there is sufficient written context to substitute with one word that communicates a reasonably accurate meaning with complete clarity.
        b. Examples: 
            I. Changing a primary feeling from "I feel like a surge of electricity bouncing through the house." to "Energized".
            II. Changing a primary feeling from "I feel happy, sad, and angry simultaneously." to "Ambivalence".

## Song Identification Method

To guarantee a fair procedure for sonic feature extraction throughout all songs, only official song releases from standard recording LPs, standard recording EPs, and singles are obtained. Standard recording LPs, standard recording EPs, and singles represent the primary initiatives where song writing and arrangement is purposeful and originally produced for a holistic listening experience. In contrast, release types belonging to the specialized audio editions and re-release, specialized compilation, soundtrack, and alternative performance and recording groups represent secondary initiatives that differ from the established identification method. Restricting the pipeline to consume song releases from standard recording LPs, standard recording EPs, and singles establishes a sonic control variable. The restriction enables the PCA Plot clustering to reflect differences in song structure and musical qualities with a greater level of accuracy rather than differences in varying recording environments and engineering outputs. The PCA Plot presents unique sonic representations of each selected song.

## Pipeline Limitations

1. The yt-dlp Python library is utilized to download and extract the highest quality available compressed audio from Youtube Music. Subsequently, yt-dlp uses FFmpeg to transform the compressed audio into an uncompressed WAV file. There is some probability that the subset of selected songs are associated with WAV files containing different levels of audio quality and distortion. As a result, data clustering in the PCA Plot may partially reflect musical qualities that do not accurately characterize the original sonic makeup of certain songs.

2. By utilizing untampered WAV files through various release types (singles, standard recording EPs, and standard recording LPs), the Essentia sonic feature extraction process introduces a systematic production bias. Since singles, standard recording EPs, and standard recording LPs frequently undergo differing mastering procedures and structural modifications, the resulting Essentia sonic features represent differences in audio engineering as well as the musical qualities of the songs. Consequently, data clustering in the PCA Plot may partially group songs based on release type and audio engineering output rather than similar musical and structural aspects.

## [2026-6-22 - V1] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_raw.csv` -> `music_preference_survey_data_master_cleaned_v1.csv`
- **Data Shape Change:** 277 rows (2 header rows + 275 data rows) * 19 columns -> 269 (1 header row + 268 data rows) rows * 3 columns
- **Purpose:** [Initial Quality Sweep - Manual Context Review, Establish Structural Baseline]

### Steps Executed:

1. **[Removal and Schema Renaming]** Deleted 16 columns and renamed the 3 remaining survey response columns to standard identifiers:
   a. [Song Name] -> [song_name]
   b. [Artist Name] -> [artist_name]
   c. [Open-Ended Response] -> [primary_feeling]
2. **[Removal]** Deleted 1 filler row (Row 1) containing survey question column names [What is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling.], [What is the primary feeling that your favorite song creates within you? Please enter only one feeling and use correct spelling.].
3. **[Correction]** Standardized 22 null values to display NA.
4. **[Removal]** Deleted 7 rows each containing exclusively NA values.

## [2026-6-25 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v1.csv` -> `music_preference_survey_data_master_cleaned_v2.csv`
- **Data Shape Change:** 269 (1 header row + 268 data rows) rows * 3 columns -> 86 (1 header row + 85 data rows) rows * 3 columns
- **Purpose:** [Dataset Truncation (Simple Random Sampling) - Python Program Execution, Select Representative Subset of Valid Dataset]
- **Initial Raw Submissions:** 275 total survey responses
- **Methodology:** To maintain an efficient data cleaning workflow and provide an unbiased, representative subset of the valid full-time employee respondent pool, a Simple Random Sampling method was applied. Using the `simple_random_sampling.py` Python program with a constant random seed (random_state=0) to enforce reproducibility, 85 unique survey responses were randomly selected from the 268 data rows. The sample size represents approximately 31.7% of the valid full-time employee respondent pool, which asserts a 95% confidence level and a marginal error less than 9%. All non-selected responses were omitted from this phase of analysis.
- **Resulting Batch Size:** 85 data rows

### Steps Executed:

1. **[Removal]** Executed `simple_random_sample.py` to randomly select 85 unique survey responses from the 268 data rows, omitting 183 remaining data rows.

## [2026-6-27 - V3] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v2.csv` -> `music_preference_survey_data_master_cleaned_v3.csv`
- **Data Shape Change:** 86 (1 header row + 85 data rows) rows * 3 columns -> _ rows * 3 columns
- **Purpose:** [Complete Quality Sweep - Manual Context Review, Remove Invalid Data and Systematically Correct Information]

### Steps Executed:

1.   **[Complete Quality Sweep]** Processed remaining 85 rows to remove invalid data and systematically correct information:

     a. [Removal] _ rows deleted because the song, artist and primary feeling lacked sufficient written context to correct and meet all of the following standards:

        I. A song officially and originally released by the artist.

        II. A primary feeling that meets all of the following standards:
            a. A primary feeling that is one word.
            b. A primary feeling that communicates a reasonably accurate meaning with complete clarity.

     b. [Removal] _ rows deleted because the song and artist is a duplication of a song and artist corrected prior in the *Complete Quality Sweep*.

     c. [Removal] _ rows deleted because the artist did not officially and originally release the song through any of the following formats:

        I. Standard Recording LP
        
        II. Standard Recording EP

        III. Single

     d. [Removal] _ rows deleted because the song and artist grouping is connected to insufficient data in Youtube Music. Insufficient data in Youtube Music meets one of the following occurrences:

         I. The song was officially and originally released within a standard recording LP, and the official and original standard recording LP release containing the song is not in Youtube Music. Any alternative official standard recording EP release containing the official song is not in Youtube Music, and any alternative official single release is not in Youtube Music.

         II. The song was officially and originally released within a standard recording EP, and the official and original standard recording EP release containing the song is not in Youtube Music. Any alternative official standard recording LP release containing the official song is not in Youtube Music, and any alternative official single release is not in Youtube Music.

         III. The song was officially and originally released as a single, and the official and original single release is not in Youtube Music. Any alternative official standard recording EP release containing the official song is not in Youtube Music, and any alternative official standard recording LP release containing the official song is not in Youtube Music.

     e. [Correction] Corrected information in [song_name], [artist_name] and [primary_feeling] columns for _ remaining rows in the sequence.
