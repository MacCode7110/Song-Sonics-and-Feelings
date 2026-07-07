from pathlib import Path
import pandas as pd

program_dir = Path(__file__).parent

input_csv = "../csv_files/music_preferences_and_feelings_survey_data_master_cleaned_v1.csv"
output_csv = "../csv_files/music_preferences_and_feelings_survey_data_master_cleaned_v2.csv"

input_csv_path = program_dir/input_csv

output_directory = program_dir.parent/"csv_files"
output_csv_path = output_directory/output_csv

df = pd.read_csv(input_csv_path)

sampled_df = df.sample(n=85, random_state=75)

sampled_df.to_csv(output_csv_path, na_rep="NA", index=False)

print(f"Successfully sampled {len(sampled_df)} rows and saved to {output_csv_path}")