'use client';

import * as React from 'react';
import {
  Settings,
  Users,
  Star,
  Music,
  Image as ImageIcon,
  Calendar,
} from 'lucide-react';
import { Card } from './card';
import { Button } from './button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';
import { Switch } from './switch';

const colorPalette = [
  '#C7A14B',
  '#B08B3C',
  '#8B6C2A',
  '#D4B76B',
  '#A38235',
  '#E5C57C',
  '#967730',
  '#F5E6D3',
];

export function CustomizationPanel() {
  const [selectedTheme, setSelectedTheme] = React.useState('jawa-elegan');
  const [enableMusic, setEnableMusic] = React.useState(false);
  const [enableRSVP, setEnableRSVP] = React.useState(true);
  const [backgroundPattern, setBackgroundPattern] = React.useState(true);

  return (
    <div className="flex gap-6 min-h-[calc(100vh-8rem)] max-w-[1600px] mx-auto">
      {/* Left Panel - Customization Controls */}
      <div className="w-[440px] flex-shrink-0">
        <Card className="h-full bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-amber-900/20">
            <h2 className="text-xl font-serif text-amber-100 mb-1">
              Customization Controls
            </h2>
            <p className="text-sm text-amber-100/50 font-light">
              Personalize your invitation
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-16rem)]">
            <Accordion type="single" collapsible className="space-y-3">
              {/* Theme & Layout */}
              <AccordionItem
                value="theme"
                className="border-2 border-amber-900/20 rounded-xl overflow-hidden bg-black/20"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-amber-500/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Settings
                        className="w-4 h-4 text-amber-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-medium text-amber-100">
                      Theme & Layout
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3 pt-2">
                    <label className="text-xs text-amber-100/60 font-light uppercase tracking-wider">
                      Select Theme
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'jawa-elegan', label: 'Jawa Elegan' },
                        { id: 'modern-sakura', label: 'Modern Sakura' },
                        { id: 'sunda-klasik', label: 'Sunda Klasik' },
                        { id: 'minimal', label: 'Minimal' },
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setSelectedTheme(theme.id)}
                          className={`
                            px-3 py-2 rounded-lg text-sm font-medium transition-all
                            ${
                              selectedTheme === theme.id
                                ? 'bg-amber-500/20 border-2 border-amber-500/60 text-amber-100'
                                : 'bg-black/40 border-2 border-amber-900/20 text-amber-100/60 hover:border-amber-500/30 hover:text-amber-100'
                            }
                          `}
                        >
                          {theme.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Couple Info */}
              <AccordionItem
                value="couple"
                className="border-2 border-amber-900/20 rounded-xl overflow-hidden bg-black/20"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-amber-500/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Users
                        className="w-4 h-4 text-amber-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-medium text-amber-100">
                      Couple Info
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-xs text-amber-100/60 font-light mb-2 block">
                        Bride's Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter bride's name"
                        defaultValue="Gatarati"
                        className="w-full px-3 py-2.5 rounded-lg bg-black/40 border-2 border-amber-900/20 text-amber-100 placeholder:text-amber-100/30 focus:border-amber-500/40 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-amber-100/60 font-light mb-2 block">
                        Groom's Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter groom's name"
                        defaultValue="Aditya"
                        className="w-full px-3 py-2.5 rounded-lg bg-black/40 border-2 border-amber-900/20 text-amber-100 placeholder:text-amber-100/30 focus:border-amber-500/40 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Select Theme (Preview Cards) */}
              <AccordionItem
                value="select-theme"
                className="border-2 border-amber-900/20 rounded-xl overflow-hidden bg-black/20"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-amber-500/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <ImageIcon
                        className="w-4 h-4 text-amber-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-medium text-amber-100">
                      Select Theme
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-2 pt-2">
                    {['Jawa Elegan', 'Modern Sakura', 'Sunda Klasik'].map(
                      (theme) => (
                        <button
                          key={theme}
                          className="w-full p-3 rounded-lg bg-black/40 border-2 border-amber-900/20 hover:border-amber-500/40 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/20 flex items-center justify-center">
                              <Star
                                className="w-5 h-5 text-amber-500"
                                strokeWidth={1.5}
                              />
                            </div>
                            <span className="text-sm text-amber-100">
                              {theme}
                            </span>
                          </div>
                        </button>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Event Timeline */}
              <AccordionItem
                value="timeline"
                className="border-2 border-amber-900/20 rounded-xl overflow-hidden bg-black/20"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-amber-500/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Calendar
                        className="w-4 h-4 text-amber-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-medium text-amber-100">
                      Event Timeline
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-xs text-amber-100/60 font-light mb-2 block">
                        Ceremony Date
                      </label>
                      <input
                        type="date"
                        defaultValue="2024-10-20"
                        className="w-full px-3 py-2.5 rounded-lg bg-black/40 border-2 border-amber-900/20 text-amber-100 focus:border-amber-500/40 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-amber-100/60 font-light mb-2 block">
                        Reception Date
                      </label>
                      <input
                        type="date"
                        defaultValue="2024-10-20"
                        className="w-full px-3 py-2.5 rounded-lg bg-black/40 border-2 border-amber-900/20 text-amber-100 focus:border-amber-500/40 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Accent Color Palette */}
            <div className="mt-6 p-4 rounded-xl bg-black/20 border-2 border-amber-900/20">
              <label className="text-sm font-medium text-amber-100 mb-3 block">
                Accent Color Palette
              </label>
              <div className="grid grid-cols-8 gap-2">
                {colorPalette.map((color, index) => (
                  <button
                    key={index}
                    className="w-full aspect-square rounded-lg border-2 border-transparent hover:border-amber-400 hover:scale-110 transition-all"
                    style={{ background: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Toggle Options */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border-2 border-amber-900/20">
                <div className="flex items-center gap-3">
                  <Music className="w-4 h-4 text-amber-500" strokeWidth={1.5} />
                  <span className="text-sm text-amber-100">Music Autoplay</span>
                </div>
                <Switch
                  checked={enableMusic}
                  onCheckedChange={setEnableMusic}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border-2 border-amber-900/20">
                <div className="flex items-center gap-3">
                  <ImageIcon
                    className="w-4 h-4 text-amber-500"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-amber-100">
                    Background Pattern
                  </span>
                </div>
                <Switch
                  checked={backgroundPattern}
                  onCheckedChange={setBackgroundPattern}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border-2 border-amber-900/20">
                <span className="text-sm text-amber-100">RSVP Enabled</span>
                <Switch checked={enableRSVP} onCheckedChange={setEnableRSVP} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Button className="w-full h-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 text-black font-semibold shadow-lg shadow-amber-500/25 border-0">
                Save & Publish
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 bg-transparent border-2 border-amber-500/60 text-amber-100 hover:bg-amber-500/10"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Panel - Phone Preview */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Phone Frame */}
          <div className="relative w-[380px] h-[780px] rounded-[3rem] border-[14px] border-zinc-800 overflow-hidden shadow-2xl bg-black">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-zinc-800 rounded-b-3xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-black overflow-y-auto">
              {/* Preview content - this would be your actual invitation preview */}
              <div className="flex flex-col items-center justify-center min-h-full p-8 text-center">
                {/* Decorative elements */}
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-amber-500/60 mx-auto"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L9.5 8.5L3 9l5 4.5L6.5 21L12 17.5L17.5 21L16 13.5L21 9l-6.5-.5L12 2z" />
                  </svg>
                </div>

                <p className="text-amber-500/70 text-xs tracking-[0.3em] uppercase mb-6">
                  Wedding Invitation
                </p>

                <div className="w-28 h-28 rounded-full border-2 border-amber-500/40 flex items-center justify-center mb-6">
                  <span className="text-4xl font-serif text-amber-500">AG</span>
                </div>

                <h3 className="text-2xl font-serif text-amber-100 mb-2">
                  Aditya & Gatarati
                </h3>

                <div className="flex items-center gap-6 text-xs text-amber-500/70 mt-8">
                  <div className="text-center">
                    <p className="font-light mb-1">20.10.2024</p>
                    <p className="font-light">Surakarta,</p>
                  </div>
                  <div className="h-12 w-px bg-amber-500/30" />
                  <div className="text-center">
                    <p className="font-light mb-1">20.10.2024</p>
                    <p className="font-light">Jawa Tengah</p>
                  </div>
                </div>

                <button className="mt-12 px-8 py-3 border-2 border-amber-500/60 text-amber-100 text-sm rounded-lg hover:bg-amber-500/10 transition-colors">
                  Open Invitation
                </button>
              </div>
            </div>

            {/* Screen Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Phone Shadow */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-amber-500/20" />
        </div>
      </div>
    </div>
  );
}
