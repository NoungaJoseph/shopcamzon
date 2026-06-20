import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const args = process.argv.slice(2);
const input = resolve(projectRoot, args[0] ?? "public/SHOP CAMZON (1).mp4");
const output = resolve(
  projectRoot,
  args[1] ?? "public/SHOP CAMZON (1).compressed.mp4",
);

const crf = process.env.VIDEO_CRF ?? "30";
const maxWidth = process.env.VIDEO_MAX_WIDTH ?? "1280";

if (!existsSync(input)) {
  console.error(`Input video not found: ${input}`);
  process.exit(1);
}

let ffmpegPath = "ffmpeg";

try {
  const ffmpegStatic = await import("ffmpeg-static");
  ffmpegPath = ffmpegStatic.default ?? ffmpegStatic;
} catch {
  // Fall back to a system ffmpeg if ffmpeg-static is not installed.
}

const ffmpegArgs = [
  "-y",
  "-i",
  input,
  "-vf",
  `scale='min(${maxWidth},iw)':-2`,
  "-c:v",
  "libx264",
  "-preset",
  "medium",
  "-crf",
  crf,
  "-c:a",
  "aac",
  "-b:a",
  "128k",
  "-movflags",
  "+faststart",
  output,
];

const before = statSync(input).size;
console.log(`Compressing ${input}`);
console.log(`Output: ${output}`);
console.log(`CRF=${crf}, VIDEO_MAX_WIDTH=${maxWidth}`);

const ffmpeg = spawn(ffmpegPath, ffmpegArgs, { stdio: "inherit" });

ffmpeg.on("error", (error) => {
  console.error(error.message);
  console.error(
    "Install ffmpeg-static with `npm install -D ffmpeg-static` or install ffmpeg on your system.",
  );
  process.exit(1);
});

ffmpeg.on("close", (code) => {
  if (code !== 0) {
    process.exit(code ?? 1);
  }

  const after = statSync(output).size;
  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(
    `Done: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB (${saved}% smaller)`,
  );
});
