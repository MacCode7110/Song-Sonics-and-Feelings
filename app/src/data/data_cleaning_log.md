# Data Cleaning Log

As music_preference_survey_data_master_cleaned is a small dataset and contains open-response survey data that represents human thought and writing, Matthew McAlarney (Web Developer, Data Researcher) manually completed steps to remove and correct information using human evaluation and decision. Matthew McAlarney (Web Developer, Data Researcher) also details automatically completed steps to build music_preference_survey_data_master_cleaned as appropriate.

## [2026-6-18 - V1] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_raw.csv` -> `music_preference_survey_data_master_cleaned.csv`
- **Data Shape Change:** 277 rows * 19 columns -> 269 rows * 3 columns
- **Purpose:** [Initial Quality Sweep - Manual Review]

### Steps Executed:

1. **[Removal and Correction]** Deleted 16 columns and renamed the 3 remaining survey response columns to standard identifiers:
    a. [Song Name] -> [song_name]
    b. [Artist Name] -> [artist_name]
    c. [Open-Ended Response] -> [primary_feeling]
2. **[Removal]** Deleted 1 filler row (Row 1) containing placeholder column names [What is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling.], [What is the primary feeling that your favorite song creates within you? Please enter only one feeling and use correct spelling.].
3. **[Correction]** Standardized 22 null values to display NA.
4. **[Removal]** Deleted 7 rows each containing all NA values.

## [2026-6-18 - V2] - [Matthew McAlarney - Web Developer, Data Researcher]

- **Target File:** `music_preference_survey_data_master_cleaned.csv` -> `music_preference_survey_data_master_cleaned.csv`
- **Data Shape Change:** 269 rows * 3 columns -> 
- **Purpose:** [Complete Quality Sweep - Manual Context Review]

### Steps Executed:

1. **[Addition]** Added column [track_id] preceding [song_name], [artist_name], and [primary_feeling] columns.
2. **[Data Quality Sweep]** Processed all rows to remove invalid data and correct information:

    a. [Removal] Deleted invalid rows based on fundamental quality standards:
        
        I. _ rows removed because the submitted song and artist information lacks sufficient written context to correct.
        
        II. _ rows removed because the submitted song is connected to insufficient data in the Spotify Web API.

    b. [Data Enrichment] Processed all remaining rows to correct information and add data from the Spotify Web API:
        
        I. [Correction] Corrected information in [song_name] and [artist_name] columns for _ remaining rows in the sequence.
        
        II. [Addition] Added the [track_id] from the Spotify Web API to the [track_id] column for _ remaining rows in the sequence.
