var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
const extractSvgToFontVars = (fileInput, fileOutput) => __awaiter(void 0, void 0, void 0, function* () {
    const fileData = fs.readFileSync(fileInput, 'utf8');
    const allLines = fileData.split('\n');
    const varsArray = [];
    for (const line of allLines) {
        if (line.startsWith('$')) {
            varsArray.push(line);
        }
    }
    const varsString = varsArray.join('\n');
    try {
        fs.writeFileSync(fileOutput, varsString);
    }
    catch (err) {
        console.error(err);
    }
});
export default extractSvgToFontVars;
//# sourceMappingURL=index.js.map