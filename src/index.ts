import fs from 'fs';

const extractSvgToFontVars = async (fileInput: string, fileOutput: string): Promise<void> => {
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
	} catch (err) {
		console.error(err);
	}
};

export default extractSvgToFontVars;
