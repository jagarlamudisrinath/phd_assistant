const fs = require('fs');
const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, convertInchesToTwip, PageNumber, NumberFormat, Header, Footer } = require('docx');
const docx = require('docx');

// Read the markdown file
const mdContent = fs.readFileSync('/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/DSRT-734-Infer-Stats-Decision-Making/assignments/residency-weekend/R1-journal-article-review/my-journal-review.md', 'utf8');

// Helper function to parse inline formatting and italicize statistical symbols
function parseInlineFormatting(text) {
    const runs = [];
    let currentPos = 0;
    
    // Pattern to match: *text* (italics), **text** (bold), and statistical symbols
    const pattern = /(\*\*.*?\*\*|\*.*?\*)/g;
    let match;
    
    while ((match = pattern.exec(text)) !== null) {
        // Add text before the match
        if (match.index > currentPos) {
            const beforeText = text.substring(currentPos, match.index);
            runs.push(...parseStatSymbols(beforeText, false, false));
        }
        
        const matched = match[0];
        if (matched.startsWith('**') && matched.endsWith('**')) {
            // Bold text
            const boldText = matched.slice(2, -2);
            runs.push(...parseStatSymbols(boldText, true, false));
        } else if (matched.startsWith('*') && matched.endsWith('*')) {
            // Italic text
            const italicText = matched.slice(1, -1);
            runs.push(...parseStatSymbols(italicText, false, true));
        }
        
        currentPos = pattern.lastIndex;
    }
    
    // Add remaining text
    if (currentPos < text.length) {
        const remainingText = text.substring(currentPos);
        runs.push(...parseStatSymbols(remainingText, false, false));
    }
    
    return runs.length > 0 ? runs : parseStatSymbols(text, false, false);
}

// Helper function to automatically italicize statistical symbols
function parseStatSymbols(text, isBold, isItalic) {
    const runs = [];
    // Statistical symbols that should be italicized: p, t, F, r, β, M, SD, n, df, χ²
    const statPattern = /\b(p|t|F|r|M|SD|n|df)\b|β|χ²/g;
    let lastIndex = 0;
    let match;
    
    while ((match = statPattern.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
            runs.push(new TextRun({
                text: text.substring(lastIndex, match.index),
                bold: isBold,
                italics: isItalic,
                font: "Times New Roman",
                size: 24 // 12pt (size is in half-points)
            }));
        }
        
        // Add the statistical symbol (italicized)
        runs.push(new TextRun({
            text: match[0],
            bold: isBold,
            italics: true, // Always italicize stat symbols
            font: "Times New Roman",
            size: 24
        }));
        
        lastIndex = statPattern.lastIndex;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
        runs.push(new TextRun({
            text: text.substring(lastIndex),
            bold: isBold,
            italics: isItalic,
            font: "Times New Roman",
            size: 24
        }));
    }
    
    return runs.length > 0 ? runs : [new TextRun({
        text: text,
        bold: isBold,
        italics: isItalic,
        font: "Times New Roman",
        size: 24
    })];
}

// Parse markdown content
const lines = mdContent.split('\n');
const documentChildren = [];

// Track if we're in the references section
let inReferences = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines except in references
    if (!line && !inReferences) continue;
    
    // Skip the horizontal rules
    if (line === '---') continue;
    
    // Skip word count and note at the end
    if (line.startsWith('**Word Count:**') || line.startsWith('**Note:**')) continue;
    
    // Main title (centered, bold, 12pt)
    if (i === 0 && line.startsWith('# ')) {
        documentChildren.push(new Paragraph({
            text: line.replace('# ', ''),
            alignment: AlignmentType.CENTER,
            spacing: { after: 240, before: 0 },
            style: "Normal",
            children: [new TextRun({
                text: line.replace('# ', ''),
                bold: true,
                font: "Times New Roman",
                size: 24
            })]
        }));
        continue;
    }
    
    // Student info, course, term (centered)
    if (line.startsWith('**Student:**') || line.startsWith('**Course:**') || line.startsWith('**Term:**')) {
        const parts = line.split('**');
        documentChildren.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 0, before: 0 },
            children: [
                new TextRun({
                    text: parts[1],
                    bold: true,
                    font: "Times New Roman",
                    size: 24
                }),
                new TextRun({
                    text: parts[2] || '',
                    font: "Times New Roman",
                    size: 24
                })
            ]
        }));
        continue;
    }
    
    // Article Reviewed label
    if (line.startsWith('**Article Reviewed:**')) {
        documentChildren.push(new Paragraph({
            spacing: { after: 120, before: 240 },
            children: [new TextRun({
                text: 'Article Reviewed:',
                bold: true,
                font: "Times New Roman",
                size: 24
            })]
        }));
        continue;
    }
    
    // APA Level 1 Headings (## Heading)
    if (line.startsWith('## ')) {
        const headingText = line.replace('## ', '');
        
        // Check if this is the References section
        if (headingText === 'References') {
            inReferences = true;
        } else {
            inReferences = false;
        }
        
        documentChildren.push(new Paragraph({
            text: headingText,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 240, after: 120 },
            children: [new TextRun({
                text: headingText,
                bold: true,
                font: "Times New Roman",
                size: 24
            })]
        }));
        continue;
    }
    
    // Reference entries (hanging indent)
    if (inReferences && line.startsWith('Fuster,')) {
        documentChildren.push(new Paragraph({
            spacing: { after: 0, before: 0, line: 480 },
            indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.5) },
            children: parseInlineFormatting(line)
        }));
        continue;
    }
    
    // Regular paragraphs (first-line indent, double-spaced)
    if (line.length > 0) {
        documentChildren.push(new Paragraph({
            spacing: { after: 0, before: 0, line: 480 }, // 480 = double spacing
            indent: { firstLine: convertInchesToTwip(0.5) },
            children: parseInlineFormatting(line)
        }));
    }
}

// Create the document with APA formatting
const doc = new Document({
    sections: [{
        properties: {
            page: {
                margin: {
                    top: convertInchesToTwip(1),
                    right: convertInchesToTwip(1),
                    bottom: convertInchesToTwip(1),
                    left: convertInchesToTwip(1),
                },
                pageNumbers: {
                    start: 1,
                    formatType: NumberFormat.DECIMAL,
                },
            },
        },
        headers: {
            default: new Header({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                            new TextRun({
                                children: [PageNumber.CURRENT],
                                font: "Times New Roman",
                                size: 24
                            }),
                        ],
                    }),
                ],
            }),
        },
        children: documentChildren,
    }],
});

// Write the document
const Packer = docx.Packer;
Packer.toBuffer(doc).then((buffer) => {
    const outputPath = '/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/DSRT-734-Infer-Stats-Decision-Making/assignments/residency-weekend/R1-journal-article-review/my-journal-review.docx';
    fs.writeFileSync(outputPath, buffer);
    console.log('✅ Word document created successfully!');
    console.log('📄 Location:', outputPath);
    console.log('📝 Formatting applied:');
    console.log('   - Font: 12-pt Times New Roman');
    console.log('   - Spacing: Double-spaced');
    console.log('   - Margins: 1 inch on all sides');
    console.log('   - Page numbers: Top right');
    console.log('   - Headings: APA Level 1 (centered, bold)');
    console.log('   - Statistical symbols: Automatically italicized (p, t, F, β, etc.)');
    console.log('   - References: Hanging indent');
});
