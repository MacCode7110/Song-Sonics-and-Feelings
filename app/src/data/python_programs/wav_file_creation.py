from pathlib import Path
import pandas as pd
import yt_dlp

def download_wav_files(input_csv_path, output_csv_path):
    ydl_arguments = {
        'format': 'ba[ext=m4a]/ba',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'wav',
            'preferredquality': '0',
        }],
        
        'outtmpl': 'app/src/data/wav_downloads/%(title)s.%(ext)s',
        'noplaylist': True,
    }

    df = pd.read_csv(input_csv_path)
    
    song_download_statuses = []
    wav_filenames = []
    
    with yt_dlp.YoutubeDL(ydl_arguments) as ydl:
        for _, row in df.iterrows():
            song_url = row['youtube_music_url']
            
            if "music.youtube.com" in song_url and "watch?v=" in song_url:
                modified_song_url = song_url.split("&")[0] + "&audio=1"
                try:
                    information_dictionary = ydl.extract_info(modified_song_url, download=False)
                    
                    if 'title' in information_dictionary and information_dictionary['title']:
                        information_dictionary['title'] = information_dictionary['title'].lower().replace(" ", "")
                    
                    filename = ydl.prepare_filename(information_dictionary)
                    wav_path = Path(filename).with_suffix('.wav')
                    
                    ydl.process_info(information_dictionary)
                    
                    song_download_statuses.append("Success")
                    wav_filenames.append(wav_path.name)
                except Exception as e:
                    print(f"Skipped {row['song_name']}: {e}")
                    song_download_statuses.append("Download failed")
                    wav_filenames.append("None")
            else:
                print(f"Skipped {row['song_name']}: Invalid YouTube Music URL structure.")
                song_download_statuses.append("Invalid URL structure")
                wav_filenames.append("None")

    df['song_download_status'] = song_download_statuses
    df['wav_filename'] = wav_filenames
    
    df.to_csv(output_csv_path, index=False)
    print(f"Successfully downloaded WAV files and recorded download statuses to {output_csv_path}")

program_dir = Path(__file__).parent
csv_directory = program_dir.parent / "csv_files"

input_csv_path = csv_directory / "music_preferences_and_feelings_survey_data_master_feelings_mapped.csv"
output_csv_path = csv_directory / "music_preferences_and_feelings_survey_data_master_song_download.csv"

download_wav_files(input_csv_path, output_csv_path)