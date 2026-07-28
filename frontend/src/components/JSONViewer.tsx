import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import { copyToClipboard, downloadJsonFile } from '../utils/formatters';

interface JSONViewerProps {
  data: object | string;
  title?: string;
  filename?: string;
}

export const JSONViewer: React.FC<JSONViewerProps> = ({
  data,
  title = 'Response Payload',
  filename = 'cyberark_response.json'
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const jsonString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    const ok = await copyToClipboard(jsonString);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    downloadJsonFile(filename, typeof data === 'object' ? data : JSON.parse(jsonString));
  };

  return (
    <div className="rounded-md border border-slate-700 bg-slate-900 text-slate-100 overflow-hidden font-mono text-xs shadow-md">
      <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700 flex items-center justify-between text-slate-300">
        <span className="font-semibold uppercase text-[11px] tracking-wider text-slate-400">
          {title}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-[11px] transition-colors"
            title="Copy JSON"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-[11px] transition-colors"
            title="Download JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>JSON</span>
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto max-h-96">
        <pre className="text-[12px] text-emerald-300 leading-relaxed whitespace-pre-wrap font-mono">
          {jsonString}
        </pre>
      </div>
    </div>
  );
};
