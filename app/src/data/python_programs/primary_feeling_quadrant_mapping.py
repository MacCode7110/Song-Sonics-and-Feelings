from pathlib import Path
import pandas as pd

# Map each corrected primary feeling to one of the four quadrants in Russell's Core Affect Framework
def map_primary_feeling_to_quadrant(primary_feeling):
    
    # Declare quadrant mapping dictionary for primary feelings through the lens of Russell's Core Affect Framework. Valence maps to the x-axis. Arousal maps to the y-axis. Quadrants are declared through four different groupings of primary feelings. Primary feelngs are mapped to the quadrant that most accurately represents the corresponding Arousal and Valence qualities. Primary feelings are mapped through the succeeding groupings.
    quadrant_dictionary = {
        # Quadrant 1 (Top-Right): High Arousal + Positive Valence
        "Happy": "Quadrant 1",
        "Upbeat": "Quadrant 1",
        "Free-spirited": "Quadrant 1",
        "Joyful": "Quadrant 1",
        "Empowered": "Quadrant 1",
        "Excited": "Quadrant 1",
        "Awesome": "Quadrant 1",
        "Good": "Quadrant 1",
        "Euphoric": "Quadrant 1",
        "Youthful": "Quadrant 1",
        "Energized": "Quadrant 1",
        "Enthusiastic": "Quadrant 1",
        "Confident": "Quadrant 1",
        "Joy": "Quadrant 1",
        "Elated": "Quadrant 1",
        "Powerful": "Quadrant 1",
        "Awestruck": "Quadrant 1",
        # Quadrant 2 (Top-Left): High Arousal + Negative Valence
        "Bitter": "Quadrant 2",
        # Quadrant 3 (Bottom-Left): Low Arousal + Negative Valence
        "Melancholic": "Quadrant 3",
        "Bittersweet": "Quadrant 3",
        # Quadrant 4 (Bottom-Right): Low Arousal + Positive Valence
        "Calm": "Quadrant 4",
        "Comforted": "Quadrant 4",
        "Nostalgic": "Quadrant 4",
        "Validated": "Quadrant 4",
        "Empathy": "Quadrant 4",
        "Inspired": "Quadrant 4",
        "Hopeful": "Quadrant 4"
    }
    
    # Return mapped quadrant value for the argument primary_feeling.
    return quadrant_dictionary.get(primary_feeling)

# Execute the mapping function on the input_csv_path argument and export the results to the output_csv_path argument.
def execute_primary_feeling_mapping(input_csv_path, output_csv_path):
    df = pd.read_csv(input_csv_path)
    
    # Apply mapping function to create the core_affect_quadrant column in the DataFrame.
    df['core_affect_quadrant'] = df['primary_feeling'].apply(map_primary_feeling_to_quadrant)
    
    # Export the DataFrame to a new CSV file with the appended core_affect_quadrant column.
    df.to_csv(output_csv_path, index=False)

    # Print a message demonstrating a successful mapping operation.
    print(f"Successfully mapped primary feelings to quadrants and saved to {output_csv_path}")


# Find the exact directory of the current program.
program_dir = Path(__file__).parent

# Declare the input and output CSV file paths.
input_csv = "../csv_files/music_preferences_and_feelings_survey_data_master_cleaned_v3.csv"
output_csv = "../csv_files/music_preferences_and_feelings_survey_data_master_cleaned_v4.csv"

# Join the exact directory with input_csv.
input_csv_path = program_dir/input_csv

# Safely jump one level up and navigate into the csv_files directory.
output_directory = program_dir.parent/"csv_files"
output_csv_path = output_directory/output_csv

# Execute the mapping funtion on input_csv_path and output_csv_path arguments to map primary feelings to quadrants and export the results to a new CSV file.
execute_primary_feeling_mapping(input_csv_path, output_csv_path)