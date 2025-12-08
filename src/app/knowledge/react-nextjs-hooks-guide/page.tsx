"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Code, FileText, Zap, Navigation, Database, Settings, GitBranch, Search, MapPin } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

interface MarkdownContent {
  title: string;
  parts: Part[];
}

interface Part {
  title: string;
  description?: string;
  hooks: HookSection[];
}

interface HookSection {
  title: string;
  content: Section[];
}

interface Section {
  type: 'heading' | 'paragraph' | 'code' | 'list' | 'table' | 'divider';
  level?: number;
  content: string;
  language?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export default function ReactHooksGuidePage() {
  const [content, setContent] = useState<MarkdownContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [activePartIndex, setActivePartIndex] = useState(0);

  useEffect(() => {
    fetch('/knowledge/react-nextjs-hooks-guide.md')
      .then(res => res.text())
      .then(text => {
        const parsed = parseMarkdown(text);
        setContent(parsed);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading markdown:', err);
        setLoading(false);
      });
  }, []);

  const parseMarkdown = (text: string): MarkdownContent => {
    const lines = text.split('\n');
    const parts: Part[] = [];
    let currentPart: Part | null = null;
    let currentHook: HookSection | null = null;
    let currentSections: Section[] = [];
    let currentCodeBlock = '';
    let inCodeBlock = false;
    let codeLanguage = '';
    let currentParagraph = '';
    let skipUntilNextPart = false;

    const saveCurrentHook = () => {
      if (currentHook && currentSections.length > 0) {
        currentHook.content = [...currentSections];
        currentPart?.hooks.push(currentHook);
        currentSections = [];
        currentHook = null;
      }
    };

    const saveCurrentPart = () => {
      saveCurrentHook();
      if (currentPart && currentPart.hooks.length > 0) {
        parts.push(currentPart);
        currentPart = null;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip table of contents and other sections before Part 1
      if (line.includes('📖 สารบัญ') || line.includes('แหล่งอ้างอิง') || line.includes('สรุปตาราง')) {
        skipUntilNextPart = true;
        continue;
      }

      // Detect Part 1 or Part 2 (H1 level)
      if (line.startsWith('# ') && (line.includes('Part 1') || line.includes('Part 2'))) {
        saveCurrentPart();
        skipUntilNextPart = false;
        const partTitle = line.replace(/^#+\s*/, '').trim();
        currentPart = {
          title: partTitle,
          description: '',
          hooks: []
        };
        continue;
      }

      // Get Part description (first paragraph after Part title, before first hook)
      if (currentPart && !currentPart.description && line.trim() && !line.startsWith('#') && !line.startsWith('---') && !inCodeBlock) {
        if (!/^\d+\./.test(line.trim())) {
          currentPart.description = line.trim();
        }
      }

      // Detect Hook sections (H2 level with number pattern like "## 1. useState" or "## 1. useRouter")
      if (line.startsWith('## ') && /^\d+\./.test(line.replace(/^##+\s*/, '').trim())) {
        saveCurrentHook();
        const hookTitle = line.replace(/^##+\s*/, '').trim();
        currentHook = {
          title: hookTitle,
          content: []
        };
        currentSections = [];
        continue;
      }

      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          currentSections.push({
            type: 'code',
            content: currentCodeBlock.trim(),
            language: codeLanguage
          });
          currentCodeBlock = '';
          inCodeBlock = false;
          codeLanguage = '';
        } else {
          if (currentParagraph.trim()) {
            currentSections.push({
              type: 'paragraph',
              content: currentParagraph.trim()
            });
            currentParagraph = '';
          }
          codeLanguage = line.replace('```', '').trim();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        currentCodeBlock += line + '\n';
        continue;
      }

      // Headings (H3, H4, etc.)
      if (line.startsWith('#')) {
        if (currentParagraph.trim()) {
          currentSections.push({
            type: 'paragraph',
            content: currentParagraph.trim()
          });
          currentParagraph = '';
        }
        const level = line.match(/^#+/)?.[0].length || 1;
        const content = line.replace(/^#+\s*/, '').trim();
        // Only add if it's not a Part or Hook title (already handled)
        if (level > 2) {
          currentSections.push({
            type: 'heading',
            level,
            content
          });
        }
        continue;
      }

      // Dividers
      if (line.trim() === '---') {
        if (currentParagraph.trim()) {
          currentSections.push({
            type: 'paragraph',
            content: currentParagraph.trim()
          });
          currentParagraph = '';
        }
        currentSections.push({ type: 'divider', content: '' });
        continue;
      }

      // Tables
      if (line.includes('|') && line.trim().startsWith('|')) {
        if (currentParagraph.trim()) {
          currentSections.push({
            type: 'paragraph',
            content: currentParagraph.trim()
          });
          currentParagraph = '';
        }
        const tableRows: string[][] = [];
        let tableHeaders: string[] = [];
        let j = i;

        while (j < lines.length && lines[j].includes('|')) {
          const row = lines[j].split('|').map(cell => cell.trim()).filter(cell => cell);
          if (row.length > 0) {
            if (j === i) {
              tableHeaders = row;
            } else if (!row.every(cell => cell.match(/^[-:|\s]+$/))) {
              tableRows.push(row);
            }
          }
          j++;
        }

        if (tableHeaders.length > 0) {
          currentSections.push({
            type: 'table',
            headers: tableHeaders,
            rows: tableRows,
            content: ''
          });
          i = j - 1;
          continue;
        }
      }

      // Lists
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        if (currentParagraph.trim()) {
          currentSections.push({
            type: 'paragraph',
            content: currentParagraph.trim()
          });
          currentParagraph = '';
        }
        const items: string[] = [];
        let k = i;
        while (k < lines.length && (lines[k].trim().startsWith('- ') || lines[k].trim().startsWith('* ') || lines[k].trim().startsWith('  ') || lines[k].trim() === '')) {
          if (lines[k].trim() && !lines[k].trim().startsWith('  ')) {
            const item = lines[k].trim().replace(/^[-*]\s*/, '').trim();
            if (item) items.push(item);
          }
          k++;
          if (k < lines.length && lines[k].trim() && !lines[k].trim().startsWith('- ') && !lines[k].trim().startsWith('* ') && !lines[k].trim().startsWith('  ')) {
            break;
          }
        }
        if (items.length > 0) {
          currentSections.push({
            type: 'list',
            items,
            content: ''
          });
          i = k - 1;
          continue;
        }
      }

      // Paragraphs - accumulate multiple lines
      if (line.trim() && !skipUntilNextPart) {
        if (currentParagraph) {
          currentParagraph += ' ' + line.trim();
        } else {
          currentParagraph = line.trim();
        }
      } else {
        if (currentParagraph.trim()) {
          currentSections.push({
            type: 'paragraph',
            content: currentParagraph.trim()
          });
          currentParagraph = '';
        }
      }
    }

    // Save any remaining content
    if (currentParagraph.trim()) {
      currentSections.push({
        type: 'paragraph',
        content: currentParagraph.trim()
      });
    }
    saveCurrentHook();
    saveCurrentPart();

    return {
      title: 'React Hooks & Next.js Hooks Guide',
      parts
    };
  };

  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Simple inline markdown parser for **bold** and *italic*
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Match **bold**
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      // Match *italic*
      const italicMatch = remaining.match(/\*(.*?)\*/);
      // Match `code`
      const codeMatch = remaining.match(/`(.*?)`/);

      let match = null;
      let type: 'bold' | 'italic' | 'code' | null = null;

      if (boldMatch && (!italicMatch || boldMatch.index! < italicMatch.index!) && (!codeMatch || boldMatch.index! < codeMatch.index!)) {
        match = boldMatch;
        type = 'bold';
      } else if (italicMatch && (!codeMatch || italicMatch.index! < codeMatch.index!)) {
        match = italicMatch;
        type = 'italic';
      } else if (codeMatch) {
        match = codeMatch;
        type = 'code';
      }

      if (match && match.index !== undefined) {
        // Add text before match
        if (match.index > 0) {
          parts.push(remaining.substring(0, match.index));
        }
        // Add formatted text
        const content = match[1];
        if (type === 'bold') {
          parts.push(<strong key={key++} className="font-bold text-white">{content}</strong>);
        } else if (type === 'italic') {
          parts.push(<em key={key++} className="italic text-slate-200">{content}</em>);
        } else if (type === 'code') {
          parts.push(<code key={key++} className="bg-slate-900 px-1.5 py-0.5 rounded text-sm font-mono text-purple-300">{content}</code>);
        }
        remaining = remaining.substring(match.index + match[0].length);
      } else {
        // No more matches, add remaining text
        parts.push(remaining);
        break;
      }
    }

    return parts.length > 0 ? parts : text;
  };

  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'heading':
        const level = section.level || 2;
        const headingClasses = {
          1: 'text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 mt-8',
          2: 'text-3xl font-bold text-white mb-4 mt-8',
          3: 'text-xl font-bold text-purple-300 mb-3 mt-6 flex items-center gap-2',
          4: 'text-lg font-semibold text-blue-300 mb-2 mt-4',
        }[level] || 'text-base font-semibold text-slate-300 mb-2';

        // Add emoji or icon for H3 headings
        const getHeadingIcon = (content: string) => {
          if (content.includes('คำอธิบาย')) return '📝';
          if (content.includes('Syntax')) return '🔧';
          if (content.includes('ตัวอย่าง')) return '💡';
          if (content.includes('ข้อควรระวัง')) return '⚠️';
          if (content.includes('สรุป')) return '📊';
          return '';
        };

        switch (level) {
          case 1:
            return <h1 key={index} className={headingClasses}>{renderInlineMarkdown(section.content)}</h1>;
          case 2:
            return <h2 key={index} className={headingClasses}>{renderInlineMarkdown(section.content)}</h2>;
          case 3:
            return (
              <h3 key={index} className={headingClasses}>
                <span>{getHeadingIcon(section.content)}</span>
                <span>{renderInlineMarkdown(section.content)}</span>
              </h3>
            );
          case 4:
            return <h4 key={index} className={headingClasses}>{renderInlineMarkdown(section.content)}</h4>;
          case 5:
            return <h5 key={index} className={headingClasses}>{renderInlineMarkdown(section.content)}</h5>;
          case 6:
            return <h6 key={index} className={headingClasses}>{renderInlineMarkdown(section.content)}</h6>;
          default:
            return <h2 key={index} className={headingClasses}>{renderInlineMarkdown(section.content)}</h2>;
        }

      case 'paragraph':
        if (!section.content) return null;
        // Check if paragraph starts with bold (like **ตัวอย่างที่ 1:**)
        const isExampleHeader = section.content.match(/^\*\*.*?\*\*:/);
        return (
          <p key={index} className={`leading-relaxed mb-4 ${isExampleHeader ? 'text-purple-300 font-semibold text-lg mt-4' : 'text-slate-300'}`}>
            {renderInlineMarkdown(section.content)}
          </p>
        );

      case 'code':
        return (
          <div key={index} className="my-6">
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-lg">
              {section.language && (
                <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 text-xs text-slate-400 font-mono flex items-center gap-2">
                  <Code className="w-3 h-3" />
                  <span className="uppercase">{section.language}</span>
                </div>
              )}
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-slate-200 font-mono leading-relaxed">
                  {section.content}
                </code>
              </pre>
            </div>
          </div>
        );

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-slate-300 ml-4">
            {section.items?.map((item, i) => (
              <li key={i} className="leading-relaxed pl-2">{renderInlineMarkdown(item)}</li>
            ))}
          </ul>
        );

      case 'table':
        return (
          <div key={index} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border border-slate-700 rounded-lg">
              <thead>
                <tr className="bg-slate-800">
                  {section.headers?.map((header, i) => (
                    <th key={i} className="border border-slate-700 px-4 py-3 text-left text-purple-300 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows?.map((row, i) => (
                  <tr key={i} className="bg-slate-800/50 hover:bg-slate-800 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="border border-slate-700 px-4 py-3 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'divider':
        return (
          <hr key={index} className="my-8 border-slate-700" />
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-slate-400">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">กลับสู่หน้า Knowledge</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <BlurFade delay={0.2}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-6">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              {content?.title || 'React Hooks & Next.js Hooks Guide'}
            </h1>
            <p className="text-slate-400 text-lg">
              คู่มือการใช้งาน Hooks ที่นิยมใน React และ Next.js พร้อมตัวอย่างโค้ด
            </p>
          </div>
        </BlurFade>

        {/* Tabs Navigation */}
        {content && content.parts.length > 0 && (
          <BlurFade delay={0.3}>
            <div className="mb-8">
              <div className="relative flex gap-2 p-1 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                {content.parts.map((part, partIndex) => {
                  const isActive = activePartIndex === partIndex;
                  const isPart1 = partIndex === 0;
                  return (
                    <button
                      key={partIndex}
                      onClick={() => setActivePartIndex(partIndex)}
                      className={`relative flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 z-10 ${isActive
                          ? isPart1
                            ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105'
                            : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                        }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isPart1 ? (
                          <Zap className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                        ) : (
                          <Navigation className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                        )}
                        <span className="text-sm md:text-base">{part.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Content - Show only active part */}
        {content?.parts[activePartIndex] && (
          <div key={activePartIndex} className="transition-opacity duration-500">
            <BlurFade delay={0.4}>
              <div className="space-y-8">
                {/* Part Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    {content.parts[activePartIndex].title}
                  </h2>
                  {content.parts[activePartIndex].description && (
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                      {content.parts[activePartIndex].description}
                    </p>
                  )}
                </div>

                {/* Hooks Grid */}
                <div className="grid grid-cols-1 gap-6">
                  {content.parts[activePartIndex].hooks.map((hook, hookIndex) => {
                    // Get hook name for icon selection
                    const hookName = hook.title.toLowerCase();
                    const getHookIcon = () => {
                      if (hookName.includes('usestate')) return Zap;
                      if (hookName.includes('useeffect')) return Settings;
                      if (hookName.includes('usecontext')) return Database;
                      if (hookName.includes('useref')) return FileText;
                      if (hookName.includes('usememo')) return Code;
                      if (hookName.includes('usecallback')) return GitBranch;
                      if (hookName.includes('usereducer')) return Settings;
                      if (hookName.includes('userouter')) return Navigation;
                      if (hookName.includes('useparams')) return MapPin;
                      if (hookName.includes('usesearchparams')) return Search;
                      if (hookName.includes('usepathname')) return MapPin;
                      return Code;
                    };
                    const HookIcon = getHookIcon();
                    const isPart1 = activePartIndex === 0;
                    const borderColor = isPart1
                      ? 'border-purple-500/20 hover:border-purple-500/40'
                      : 'border-blue-500/20 hover:border-blue-500/40';
                    const iconBg = isPart1
                      ? 'bg-purple-500/20'
                      : 'bg-blue-500/20';
                    const iconColor = isPart1
                      ? 'text-purple-400'
                      : 'text-blue-400';
                    const numberColor = isPart1
                      ? 'text-purple-400'
                      : 'text-blue-400';

                    return (
                      <BlurFade key={hookIndex} delay={0.5 + hookIndex * 0.05}>
                        <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border ${borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10`}>
                          {/* Hook Title */}
                          <div className="mb-6 pb-4 border-b border-slate-700">
                            <div className="flex items-center gap-4">
                              <div className={`${iconBg} p-3 rounded-xl`}>
                                <HookIcon className={`w-6 h-6 ${iconColor}`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                  <span className={numberColor}>#{hookIndex + 1}</span>
                                  <span>{hook.title}</span>
                                </h3>
                              </div>
                            </div>
                          </div>

                          {/* Hook Content */}
                          <div className="space-y-4">
                            {hook.content.map((section, sectionIndex) => renderSection(section, activePartIndex * 1000 + hookIndex * 100 + sectionIndex))}
                          </div>
                        </div>
                      </BlurFade>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          </div>
        )}

        {/* Back to Knowledge */}
        <BlurFade delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              <ArrowLeft className="w-5 h-5" />
              กลับสู่หน้า Knowledge
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

