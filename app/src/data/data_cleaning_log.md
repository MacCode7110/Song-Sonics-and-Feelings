# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney (Web Developer, Data Researcher)

## Data Collection & Management Summary

The _Music Preference Survey - Independent Study 2026_ survey was administered to a targeted 250 full-time employees in the United States through Survey Monkey during May and June 2026. A total 275 survey responses from full-time employees were collected and downloaded to music_preference_survey_data_master_raw.csv.

As music_preference_survey_data_master_raw is a small dataset and contains open-response survey data that represents human thought and writing, certain steps are manually executed to remove and correct song and artist information using human evaluation and decision. Python programs are executed to build music_preference_survey_data_master_cleaned_v1, music_preference_survey_data_master_cleaned_v2, music_preference_survey_data_master_cleaned_v3, music_preference_survey_data_master_cleaned_v4, and music_preference_survey_data_master_cleaned_v5 to add WAV files from Youtube Music using yt-dlp and sonic features through Essentia for each song.

## Music Release Context

    1. Music is commercially released to different audiences through the succeeding format groups:
        a. Primary Release Formats:
            I. Single: Usually consists of 1–3 songs with a focus on a lead promotional song.
            II. Standard Recording EP (Extended Play): Usually consists of 4–6 songs and is longer than a single.
            III. Standard Recording LP (Long Play): A full-length presentation of songs, which usually consists of at least 7 songs.
        b. Specialized Audio Editions and Re-release Formats:
            I. Deluxe: An extended reissue of an existing standard recording LP containing bonus songs, demo songs, and/or b-side songs.
            II. Remastered: A song that is sonically optimized through contemporary technology, which usually encompasses increasing volume and modifying dynamic range.
            III. Remixed: A song where the original stems are completely rearranged, rebalanced, or sonically altered.
        c. Alternative Performance and Recording Formats:
            I. Acoustic: Features simplified instrumentation, which encompasses acoustic equipment rather than electronic equipment.
            II. Unplugged: A particular subset of acoustic performance recorded live facing an audience.
            III. Live: Audio captured directly from a performance, which consists of room acoustics, audience sounds, and real-time differences from recorded songs.
            IV. Cover: A distinct recording of a song originally written and performed by a different artist.

    2. A standard recording LP is the official version of a Long Play. A standard recording LP is not one of the succeeding release types:
        a. Single
        b. EP
        c. Deluxe
        d. Remastered
        e. Remixed
        f. Acoustic
        g. Unplugged
        h. Live
        i. Cover

    3. A standard recording EP is the official version of an Extended Play. A standard recording EP is not one of the succeeding release types:
        a. Single
        b. LP
        c. Deluxe
        d. Remastered
        e. Remixed
        f. Acoustic
        g. Unplugged
        h. Live
        i. Cover

    4. An official release of a song is an Audio Object in Youtube Music, which is different from a Music Video Object in Youtube Music. A song is officially released as a single, within a standard recording EP release, within a standard recording LP release, within a deluxe recording release, within a remastered recording release, within a remixed recording release, within an acoustic recording release, within an unplugged recording release, within a live recording release, or within a cover recording release. A song is not officially released as a music video.

    5. There is some probability that the release of a song in one particular format is sonically different compared to the release of a song in a different particular format.

    6. An original release of a song is the type of release where the song is first available. A song is first available as a single release, within a standard recording EP release, within a standard recording LP release, within a deluxe recording release, within a remastered recording release, within a remixed recording release, within an acoustic recording release, within an unplugged recording release, within a live recording release, or within a cover recording release.

    7. Later pressings of an original release type that are renamed qualify as the original release type.

## Data Correction Standards

    1. Correct song, artist, and primary feeling data when there is an obvious formatting issue:
        a. Example: Changing a song field with a leading space, " 7 Words" to a song field without a leading space, "7 Words".

    2. Correct song, artist, and primary feeling data when there is an obvious logical issue:
        a. Example: Changing an artist field from “DeFTONes” to “Deftones”.

    3. Correct primary feeling data when the written presentation is informal, and there is a primary feeling that is formal and demonstrates the closest meaning:
        a. Example: Changing a primary feeling field from "Fire" to "Energized".

## Song Identification Method

To guarantee a fair procedure for sonic feature extraction throughout all songs, only official song releases from standard recording LPs, standard recording EPs, and singles are obtained. Standard recording LPs, standard recording EPs, and singles represent the primary initiatives where song writing and arrangement is purposeful and originally produced for a holistic listening experience. In contrast, deluxe, remastered, remixed, acoustic, unplugged, live, and cover editions represent secondary initiatives that differ from the established identification method. Restricting the pipeline to consume song releases from standard recording LPs, standard recording EPs, and singles establishes a sonic control variable. The restriction enables the PCA Plot clustering to reflect differences in song structure and musical qualities with a greater level of accuracy rather than differences in varying recording environments and engineering outputs. The PCA Plot presents unique sonic representations of each selected song.

## Pipeline Limitations

1. The yt-dlp Python library is utilized to download and extract the highest quality available compressed audio from Youtube Music. Subsequently, yt-dlp uses FFmpeg to transform the compressed audio into an uncompressed WAV file. There is some probability that the subset of selected songs are associated with WAV files containing different levels of audio quality and distortion. As a result, data clustering in the PCA Plot may partially reflect musical qualities that do not accurately characterize the original sonic makeup of certain songs.

2. By utilizing untampered WAV files through various release types (singles, standard recording EPs, and standard recording LPs), the Essentia sonic feature extraction process introduces a systematic production bias. Since singles, standard recording EPs, and standard recording LPs frequently undergo differing mastering processes and structural alterations, the resulting Essentia sonic features represent differences in commercial audio engineering as well as the musical qualities of the songs. Consequently, data clustering in the PCA Plot may partially group songs based on release type and commercial engineering output rather than similar musical and structural aspects.

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
4. **[Removal]** Deleted 7 rows each containing all NA values.

## [2026-6-25 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v1.csv` -> `music_preference_survey_data_master_cleaned_v2.csv`
- **Data Shape Change:** 269 (1 header row + 268 data rows) rows * 3 columns -> 86 (1 header row + 85 data rows) rows * 3 columns
- **Purpose:** [Dataset Truncation (Simple Random Sampling) - Python Program Execution, Select Representative Subset of Valid Dataset]
- **Initial Raw Submissions:** 275 total survey responses
- **Methodology:** To maintain an efficient data cleaning workflow and provide an unbiased, representative subset of the valid full-time employee respondent pool, a Simple Random Sampling method was applied. Using the simple_random_sampling.py Python program with a constant random seed (random_state=0) to enforce reproducibility, 85 unique survey responses were randomly selected from the 268 data rows. The sample size represents approximately 31.7% of the valid full-time employee respondent pool, which asserts a 95% confidence level and a marginal error less than 9%. All non-selected responses were omitted from this phase of analysis.
- **Resulting Batch Size:** 85 data rows

### Steps Executed:

1. **[Removal]** Executed simple_random_sample.py to randomly select 85 unique survey responses from the 268 data rows, omitting 183 remaining data rows.

## [2026-6-25 - V3] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v2.csv` -> `music_preference_survey_data_master_cleaned_v3.csv`
- **Data Shape Change:** 86 (1 header row + 85 data rows) rows * 3 columns -> _ rows * 3 columns
- **Purpose:** [Complete Quality Sweep - Manual Context Review, Remove Invalid Data and Systematically Correct Information]

### Steps Executed:

1.   **[Complete Quality Sweep]** Processed remaining 85 rows to remove invalid data and systematically correct information:

     a. [Removal] _ rows deleted because the submitted song, artist and primary feeling information lacks sufficient written context to correct as a means of achieving at least one of the succeeding standards:
     I. An official and original song release by the submitted artist.
     II. A valid and formal primary feeling.

     b. [Removal] _ rows deleted because the submitted song and artist information is a duplication of song and artist information previously corrected in the Complete Quality Sweep.

     c. [Removal] _ rows deleted because the submitted song and artist information is connected to insufficient data in Youtube Music. Insufficient data in Youtube Music achieves one of the succeeding conditions:

         I. The song was officially and originally released within a standard recording LP, and the official and original standard recording LP release containing the song is not in Youtube Music. Any alternative official standard recording EP release containing the official song is not in Youtube Music, and any alternative official single release is not in Youtube Music.

         II. The song was officially and originally released within a standard recording EP, and the official and original standard recording EP release containing the song is not in Youtube Music. Any alternative official standard recording LP release containing the official song is not in Youtube Music, and any alternative official single release is not in Youtube Music.

         III. The song was officially and originally released as a single, and the official and original single release is not in Youtube Music. Any alternative official standard recording EP release containing the official song is not in Youtube Music, and any alternative official standard recording LP release containing the official song is not in Youtube Music.

     d. [Correction] Corrected information in [song_name], [artist_name] and [primary_feeling] columns for _ remaining rows in the sequence.
