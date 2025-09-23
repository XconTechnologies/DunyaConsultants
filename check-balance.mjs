import fs from 'fs';

const filePath = 'client/src/pages/blog.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let parenCount = 0;
let braceCount = 0;
let lineNumber = 0;
let inString = false;
let inComment = false;
let stringChar = '';

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  const prevChar = i > 0 ? content[i - 1] : '';
  const nextChar = i < content.length - 1 ? content[i + 1] : '';
  
  // Track line numbers
  if (char === '\n') lineNumber++;
  
  // Handle string literals
  if (!inComment && (char === '"' || char === "'" || char === '`')) {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar && prevChar !== '\\') {
      inString = false;
      stringChar = '';
    }
    continue;
  }
  
  // Handle comments
  if (!inString) {
    if (char === '/' && nextChar === '/') {
      inComment = 'line';
      i++; // skip next char
      continue;
    }
    if (char === '/' && nextChar === '*') {
      inComment = 'block';
      i++; // skip next char  
      continue;
    }
    if (inComment === 'line' && char === '\n') {
      inComment = false;
      continue;
    }
    if (inComment === 'block' && char === '*' && nextChar === '/') {
      inComment = false;
      i++; // skip next char
      continue;
    }
  }
  
  // Skip if in string or comment
  if (inString || inComment) continue;
  
  // Track brackets
  if (char === '(') {
    parenCount++;
  } else if (char === ')') {
    parenCount--;
    if (parenCount < 0) {
      console.log(`❌ NEGATIVE PAREN COUNT at line ${lineNumber + 1}, column ${i - lines.slice(0, lineNumber).join('\n').length}:`);
      console.log(`Current counts: () = ${parenCount}, {} = ${braceCount}`);
      console.log('\nContext (5 lines before and after):');
      const start = Math.max(0, lineNumber - 5);
      const end = Math.min(lines.length, lineNumber + 6);
      for (let j = start; j < end; j++) {
        const marker = j === lineNumber ? '>>> ' : '    ';
        console.log(`${marker}${j + 1}: ${lines[j]}`);
      }
      process.exit(1);
    }
  } else if (char === '{') {
    braceCount++;
  } else if (char === '}') {
    braceCount--;
    if (braceCount < 0) {
      console.log(`❌ NEGATIVE BRACE COUNT at line ${lineNumber + 1}, column ${i - lines.slice(0, lineNumber).join('\n').length}:`);
      console.log(`Current counts: () = ${parenCount}, {} = ${braceCount}`);
      console.log('\nContext (5 lines before and after):');
      const start = Math.max(0, lineNumber - 5);
      const end = Math.min(lines.length, lineNumber + 6);
      for (let j = start; j < end; j++) {
        const marker = j === lineNumber ? '>>> ' : '    ';
        console.log(`${marker}${j + 1}: ${lines[j]}`);
      }
      process.exit(1);
    }
  }
}

console.log(`✅ Final counts: () = ${parenCount}, {} = ${braceCount}`);
if (parenCount !== 0 || braceCount !== 0) {
  console.log(`❌ IMBALANCED: Missing ${-parenCount} opening parens, ${-braceCount} opening braces`);
} else {
  console.log(`✅ All brackets balanced!`);
}