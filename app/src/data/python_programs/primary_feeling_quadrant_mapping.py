from pathlib import Path
import pandas as pd

def map_primary_feeling_to_quadrant(primary_feeling):
    
    # Map each corrected primary feeling to one of the four quadrants in Russell's Core Affect Framework
    quadrant_dictionary = {
        # Quadrant 1 (Top-Right): High Arousal + Positive Valence
        "Awesome": "Quadrant 1",
        "Awestruck": "Quadrant 1",
        "Confident": "Quadrant 1",
        "Elated": "Quadrant 1",
        "Empowered": "Quadrant 1",
        "Energized": "Quadrant 1",
        "Enthusiastic": "Quadrant 1",
        "Euphoric": "Quadrant 1",
        "Excited": "Quadrant 1",
        "Good": "Quadrant 1",
        "Happy": "Quadrant 1",
        "Independent": "Quadrant 1",
        "Joy": "Quadrant 1",
        "Powerful": "Quadrant 1",
        "Upbeat": "Quadrant 1",
        "Youthful": "Quadrant 1",
        # Quadrant 2 (Top-Left): High Arousal + Negative Valence
        "Bitter": "Quadrant 2",
        # Quadrant 3 (Bottom-Left): Low Arousal + Negative Valence
        "Bittersweet": "Quadrant 3",
        "Melancholic": "Quadrant 3",
        # Quadrant 4 (Bottom-Right): Low Arousal + Positive Valence
        "Calm": "Quadrant 4",
        "Comforted": "Quadrant 4",
        "Empathy": "Quadrant 4",
        "Hopeful": "Quadrant 4",
        "Inspired": "Quadrant 4",
        "Nostalgic": "Quadrant 4",
        "Validated": "Quadrant 4",
    }
    
    return quadrant_dictionary.get(primary_feeling)

def execute_primary_feeling_mapping(input_csv_path, output_csv_path):
    df = pd.read_csv(input_csv_path)
    
    df['core_affect_quadrant'] = df['primary_feeling'].apply(map_primary_feeling_to_quadrant)
    
    df.to_csv(output_csv_path, index=False)

    print(f"Successfully mapped primary feelings to quadrants and saved to {output_csv_path}")


program_dir = Path(__file__).parent

input_csv = "../csv_files/music_preferences_and_feelings_survey_data_master_cleaned_v3.csv"
output_csv = "../csv_files/music_preferences_and_feelings_survey_data_master_cleaned_v4.csv"

input_csv_path = program_dir/input_csv

output_directory = program_dir.parent/"csv_files"
output_csv_path = output_directory/output_csv

execute_primary_feeling_mapping(input_csv_path, output_csv_path)