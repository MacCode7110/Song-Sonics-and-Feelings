# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney (Web Developer, Data Researcher)

## Data Collection & Management Summary

The *Music Preference Survey - Independent Study 2026* survey was administered to a targeted 250 full-time employees in the United States through Survey Monkey during May and June 2026. A total 275 survey responses from full-time employees were collected and downloaded to music_preference_survey_data_master_raw.csv.

As music_preference_survey_data_master_raw is a small dataset and contains open-response survey data that represents human thought and writing, certain steps are manually executed to remove and correct song and artist information using human evaluation and decision. Python programs are executed to build music_preference_survey_data_master_cleaned_v1, music_preference_survey_data_master_cleaned_v2, music_preference_survey_data_master_cleaned_v3, music_preference_survey_data_master_cleaned_v4, and music_preference_survey_data_master_cleaned_v5 to add WAV files from Youtube Music using yt-dlp and sonic features through Essentia for each song.

## Music Release Concepts

    1. An official release of a song is an Audio Object in Youtube Music, which is different from a Music Video Object in Youtube Music. A song is officially released as a single, within a standard recording EP, or within a standard recording LP. A song is not officially released as a music video.

    2. There is some probability that the single release of a song is sonically different compared to the song featured in any standard recording EP release, and any standard recording LP release.

    3. There is some probability that the standard recording EP release of a song is sonically different compared to the song featured in any standard recording LP release, and in any single release.

    4. There is some probability that the standard recording LP release of a song is sonically different compared to the song featured in any standard recording EP release, and in any single release.
    
    5. An original release of a song is the type of release where the song is first available. A song is first available as a single release, within a standard recording EP release, or within a standard recording LP release. An original release of a song achieves condition a and may achieve condition b:
        a. The song release is not an official remaster, remix, acoustic, unplugged, live, or cover release.
        b. The song release contains sonic differences compared to the song featured in alternative release types.
    
    6. Later pressings of an original standard recording LP release that are renamed qualify as the original standard recording LP.

    7. Later pressings of an original standard recording EP release that are renamed qualify as the original standard recording EP.
    
    8. Later pressings of an original single release that are renamed qualify as the original single.

## Data Correction Rules

    1. Correct song, artist, and primary feeling data when there is an obvious formatting issue:
        Example: Changing a song field with a leading space, " 7 Words" to a song field without a leading space, "7 Words".
    
    2. Correct song, artist, and primary feeling data when there is an obvious logical issue:
        Example: Changing an artist field from “DeFTONes” to “Deftones”.
    
    3. Correct primary feeling data when there is an obvious formal equivalent:
        Example: Changing a primary feeling field from "Fire" to "Energized".


## Song Identification Method

To guarantee a fair procedure for sonic feature extraction throughout all songs, only official song releases from standard recording LPs, standard recording EPs, and singles are obtained. The PCA Plot presents unique sonic representations of each selected song.

## Pipeline Limitations

1. The yt-dlp Python library is utilized to download and extract the highest quality available compressed audio from Youtube Music. Then, yt-dlp uses FFmpeg to transform the compressed audio into an uncompressed WAV file. There is some probability that the subset of selected songs are associated with WAV files containing different levels of audio quality and distortion. As a result, data clustering in the PCA Plot may partially reflect musical qualities that do not accurately characterize the original sonic makeup of certain songs.

2. By utilizing untampered song files through various release types (singles, standard recording EPs, and standard recording LPs), the Essentia sonic feature extraction process introduces a systematic production bias. Since singles, standard recording EPs, and standard recording LPs frequently undergo differing mastering processes and structural alterations, the resulting Essentia sonic features represent differences in commercial audio engineering as well as the musical qualities of the songs. Consequently, data clustering in the PCA Plot may partially group songs based on release type rather than similar musical and structural aspects.

## [2026-6-22 - V1] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_raw.csv` -> `music_preference_survey_data_master_cleaned_v1.csv`
- **Data Shape Change:** 277 rows (2 header rows + 275 data rows) * 19 columns -> 269 (1 header row + 268 data rows) rows * 3 columns
- **Purpose:** [Initial Quality Sweep - Manual Context Review]

### Steps Executed:

1. **[Removal and Schema Renaming]** Deleted 16 columns and renamed the 3 remaining survey response columns to standard identifiers:
    a. [Song Name] -> [song_name]
    b. [Artist Name] -> [artist_name]
    c. [Open-Ended Response] -> [primary_feeling]
2. **[Removal]** Deleted 1 filler row (Row 1) containing survey question column names [What is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling.], [What is the primary feeling that your favorite song creates within you? Please enter only one feeling and use correct spelling.].
3. **[Correction]** Standardized 22 null values to display NA.
4. **[Removal]** Deleted 7 rows each containing all NA values.

## [2026-6-24 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v1.csv` -> `music_preference_survey_data_master_cleaned_v2.csv`
- **Data Shape Change:** 269 (1 header row + 268 data rows) rows * 3 columns -> 86 rows * 3 columns
- **Purpose:** [Dataset Truncation (Simple Random Sampling) - Python Program Execution]
- **Initial Raw Submissions:** 275 total survey responses
- **Methodology:** To maintain an efficient data cleaning workflow and provide an unbiased, representative subset of the whole full-time employee respondent pool, a Simple Random Sampling method was applied. Using the simple_random_sampling.py Python program with a constant random seed (random_state=85) to enforce reproducibility, 85 unique survey responses were randomly selected from the 268 data rows. All non-selected responses were omitted from this phase of analysis.
- **Resulting Batch Size:** 85 data rows

### Steps Executed:

1. **[Removal]** Executed simple_random_sample.py to randomly select 85 unique survey responses from the 268 data rows, omitting 183 remaining data rows.

## [2026-6-24 - V3] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v2.csv` -> `music_preference_survey_data_master_cleaned_v3.csv`
- **Data Shape Change:** _ rows * 3 columns -> _ rows * 3 columns
- **Purpose:** [Complete Quality Sweep - Manual Context Review]

### Steps Executed:

1. **[Complete Quality Sweep]** Processed remaining 85 rows to remove invalid data and correct information:

    a. [Removal] _ rows deleted because the submitted song, artist and primary feeling information lacks sufficient written context to correct as a means of achieving at least one of the succeeding standards:
        I. An official and original song release by the submitted artist.
        II. A valid and formal primary feeling.

    b. [Removal] _ rows deleted because the submitted song and artist information is a duplication of song and artist information previously corrected in the Complete Quality Sweep.

    c. [Removal] _ rows deleted because the submitted song and artist information is connected to insufficient data in Youtube Music. Insufficient data in Youtube Music achieves one of the succeeding conditions:
        
        I. The song was officially and originally released within a standard recording LP, and the official and original standard recording LP release containing the song is not in Youtube Music. Any alternative official standard recording EP release containing the official song is not in Youtube Music, and any alternative official single release is not in Youtube Music.

        II. The song was officially and originally released within a standard recording EP, and the official and original standard recording EP release containing the song is not in Youtube Music. Any alternative official standard recording LP release containing the official song is not in Youtube Music, and any alternative official single release is not in Youtube Music.
        
        III. The song was officially and originally released as a single, and the official and original single release is not in Youtube Music. Any alternative official standard recording EP release containing the official song is not in Youtube Music, and any alternative official standard recording LP release containing the official song is not in Youtube Music.

    d. [Correction] Corrected information in [song_name], [artist_name] and [primary_feeling] columns for _ remaining rows in the sequence.