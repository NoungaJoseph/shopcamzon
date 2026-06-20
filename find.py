import json

transcript_path = r"C:\Users\Prova\.gemini\antigravity-ide\brain\c6062319-a6d0-4200-b94e-fab4bd6bed0e\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'view_file' in line:
            try:
                data = json.loads(line)
                if 'tool_responses' in data:
                    for tr in data['tool_responses']:
                        c = tr.get('content', '')
                        if 'File Path: ' in c:
                            print(c.split('File Path: ')[1].split('\n')[0])
                elif 'content' in data:
                    c = data['content']
                    if 'File Path: ' in c:
                        print(c.split('File Path: ')[1].split('\n')[0])
            except Exception as e:
                print(e)
