import json
import re

transcript_path = r"C:\Users\Prova\.gemini\antigravity-ide\brain\c6062319-a6d0-4200-b94e-fab4bd6bed0e\.system_generated\logs\transcript.jsonl"
files_to_restore = [
    "src/index.css",
    "src/components/Header.tsx",
    "src/components/Button.tsx",
    "src/components/Footer.tsx",
    "src/pages/Home.tsx",
    "src/pages/Shop.tsx",
    "src/pages/About.tsx",
    "src/components/AnnouncementBar.tsx",
    "src/components/Divider.tsx",
    "src/App.tsx",
    "src/i18n.ts"
]

file_contents = {k: "" for k in files_to_restore}

# We want the FIRST view_file result for each of these files to capture the initial state.
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'default_api:view_file' in line:
            try:
                data = json.loads(line)
                content = data.get('content', '')
                if not content and 'tool_responses' in data:
                    for tr in data['tool_responses']:
                        c = tr.get('content', '')
                        for file in files_to_restore:
                            if file.replace('/', '\\') in c or file in c:
                                if file_contents[file] == "":
                                    match = re.search(r"The following code has been modified.*?\n(.*?)The above content shows", c, re.DOTALL)
                                    if match:
                                        raw_lines = match.group(1).split('\n')
                                        clean_lines = []
                                        for rline in raw_lines:
                                            m = re.match(r"^\d+:\s(.*)", rline)
                                            if m:
                                                clean_lines.append(m.group(1))
                                            elif rline == "":
                                                clean_lines.append("")
                                        file_contents[file] = "\n".join(clean_lines)
            except:
                pass

for f, c in file_contents.items():
    if c:
        out_path = "C:/Users/Prova/Music/ola trans website/" + f
        print(f"Restoring {f}")
        with open(out_path, "w", encoding="utf-8") as out:
            out.write(c)
