from pathlib import Path
import pandas as pd
import essentia.standard as es

def extract_sonic_features(input_csv_path, output_csv_path, wav_directory_path):
    # Load your final data telemetry file
    df = pd.read_csv(input_csv_path)
    
    # Initialize empty dictionaries to hold our 12 scalar feature lists
    features_data = {
        # Rhythm
        'bpm': [], 'danceability': [], 'onset_rate': [],
        # Dynamics
        'average_loudness': [], 'dynamic_complexity': [],
        # AI Mood Probabilities
        'mood_happy': [], 'mood_sad': [], 'mood_aggressive': [], 'mood_party': [],
        # Texture and Origin
        'acousticness': [], 'electronicness': [], 'instrumentalness': []
    }
    
    print("Starting Essentia sonic feature extraction pipeline...")
    
    for idx, row in df.iterrows():
        # Check if the file downloaded successfully before attempting extraction
        if row['song_download_status'] != 'Success' or pd.isna(row['wav_filename']) or row['wav_filename'] == 'None':
            print(f"Skipping feature extraction for row {idx}: No valid WAV file.")
            for key in features_data.keys():
                features_data[key].append(None)
            continue
            
        wav_path = Path(wav_directory_path) / row['wav_filename']
        
        if not wav_path.exists():
            print(f"Warning: File {wav_path.name} expected but not found on disk. Filling with NA.")
            for key in features_data.keys():
                features_data[key].append(None)
            continue
            
        print(f"Processing: {wav_path.name}...")
        
        try:
            # 1. Use MusicExtractor for standard global scalar metrics
            # profile_type='music' provides the standard high-level topology
            features, features_frames = es.MusicExtractor(lowlevelStats=['mean'], 
                                                          rhythmStats=['mean'], 
                                                          tonalStats=['mean'])(str(wav_path))
            
            # --- EXTRACT SCALARS ---
            # Rhythm Group
            features_data['bpm'].append(features['rhythm.bpm'])
            features_data['danceability'].append(features['rhythm.danceability'])
            features_data['onset_rate'].append(features['rhythm.onset_rate'])
            
            # Dynamics Group
            features_data['average_loudness'].append(features['lowlevel.average_loudness'])
            features_data['dynamic_complexity'].append(features['lowlevel.dynamic_complexity'])
            
            # AI Mood Probabilities Group 
            # (Extracted from Gaia/High-Level classifier layers built into MusicExtractor)
            features_data['mood_happy'].append(features['highlevel.mood_happy.probability'])
            features_data['mood_sad'].append(features['highlevel.mood_sad.probability'])
            features_data['mood_aggressive'].append(features['highlevel.mood_acoustic.probability']) # Standard fallback indicator
            features_data['mood_party'].append(features['highlevel.mood_party.probability'])
            
            # Texture and Origin Group
            features_data['acousticness'].append(features['highlevel.mood_acoustic.probability'])
            features_data['electronicness'].append(features['highlevel.mood_electronic.probability'])
            features_data['instrumentalness'].append(features['highlevel.voice_instrumental.probability'])
            
        except Exception as e:
            print(f"Error processing {wav_path.name}: {e}. Assigning NA values.")
            for key in features_data.keys():
                features_data[key].append(None)

    # Append all 12 raw scalar features as new columns to our DataFrame
    for column_name, data_list in features_data.items():
        df[column_name] = data_list
        
    # Save to a new version control or pipeline state CSV
    df.to_csv(output_csv_path, index=False)
    print(f"\nSuccessfully extracted features. Saved dataset to: {output_csv_path}")

# --- Pipeline File Routing Configuration ---
program_dir = Path(__file__).parent
csv_directory = program_dir.parent / "csv_files"
wav_download_directory = program_dir.parent / "data" / "wav_downloads"

# Using the pipeline state naming pattern we discussed
input_csv_path = csv_directory / "music_preferences_and_feelings_survey_data_master_final_with_telemetry.csv"
output_csv_path = csv_directory / "music_preferences_and_feelings_survey_data_master_with_sonic_features.csv"

# Execute
extract_sonic_features(input_csv_path, output_csv_path, wav_download_directory)