from pathlib import Path
import pandas as pd

# Find the exact directory of the current program
program_dir = Path(__file__).parent

# Declare the input and output CSV file paths
input_csv = "../csv_file/music_preference_survey_data_master_cleaned_v1.csv"
output_csv = "../csv_file/music_preference_survey_data_master_cleaned_v2.csv"

# Join the exact directory with input_csv
input_csv_path = program_dir/input_csv

# Safely jump one level up and navigate into the csv_file directory
output_directory = program_dir.parent/"csv_file"
output_csv_path = output_directory/output_csv

# Read the CSV file into a DataFrame
df = pd.read_csv(input_csv_path)

# Sample 85 rows from the DataFrame and set a random seed for reproducibility
sampled_df = df.sample(n=85, random_state=0)

# Store the sampled data in output_csv
sampled_df.to_csv(output_csv_path, index=False)

# Print a message demonstrating a successful sampling operation
print(f"Successfully sampled {len(sampled_df)} rows and saved to {output_csv_path}")