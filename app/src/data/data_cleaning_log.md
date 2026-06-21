# Data Cleaning Log

Web Developer and Data Researcher: Matthew McAlarney (Web Developer, Data Researcher)

As music_preference_survey_data_master_cleaned is a small dataset and contains open-response survey data that represents human thought and writing, certain steps are manually executed to remove and correct song and artist information using human evaluation and decision. Python scripts are executed to build music_preference_survey_data_master_cleaned to add WAV files and sonic features through Essentia for each song.

## [2026-6-18 - V1] - [Matthew McAlarney - Web Developer, Data Researcher]

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

## [2026-6-20 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned_v1.csv` -> `music_preference_survey_data_master_cleaned_v2.csv`
- **Data Shape Change:** 269 rows * 3 columns -> 262 rows * 3 columns
- **Purpose:** [Complete Quality Sweep - Manual Context Review]

### Steps Executed:

1. **[Complete Quality Sweep]** Processed all rows to remove invalid data and correct information:

    a. [Removal] 5 rows deleted because the submitted song and artist information lacks sufficient written context to correct.

    b. [Removal] _ rows deleted because the submitted song and artist information is a duplication of previously corrected song and artist information.

    c. [Removal] 2 rows deleted because the submitted song and artist information is connected to insufficient data in Youtube Music.

    d. [Correction] Corrected information in [song_name] and [artist_name] columns for 12 remaining rows in the sequence.
