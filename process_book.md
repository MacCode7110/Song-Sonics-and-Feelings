# Process Book

**Web Developer, Data Researcher, Scratch DJ, Rapper:** Matthew McAlarney

**Technologies:** Python, Pandas, yt-dlp, FFmpeg, WAV, Essentia Audio Analysis, PCA (Principal Component Analysis), Russell's Core Affect Framework

## Overview and Motivation
The **Song Sonics & Feelings** web application was constructed to examine the relationship between song sonics and the mapping of feelings to parametric neurophysiological foundations.

The motivation to develop **Song Sonics & Feelings** was to understand the connection between the sonic qualities of songs and the resulting primary feeling of listeners. Through processing sonic features and mathematically clustering songs within a neurophysiological framework, a *PCA* instance illustrates the level of consistency in which linear combinations of sonic values accurately predict the resulting primary feeling of listeners.

## Related Work
1. **Music Information Retrieval (MIR):** Implementing computational analysis to extract meaningful features from audio signals such as tempo, loudness, and spectral complexity.
2. **Russell's Core Affect Framework (1980):** A highly influential framework that maps feelings to one of four quadrants along two neurophysiological dimensions:
   * **Valence:** The horizontal axis representing the level of positivity (pleasantness) or negativity (unpleasantness).
   * **Arousal:** The vertical axis representing the physiological level of energy, which ranges from low (sleepy/deactivated) to high (excited/activated).

## Research Questions
* How do scalar sonic features such as `bpm`, `danceability`, and `onset_rate` cluster songs together in a *PCA*?
* To what extent do linear combinations of song sonics accurately predict the classification of the listener's primary feeling through *Russell's Core Affect Framework*?
* Why do certain songs such as *My Sacrifice* by *Creed* mathematically cluster in one quadrant according to *PCA* coordinates, yet evoke primary emotions mapping to a different quadrant through *Russell's Core Affect Framework*?

## Data Sources and Processing
The data pipeline leverages several robust open-source tools to ingest, process, and analyze audio files:

1. **Extraction:** Audio files are sourced and downloaded using `yt-dlp` and decoded into uncompressed `WAV` format via `FFmpeg`.
2. **Feature Extraction:** The audio analysis library **Essentia** is used to extract 12 key scaled sonic features:
   * `scaled_bpm`, `scaled_danceability`, `scaled_onset_rate`, `scaled_average_loudness`
   * `scaled_dynamic_complexity`, `scaled_spectral_energy`, `scaled_chords_changes_rate`
   * `scaled_pitch_salience`, `scaled_spectral_complexity`, `scaled_spectral_centroid`
   * `scaled_barkbands_flatness_db`, `scaled_zerocrossingrate`
3. **Structuring:** The resulting features are compiled, structured, and normalized using `Python` and `Pandas`.

## Design Evolution
The core visual tool is the **Exploratory PCA Scatter Plot**. 

* **Early Concept:** The initial design aimed to plot raw sonic features against one another, which quickly became cluttered due to the high dimensionality (12 distinct features).
* **Dimensionality Reduction:** Implementing **Principal Component Analysis (PCA)** allowed us to reduce those 12 dimensions down to 2 main coordinates ($PC1$ and $PC2$) while retaining the maximum variance in the data.
* **Integrating Psychology:** To make the math intuitive, $PC1$ was mapped to represent the horizontal axis of **Valence** (negative feelings on the left, positive on the right), and $PC2$ was mapped to represent the vertical axis of **Arousal** (low energy at the bottom, high energy at the top).
* **Color-Coding:** Data points are color-coded into four distinct quadrants based on Russell’s Core Affect Framework:
  * 🟨 **Quadrant 1:** High Arousal + Positive Valence
  * 🟥 **Quadrant 2:** High Arousal + Negative Valence
  * 🟦 **Quadrant 3:** Low Arousal + Negative Valence
  * 🟩 **Quadrant 4:** Low Arousal + Positive Valence

## Implementation
The application is built as a highly interactive, responsive web experience deployed on Vercel. 
* **Frontend:** Interactive scatter plot utilizing modern web standards.
* **Interactivity:** A comprehensive, hover-enabled tooltip allows users to explore individual data points, revealing detailed sonic attributes, coordinates, and song metadata.
* **Math Layer:** The alignment of Principal Components to the coordinate plane allows a direct spatial overlay of mathematical song similarities on top of emotional quadrants.

## Analysis and Findings
The exploratory visualizer successfully demonstrates that songs with similar sonic properties group together. However, a fascinating cognitive gap was identified:

> **The Sonic vs. Emotional Disconnect**
> A subset of songs is associated with a Primary Feeling mapping to a Core Affect Quadrant that differs from its mathematical spatial cluster in the Exploratory PCA. 
> 
> *Example:* **My Sacrifice** by Creed is emotionally associated with **Core Affect Quadrant 1** (High Arousal + Positive Valence), yet its mathematical sonic profile causes it to cluster in **Quadrant 3** (Low Arousal + Negative Valence). 

This highlights that human emotional response to music is not purely a product of raw physical sonics; lyricism, nostalgia, cultural context, and personal memory play massive roles in how we process a song's "feeling."

## Limitations
* **Sample Size & Diversity:** The current dataset represents a curated subset of songs and user responses.
* **Linear Assumptions:** PCA is a linear dimensionality reduction technique; it may miss complex, non-linear relationships between certain sonic elements.
* **Subjectivity of Feelings:** Emotional mapping relies on self-reported "Primary Feelings" which vary heavily across different listener demographics.

## Future Work
* **Expanding the Dataset:** Incorporating a broader catalog of genres, tempos, and global music styles.
* **Non-linear Embeddings:** Experimenting with t-SNE or UMAP to see if non-linear dimensionality reduction yields more emotionally cohesive spatial clusters.
* **Interactive Surveying:** Allowing live users to input their own emotional responses to songs and dynamically updating the database to see how emotional consensus shifts.

## References
* Russell, J. A. (1980). *A circumplex model of affect.* Journal of Personality and Social Psychology.
* Bogdanov, D., et al. (2013). *Essentia: An audio analysis library for music information retrieval.* ISMIR.
* Project Web App: [Song Sonics & Feelings](https://music-preferences-and-feelings.vercel.app/exploratory-pca)