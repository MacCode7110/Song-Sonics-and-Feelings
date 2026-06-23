# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney (Web Developer, Data Researcher)

As music_preference_survey_data_master_cleaned is a small dataset and contains open-response survey data that represents human thought and writing, certain steps are manually executed to remove and correct song and artist information using human evaluation and decision. Python scripts are executed to build music_preference_survey_data_master_cleaned to add WAV files and sonic features through Essentia for each song.

Details to understand different song releases and situations:
    1. An official release of a song is an Audio Object in Youtube Music, which is different from a Music Video Object.
    2. An original release of a song is the single release or first standard recording (LP or EP) release containing the song.
    3. If a single was released before the first standard recording (LP or EP) release containing the song, the single release is the original release of the song.
    4. If a single was released after the first standard recording (LP or EP) release containing the song, then the first standard recording release is the original release of the song.
    5. If no single was released, then the first standard recording (LP or EP) release containing the song is the original release of the song.
    6. Later pressings of an original standard recording (LP OR EP) release that are renamed qualify as the original standard recording (LP OR EP).
    7. Later pressings of an original single release that are renamed qualify as the original single.

To guarantee a reliable and accurate procedure for sonic feature extraction throughout all songs, the PCA Plot requires official and original releases of all songs.

## [2026-6-22 - V1] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_raw.csv` -> `music_preference_survey_data_master_cleaned_v1.csv`
- **Data Shape Change:** 277 rows * 19 columns -> 269 rows * 3 columns
- **Purpose:** [Initial Quality Sweep - Manual Context Review]

### Steps Executed:

1. **[Removal and Schema Renaming]** Deleted 16 columns and renamed the 3 remaining survey response columns to standard identifiers:
    a. [Song Name] -> [song_name]
    b. [Artist Name] -> [artist_name]
    c. [Open-Ended Response] -> [primary_feeling]
2. **[Removal]** Deleted 1 filler row (Row 1) containing survey question column names [What is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling.], [What is the primary feeling that your favorite song creates within you? Please enter only one feeling and use correct spelling.].
3. **[Correction]** Standardized 22 null values to display NA.
4. **[Removal]** Deleted 7 rows each containing all NA values.

## [2026-6-22 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v1.csv` -> `music_preference_survey_data_master_cleaned_v2.csv`
- **Data Shape Change:** 269 rows * 3 columns -> _ rows * 3 columns
- **Purpose:** [Dataset Truncation (Chronological Slicing) - Manual Context Review]
- **Initial Raw Submissions:** 275 total survey responses
- **Methodology:** To maintain an efficient manual data-cleaning workflow and prevent arbitrary selection bias, a Chronological Slicing (First-Come, First-Served) method was applied. The first 85 consecutive survey responses were selected, maintaining the original chronological submission order. All subsequent 190 survey responses were excluded from this phase of analysis.
- **Resulting Batch Size:** 85 rows

### Steps Executed:

1. **[Removal]** Deleted all subsequent 190 survey responses submitted after the first 85 consecutive survey responses according to the original chronological submission order.

## [2026-6-22 - V3] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v2.csv` -> `music_preference_survey_data_master_cleaned_v3.csv`
- **Data Shape Change:** _ rows * 3 columns -> _ rows * 3 columns
- **Purpose:** [Complete Quality Sweep - Manual Context Review]

### Steps Executed:

1. **[Complete Quality Sweep]** Processed remaining 85 rows to remove invalid data and correct information:

    a. [Removal] _ rows deleted because the submitted song, artist and primary feeling information lacks sufficient written context to correct to achieve at least one of the following standards:
        I. An official and original song release by the submitted artist.
        II. A valid and formal primary feeling.

    b. [Removal] _ rows deleted because the submitted song and artist information is a duplication of song and artist information previously corrected in the Complete Quality Sweep.

    c. [Removal] _ rows deleted because the submitted song and artist information is connected to insufficient data in Youtube Music. Insufficient data in Youtube Music achieves at least one of the following conditions:
        I. The song was officially and originally released as a single. The official and original single release and the first standard recording (which is one of an LP OR EP) to feature the official single are not in Youtube Music.
        II. The song was officially and originally released as part of a standard recording (which is one of an LP OR EP).The official and original standard recording release and any subsequent official single release are not in Youtube Music.

    d. [Correction] Corrected information in [song_name], [artist_name] and [primary_feeling] columns for _ remaining rows in the sequence.