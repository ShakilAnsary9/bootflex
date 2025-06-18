const fs = require("fs");
const path = require("path");

const tempDir = path.join(__dirname, "../temp");
const src = path.join(tempDir, "style.css");
const dest = path.join(__dirname, "../dist/style.css");

// Ensure dist directory exists
if (!fs.existsSync(path.join(__dirname, "../dist"))) {
  fs.mkdirSync(path.join(__dirname, "../dist"));
}

// Move file
fs.rename(src, dest, (err) => {
  if (err) {
    console.error("❌ Failed to move style.css:", err);
  } else {
    console.log("✅ Moved style.css to dist/");

    // Delete temp folder after move
    fs.rmdir(tempDir, { recursive: true }, (err) => {
      if (err) {
        console.error("❌ Failed to remove temp folder:", err);
      } else {
        console.log("🧹 Cleaned up temp folder.");
      }
    });
  }
});
