from pathlib import Path
import pandas as pd
from sklearn.decomposition import PCA

def calculate_pca_coordinates(input_csv_path, output_json_path):
    df = pd.read_csv(input_csv_path)
    
    scaled_features = [
        'scaled_bpm', 'scaled_danceability', 'scaled_onset_rate',
        'scaled_average_loudness', 'scaled_dynamic_complexity',
        'scaled_spectral_energy', 'scaled_chords_changes_rate', 'scaled_pitch_salience', 'scaled_spectral_complexity',
        'scaled_spectral_centroid', 'scaled_barkbands_flatness_db', 'scaled_zerocrossingrate'
    ]
    
    pca = PCA(n_components=2, random_state=75)
    pca_matrix = pca.fit_transform(df[scaled_features])
    
    df['pca_x'] = pca_matrix[:, 0]
    df['pca_y'] = pca_matrix[:, 1]
    
    df.to_json(output_json_path, orient="records", indent=2)
    print(f"Successfully constructed 2D coordinate matrix and saved to {output_json_path.name}")

program_dir = Path(__file__).parent
csv_directory = program_dir.parent / "csv_files"
json_directory = program_dir.parent / "json_files"

input_csv_path = csv_directory / "music_preferences_and_feelings_survey_data_master_sonic_feature_standardization.csv"
output_json_path = json_directory / "pca_matrix.json"

calculate_pca_coordinates(input_csv_path, output_json_path)