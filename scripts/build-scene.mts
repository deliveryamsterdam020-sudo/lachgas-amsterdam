// Writes the hero scene layers to /public as static, compressible SVG files.
// Runs before `dev` and `build`; the generator is deterministic, so the output
// only changes when the drawing code changes.

import { writeFileSync } from "node:fs";
import { canalLightsSvg, canalSceneSvg } from "../src/components/visual/canalScene.ts";

writeFileSync(new URL("../public/canal-scene.svg", import.meta.url), canalSceneSvg());
writeFileSync(new URL("../public/canal-lights.svg", import.meta.url), canalLightsSvg());
console.log("✓ hero scene written to public/");
