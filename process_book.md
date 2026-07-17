# Process Book

**Web Developer, Data Researcher, Scratch DJ, Rapper:** Matthew McAlarney

**Technologies:** JavaScript, React, Bulma CSS, D3, Python, Pandas, yt-dlp, FFmpeg, WAV, Essentia Audio Analysis, PCA (Principal Component Analysis), Russell's Core Affect Framework

**Web Application Link:** https://song-sonics-and-feelings.vercel.app/exploratory-pca

---

## Overview and Motivation

The **Song Sonics & Feelings** web application was constructed to examine the relationship between song sonics and the mapping of feelings to parametric neurophysiological foundations.

The motivation to develop **Song Sonics & Feelings** was to understand the connection between the sonic qualities of songs and the resulting primary feeling of respondents. Through processing sonic features and mathematically clustering songs within a neurophysiological framework, a *PCA* instance illustrates the level of consistency in which linear combinations of sonic values accurately predict the resulting primary feeling of respondents.

---

## Related Work

1. **Music Information Retrieval (MIR):** Implementing computational analysis to extract meaningful features from audio signals such as tempo, loudness, and spectral complexity.
2. **Russell's Core Affect Framework (2003):** A highly influential framework that maps feelings to one of four quadrants along two neurophysiological dimensions:
   * **Valence:** The horizontal axis representing the physiological level of positivity (pleasantness) or negativity (unpleasantness).
   * **Arousal:** The vertical axis representing the physiological level of energy, which ranges from low (sleepy/deactivated) to high (excited/activated).

---

## Research Questions

* How do scalar sonic features such as `bpm`, `danceability`, and `onset_rate` cluster songs together in a *PCA*?
* To what extent do linear combinations of song sonics accurately predict the classification of the respondent's primary feeling through *Russell's Core Affect Framework*?
* Why do some songs such as *My Sacrifice* by *Creed* mathematically cluster in one quadrant according to *PCA* coordinates, yet evoke a *Primary Feeling* mapping to a different quadrant through *Russell's Core Affect Framework*?

---

## Data Collection, Cleaning, and Processing Summary

As detailed in *data_methodology_log.md*, the *Song Preference & Feeling Survey* was administered to a targeted 250 full-time employees in the United States through SurveyMonkey from May 28th, 2026 to June 5th, 2026. The *Song Preference & Feeling Survey* required each respondent to answer two questions: (1) What is your favorite song? Please enter (1) the song name and (2) the corresponding artist name. Please use correct spelling. (2) What is the primary feeling that your favorite song creates within you? Please enter only one feeling and use correct spelling. A total of 275 survey responses from full-time employees were collected and stored in `survey_data_master_raw.csv`.

Since `survey_data_master_raw.csv` is a small dataset and contains open-response survey data that represents human thought and writing, steps are manually executed and executed through Python programs to build the succeeding CSV files:

* **V1:** `[Initial Quality Sweep, Manual Context Review, Establish structural base]` $\rightarrow$ `survey_data_master_structural_base.csv`
* **V2:** `[Dataset Truncation (Simple Random Sampling), Python Program Execution, Select representative subset of dataset]` $\rightarrow$ `survey_data_master_sampled.csv`
* **V3:** `[Complete Quality Sweep and Song URL Insertion, Manual Context Review, Remove invalid data and systematically correct information]` $\rightarrow$ `survey_data_master_corrected.csv`
* **V4:** `[Primary Feeling Mapping, Python Program Execution, Map each remaining primary feeling in the [primary_feeling] column to one of the four quadrants established in Russell's Core Affect Framework]` $\rightarrow$ `survey_data_master_primary_feelings_mapped.csv`
* **V5:** `[Song Downloading and WAV Conversion, Python Program Execution, Download each song in the [song_name] column through the corresponding URL in the [youtube_music_url] column and convert to WAV]` $\rightarrow$ `survey_data_master_song_download.csv`
* **V6:** `[Essentia Sonic Feature Extraction, Python Program Execution, Calculate and record 12 sonic scalar values for each of the 45 remaining data rows through accessing the WAV file referenced in the [wav_filename] column]` $\rightarrow$ `survey_data_master_sonic_feature_calculations.csv`
* **V7:** `[Sonic Feature Scalar Standardization, Python Program Execution, Standardize the 12 sonic scalar values for each of the 45 remaining data rows]` $\rightarrow$ `survey_data_master_sonic_feature_standardization.csv`
* **V8:** `[PCA Dimensionality Reduction, Python Program Execution, Compress 12 multi-dimensional standardized sonic features into 2 static spatial dimensions (pca_x and pca_y) for PCA rendering]` $\rightarrow$ `pca_matrix.json`

---

## PCA Design Decisions

* **Intended Audience**

  The intended group to access the selected visualization is a general audience of developers. The underlying motivation is that many different types of developers will be able to accurately read and interpret the displayed data.

* **Visualization Selection**

  To discover how linear combinations of sonic scalar values of a song connect to the *Primary Feeling* of a respondent, **Principal Component Analysis (PCA)** was selected to illustrate the connection rendered through a 2D scatter plot. Additionally, presenting a 2D scatter plot reasonably verifies that a general audience of developers are capable of understanding the mechanics of the visualization. Implementation of a highly sophisticated visualization may inhibit the ability of a general audience of developers to accurately read and interpret the displayed data.
  
* **Mathematical Challenge**
    
  Songs are characterized by a highly complex, multi-dimensional set of 12 unique scaled sonic features extracted from *Essentia*:
  * a. Rhythm: `bpm`, `danceability`, `onset_rate`,
  * b. Dynamics: `average_loudness`, `dynamic_complexity`,
  * c. Spectral & Tonal: `spectral_energy`, `chords_changes_rate`, `pitch_salience`, `spectral_complexity`
  * d. Texture & Timbre: `spectral_centroid`, `barkbands_flatness_db`, `zerocrossingrate`

* **Solution**

  Some high-dimensional visualization techniques such as *Parallel Coordinates* would not easily illustrate intuitive clustering of songs to quadrants in *Russell's Core Affect Framework*.*PCA* mathematically compresses the twelve dimensions into two principal components and directly maps them onto a 2D plane. By aligning *Principal Component 1 (PC1)* horizontally to represent *valence* and *Principal Component 2 (PC2)* vertically to represent *arousal*, abstract sonic data is translated into an intuitive spatial representation of *Russell's Core Affect Framework*.

* **PCA Aesthetic Design Decisions**

  Aesthetic design decisions were implemented to unify mathematical accuracy and precision with intuitive reading and interpretation.

  * **Italicized Text:** The *PCA* heading, tooltip heading, and axes labels are italicized to subtly move the primary focus of the *PCA* to the data points.
  * **Grid Quadrants:** A four-quadrant coordinate system with a central origin $(0,0)$ was selected to represent *Russell's Core Affect Framework*. Gridlines, tick marks, and axes labels are colored with a dark gray variant (rgb(64, 70, 84)) and altered with an opacity ranging from 0.4 to 0.8. As a result, the primary focus of the *PCA* significantly moves to the data points.
  * **Color-Coded Data Points by *Core Affect Quadrant*:** Each  data point (song) is color-coded as a function of mapping the associated *Primary Feeling* to one of four *Core Affect Quadrants*:
    * *Quadrant 1 (High Arousal + Positive Valence)*
    * *Quadrant 2 (High Arousal + Negative Valence)*
    * *Quadrant 3 (Low Arousal + Negative Valence)*
    * *Quadrant 4 (Low Arousal + Positive Valence)*
  * **Color-Coded Quadrant Labels:** Each quadrant in *Russell's Core Affect Framework* is presented in the *PCA* through a corresponding label. Each label is color-coded according to the represented quadrant and is altered with an opacity of 0.2. The primary focus of the *PCA* is maintained because the low-opacity labels do not obscure the high-opacity data points.
  * **Emphasizing Cognitive Dissonance:** The presence of color-coded data points and quadrants immediately reveals anomalies. For instance, *My Sacrifice* by *Creed* is associated with a *Primary Feeling* mapping to Quadrant 1 (rgb(200, 180, 0)), but the data point is located in Quadrant 3 (rgb(0, 0, 255)). This occurrence draws attention and consideration for why some respondents experience a particular *Primary Feeling* when listening to a song.

* **PCA Tooltip Design Decisions:**

  Since *PCA* abstracts 12 unique sonic features into *PC1* and *PC2*, the 2D scatter plot cannot completely communicate why a song mathematically clustered to a particular quadrant in *Russell's Core Affect Framework*. The interactive tooltip offers the data required to form a complete understanding of song location.
  
  * **Offered Data:** Hovering over any data point reveals a comprehensive tooltip listing *song_name*, *artist_name*, *primary_feeling*, *scaled_bpm*, *scaled_danceability*, *scaled_onset_rate*, *scaled_average_loudness*, *scaled_dynamic_complexity*, *scaled_spectral_energy*, *scaled_chords_changes_rate*, *scaled_pitch_salience*, *scaled_spectral_complexity*, *scaled_spectral_centroid*, *scaled_barkbands_flatness_db*, and *scaled_zerocrossingrate*. The scaled sonic features provide the values processed into *PC1* and *PC2* to form a complete understanding of song location.
  * **Text Coloring:** The fields are colored a dark gray variant (rgb(64, 70, 84)) while the corresponding values are colored black (rgb(10, 10, 10)). This color contrast distinguishes and immediately improves the readability of the values.
  * **Box Coloring:** The tooltip box is colored with a light green variant (rgb(239, 250, 243)) to compliment and emphasize the fields and corresponding values.

---

## Web Implementation Details

* **Summary:** The **Song Sonics & Feelings** web application is compiled through Vite, and was developed utilizing JavaScript, React, Bulma CSS, and D3. The web application is deployed to Vercel.

* **UI Wireframe Designs:** UI wireframes were designed for the Exploratory PCA and Data Methodology rendered in the **Song Sonics & Feelings** web application. The UI wireframes provided a general arrangement for the React components rendered in the **Song Sonics & Feelings** web application.

![Exploratory PCA Wireframe](./wireframes/ExploratoryPCAUIWireframe.png)
![Data Methodology Wireframe](./wireframes/DataMethodologyUIWireframe.png)

* **Complexity Consideration:** Since the *Song Preference & Feeling Survey* was administered during a finite period to collect the *song_name*, *artist_name*, and *primary_feeling* data rendered through the *PCA*, *pca_matrix.json* functions as a static dataset. CSV files are exclusively built to move the data through different cleaning and processing phases. HTTP requests to external APIs are not required to obtain sonic features for each song. As a result, the **Song Sonics & Feelings** web application completely avoids consuming uneeded network bandwidth.

---

## Findings

Although the *PCA* is implemented to spatially locate songs within a quadrant established in *Russell’s Core Affect Framework* as a result of linear combinations of scaled sonic values, there is a particular subset of songs associated with a *Primary Feeling* that maps to a different *Core Affect Quadrant*. Specifically, approximately 64.4% of the songs presented in *Exploratory PCA: Mapping Song Sonics & Feelings* are associated with a *Primary Feeling* that maps to a different *Core Affect Quadrant*. As a greater number of presented songs belong to this subset, the *PCA* demonstrates that the underlying mathematics used to process sonic values do not always accurately predict the *Primary Feeling* of a respondent in response to a song. The *PCA* preparation phases exclude comprehension of human factors such as unique emotional reactivity and cultural influence. When listening to a song, individuals experience a *Primary Feeling* as a function of not only absorbed sonic qualities, but also unique emotional reactivity, and cultural influence. Subsequently, all three factors require evaluation to understand why individuals experience a *Primary Feeling* in response to a song. *Exploratory PCA: Mapping Song Sonics & Feelings* illustrates a plethora of songs that mathematically cluster to one quadrant within *Russell’s Core Affect Framework*, yet are associated with a *Primary Feeling* mapping to a different *Core Affect Quadrant*.

Approximately 10.3% of the subset mathematically cluster to spatial Quadrant 1 of *Exploratory PCA: Mapping Song Sonics & Feelings*, yet are associated with a *Primary Feeling* that maps to a different *Core Affect Quadrant*. Within the selected 10.3% of the subset, *Calm Down* by *Rema*, *Yes I’m A Mess* by *AJR*, and *Aloha Ke Akua* by *Nahko And Medicine For The People* are associated with a *Primary Feeling* mapping to Quadrant 4. Quadrant 1 and Quadrant 4 are neighbors as they each represent high *arousal* and positive *valence*, and low *arousal* and positive *valence*. *Calm Down* by *Rema* is associated with a *Primary Feeling* of Calm, *Yes I’m A Mess* by *AJR* is associated with a *Primary Feeling* of Validated, and *Aloha Ke Akua* by *Nahko And Medicine For The People* is associated with a *Primary Feeling* of Hopeful. Considering the *PC2* range of the songs, the maximum *PC2* coordinate is approximately 1.504, and the minimum *PC2* coordinate is approximately 0.057. The three songs mathematically locate to the bottom half of Quadrant 1. As a result, the three songs are within reasonable proximity of Quadrant 4. While the cleaning and processing phases to prepare *PCA* data exclude understanding of why respondents experienced a *Primary Feeling*, the *PC2* range and coordinate locations may suggest that the sonic values of each song predict certain feelings that are similar to the *Primary Feeling* of the corresponding respondent when measured through *valence* and *arousal*. As for the remaining songs in the subset associated with a *Primary Feeling* that maps to a different *Core Affect Quadrant*, approximately 44.8% of the subset mathematically cluster to spatial Quadrant 2, approximately 20.7% of the subset mathematically cluster to spatial Quadrant 3, and approximately 24.1% of the subset mathematically cluster to spatial Quadrant 4.

Considering the complete set of songs presented in the *PCA*, approximately 68.8% of the songs are associated with a *Primary Feeling* mapping to *Core Affect Quadrant 1*. As Quadrant 1 represents high *arousal* and positive *valence*, a compelling question emerges as well. Do most survey respondents select a favorite song as a function of experiencing high *arousal* and positive *valence*?

---

## Pipeline Limitations

* The survey population is completely bounded to full-time employees in the United States. This constraint creates a sampling selection bias, which structurally omits demographics with different music preferences such as full-time students, part-time students, part-time employees, and retired individuals. Consequently, all data points rendered in the PCA reflect the music preferences of a subset of the full-time employee demographic in the United States rather than a general demographic in the United States.
* The `yt-dlp` Python library is utilized to download and extract compressed audio from YouTube Music. Subsequently, `yt-dlp` uses FFmpeg to transform the compressed audio into an uncompressed WAV file. There is some probability that the subset of selected songs are associated with WAV files containing different levels of distortion. When distortion is present in an uncompressed WAV file, there is also some probability that high-frequency overtones (harmonic distortion), Harmonic-to-Noise Ratio (HNR), and compression of dynamic range manipulate the digital audio signal. As a result, data clustering in the PCA may partially reflect manipulated sonic qualities that do not accurately represent the authentic sonic qualities of some songs.
* By utilizing untampered WAV files through standard recording LPs, standard recording EPs, and singles, the Essentia sonic feature extraction process introduces a systematic production bias. Since standard recording LPs, standard recording EPs, and singles frequently experience differing mastering procedures and structural modifications, the resulting Essentia sonic features represent differences in release format and engineering output as well as the sonic qualities of the songs. Consequently, data clustering in the PCA may partially group songs based on release format and engineering output rather than similar sonic qualities.
* There is some probability that a subset of the selected songs from the full-time employee respondent pool are not accessible in YouTube Music as a result of regional licensing restrictions. Although YouTube Music functions globally, distribution contracts function regionally, which means that the extent of official release accessibility relies on the location of the user. Consequently, data clustering in the PCA may not present songs that are only accessible in YouTube Music to a subset of regions.
* When YouTube Music offers certain standard recording LPs, standard recording EPs, and singles containing songs that also have been altered for secondary initiatives, there is some probability that the audio streamed through this particular subset of standard recording LPs, standard recording EPs, and singles is sourced from altered modifications of the songs. The acquisition of songs from standard recording LPs, standard recording EPs, and singles in YouTube Music also creates a systematic production bias. Consequently, data clustering in the PCA may partially group songs based on engineering output rather than similar sonic qualities.
* When YouTube Music offers certain standard recording LPs, standard recording EPs, and singles, there is some probability that duplicates of these official releases are also accessible. YouTube Music provides duplicates of standard recording LPs, standard recording EPs, and singles when the distributor resends the official release with updated information. There is also some probability that at least one of the duplicates is structurally incorrect and contains songs altered for secondary initiatives. Consequently, data clustering in the PCA may partially group songs based on engineering output rather than similar sonic qualities.

---

## Future Work

* **Cleaning and Processing a Greater Dataset:** As detailed in *data_methodology_log.md*, a simple random sampling method was applied to randomly select 85 songs from the total 275 songs collected through the *Song Preference & Feeling Survey*. All cleaning and processing phases are applicable to the remaining 190 songs. There is some probability that a greater number of *PC1* and *PC2* coordinates can be added to *Exploratory PCA: Mapping Song Sonics & Feelings*.
* **Implementing Non-linear Visualizations:** Implementing a UMAP may reveal whether non-linear dimensionality reduction illustrates distinct song clusters.

---

## APA References

* IBM. (n.d.). What is principal component analysis (PCA)? Retrieved July 17, 2026, from https://www.ibm.com/think/topics/principal-component-analysis
* Russell, J. A. (2003). Core affect and the psychological construction of emotion. Psychological Review, 110(1), 145–172. https://doi.org/10.1037/0033-295X.110.1.145
* Bogdanov, D., Wack, N., Gómez, E., Gulati, S., Herrera, P., Mayor, O., Roma, G., Salamon, J., Zapata, J., & Serra, X. (2013). ESSENTIA: An open-source library for sound and music analysis. In Proceedings of the 21st ACM International Conference on Multimedia (pp. 855–858). https://doi.org/10.1145/2502081.2502229