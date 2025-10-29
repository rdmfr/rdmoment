'use client';

import { useState } from "react";
import CreateHeader from "@/components/create-header";
import TemplateBuilder from "@/components/template-builder";
import TemplatePreview from "@/components/template-preview";
import { defaultTemplateData } from "@/lib/constants";

export default function CreateTemplatePage() {
  const [templateData, setTemplateData] = useState(defaultTemplateData);

  return (
    <div className="min-h-screen bg-black">
      <CreateHeader />
      <main className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Builder Panel */}
          <div className="lg:sticky top-28">
            <TemplateBuilder
              templateData={templateData}
              setTemplateData={setTemplateData}
            />
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky top-28">
            <TemplatePreview templateData={templateData} />
          </div>
        </div>
      </main>
    </div>
  );
}
