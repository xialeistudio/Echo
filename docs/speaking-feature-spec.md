# Speaking Feature Specification

## 1. Overview

Echo is an all-in-one language learning platform. The Speaking module focuses on audio-based pronunciation practice with real-time feedback, ASR-powered sentence alignment, and AI-assisted analysis.

### Core Capabilities
- **Audio Material Management**: Import, organize, and manage speaking materials
- **Transcription & Alignment**: Automatic speech recognition with word/sentence-level timestamps
- **Practice & Feedback**: Record user audio, visualize waveforms, and compare with original
- **AI Analysis**: Sentence structure analysis and pronunciation assessment

---

## 2. Audio Material Management Page

### 2.1 Page Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Toolbar                                                                    │
│ ┌──────────────┐  ┌────────────────┐  ┌─────────────────────┐             │
│ │ Language ▼   │  │ 🔍 Search...   │  │  + Add Material     │             │
│ └──────────────┘  └────────────────┘  └─────────────────────┘             │
├─────────────────────────────────────────────────────────────────────────────┤
│ Audio Material List                                                        │
│ ┌──────────┬──────────┬────────┬────────────┬────────────┬──────────┬─────┤
│ │ Name     │ Language │ Duration │ Practice  │ Practice   │ Updated  │ ... │
│ │          │          │          │ Count     │ Duration   │ At       │     │
│ ├──────────┼──────────┼────────┼────────────┼────────────┼──────────┼─────┤
│ │ Lesson 1 │ English  │ 05:32   │ 3          │ 12:45      │ 2h ago   │ 🗑️  │
│ │ Lesson 2 │ Japanese │ 03:21   │ 1          │ 03:21      │ 1d ago   │ 🗑️  │
│ │ ...      │ ...      │ ...     │ ...        │ ...        │ ...      │ ... │
│ └──────────┴──────────┴────────┴────────────┴────────────┴──────────┴─────┘
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Toolbar Components

| Component | Description |
|-----------|-------------|
| **Language Filter** | Dropdown to filter by language (default: All). Single/multi-select TBD |
| **Search Box** | Text input to search by material title. Real-time filtering |
| **Add Material Button** | Opens modal/dialog to import audio/video files or URLs |

### 2.3 Material List Columns

| Column | Description |
|--------|-------------|
| **Name** | Material title |
| **Language** | Source language (e.g., English, Japanese) |
| **Duration** | Total audio duration (MM:SS) |
| **Practice Count** | Number of times practiced |
| **Practice Duration** | Total time spent practicing |
| **Updated At** | Last modified timestamp |
| **Transcription** | Full transcription (may be truncated) |
| **Actions** | Edit, Delete buttons |

---

## 3. Speaking Practice Page

### 3.1 Overall Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Header: [Material Name] - [Language]                             ← Back    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌──────────────────────────────┐  ┌─────────────────────────────────────┐  │
│ │ Left Panel                   │  │ Right Panel                         │  │
│ │                              │  │                                     │  │
│ │ ┌──────┐ ┌──────┐            │  │ ┌─────────────────────────────────┐ │  │
│ │ │Trans │ │Rec-  │            │  │ │ [Tab: Translation | Notes | Ana]│ │  │
│ │ │crip- │ │ords  │            │  │ ├─────────────────────────────────┤ │  │
│ │ │tion  │ │      │            │  │ │                                 │ │  │
│ │ └──────┘ └──────┘            │  │ │  Original Sentence Display       │ │  │
│ │                              │  │ │  "The quick brown fox..."        │ │  │
│ │ ┌──────────────────────────┐ │  │ │                                 │ │  │
│ │ │ Sentence List            │ │  │ │  [Phonetic] /həˈloʊ/            │ │  │
│ │ │ ┌────────────────────────┐│ │  │ │                                 │ │  │
│ │ │ │ 1. The quick...    ✓   ││ │  │ │  [Translation]                  │ │  │
│ │ │ │ 2. jumps over...   ✓   ││ │  │ │  敏捷的棕色狐狸...              │ │  │
│ │ │ │ 3. the lazy...     ✓   ││ │  │ │                                 │ │  │
│ │ │ │ 4. dog.            ✓   ││ │  │ │  [Karaoke-style highlighting]   │ │  │
│ │ │ └────────────────────────┘│ │  │ │  during playback                │ │  │
│ │ │                              │  │ │                                 │ │  │
│ │ └──────────────────────────┘ │  │ │  ┌─────────────────────────────┐ │ │  │
│ │                              │  │ │ │ [Analyze Button]             │ │ │  │
│ │ ┌──────────────────────────┐ │  │ │ │ (LLM sentence analysis)      │ │ │  │
│ │ │ Practice History         │ │  │ │ └─────────────────────────────┘ │ │  │
│ │ │ ┌────────────────────────┐│ │  │ │                                     │  │
│ │ │ │ 📁 00:45   Today   🗑️  ││ │  └─────────────────────────────────────┘  │
│ │ │ │ 📁 01:20   Yesterday 🗑️││ │                                         │
│ │ │ └────────────────────────┘│ │                                         │
│ │ └──────────────────────────┘ │  │                                     │
│ └──────────────────────────────┘  └─────────────────────────────────────┘  │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ User Recording Section                                                │ │
│ │ ┌──────────────────────────────────────────────────────────────────┐  │ │
│ │ │ User Waveform + F0 (when recording/has recordings)               │  │ │
│ │ │提示: 点击开始录音                                                   │  │ │
│ │ └──────────────────────────────────────────────────────────────────┘  │ │
│ │ [Compare] [Evaluate] [Download] [Play]                    [Speed ▼]   │ │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ Original Audio Section                                                │ │
│ │ ┌──────────────────────────────────────────────────────────────────┐  │ │
│ │ │ Original Waveform + F0                                            │  │ │
│ │ │ [Download Sentence Button]                                        │  │ │
│ │ └──────────────────────────────────────────────────────────────────┘  │ │
│ │                                                                       │ │
│ │ [Speed ▼] [Mode ▼] [⏮ Prev] [▶/⏸ Play/Pause] [⏭ Next]              │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Left Panel

#### 3.2.1 Transcription Tab
- Displays sentences extracted from transcription results
- Each item shows: sentence number + preview text + status indicator (practiced/not)
- Click to navigate to that sentence
- Visual indicator for practiced sentences (checkmark or color)

#### 3.2.2 Practice Records Tab
- List of user's recordings for current material
- Each item displays:
  - Recording icon
  - Duration (MM:SS)
  - Timestamp (Today/Yesterday/date)
  - Delete button

### 3.3 Right Panel

#### 3.3.1 Translation Tab (Default)
- **Current Sentence**: Full sentence in source language
- **Phonetic**: IPA pronunciation guide (loaded from pronunciation dictionary)
- **Translation**: Target language translation
- **Karaoke-style Highlighting**: Words highlight in real-time during audio playback

#### 3.3.2 Notes Tab
- User-added notes for the current sentence
- Editable text area

#### 3.3.3 Analysis Tab
- **Analyze Button**: Triggers LLM analysis
- **Analysis Content** (after clicking):
  - Sentence structure breakdown
  - Grammar explanation
  - Vocabulary notes
  - Alternative expressions

### 3.4 User Recording Section

| Element | Description |
|---------|-------------|
| **Waveform** | Real-time visualization of user's voice input |
| **F0 (Fundamental Frequency)** | Pitch contour visualization |
| **Empty State** | "点击开始录音" prompt when no recording exists |
| **Action Buttons** | |
| - Compare | Compare user waveform + F0 with original |
| - Evaluate | Pronunciation assessment (AI scoring) |
| - Download | Download user recording |
| - Play | Play user recording |
| **Speed Control** | Playback speed selector (0.5x, 0.75x, 1x, 1.25x, 1.5x) |

### 3.5 Original Audio Section

| Element | Description |
|---------|-------------|
| **Waveform** | Visualization of original audio |
| **F0** | Pitch contour of original speaker |
| **Download Button** | Download current sentence's audio segment |
| **Playback Controls** | |
| - Speed | Playback rate |
| - Mode | Loop sentence / Loop all / Sequential |
| - Prev/Next | Navigate between sentences |
| - Play/Pause | Toggle playback |

---

## 4. Data Structure

### 4.1 AudioMaterial

```typescript
interface AudioMaterial {
  id: string;
  title: string;
  language: string;              // ISO 639-1 code, e.g., "en", "ja"
  duration: number;              // in seconds
  filePath: string;              // local file path
  transcription: AudioTranscription | null;  // null if not transcribed
  practiceCount: number;         // total practice sessions
  practiceDuration: number;      // in seconds
  createdAt: string;             // ISO 8601
  updatedAt: string;
}
```

### 4.2 AudioTranscription

```typescript
interface AudioTranscription {
  fullText: string;      // entire transcription without timestamps
  sentences: AudioSentence[];
}

interface AudioSentence {
  id: string;
  text: string;          // sentence text
  translation?: string;  // optional translation
  startAt: number;       // start timestamp in seconds
  endAt: number;         // end timestamp in seconds
  words: AudioWord[];
}

interface AudioWord {
  text: string;          // word text
  startAt: number;       // start timestamp in seconds
  endAt: number;         // end timestamp in seconds
}
```

### 4.3 AudioPractice

```typescript
interface AudioPractice {
  id: string;
  materialId: string;
  sentenceId: string;
  filePath: string;
  duration: number;      // in seconds
  createdAt: string;     // ISO 8601
}
```

### 4.4 AudioNote

```typescript
interface AudioNote {
  id: string;
  materialId: string;
  sentenceId: string;
  content: string;       // markdown or plain text
  createdAt: string;
  updatedAt: string;
}
```

---

## 5. User Stories

### 5.1 Audio Material Management
- As a user, I want to add audio files so I can practice with my own materials
- As a user, I want to filter materials by language to focus on specific languages
- As a user, I want to search materials by title to quickly find what I need

### 5.2 Speaking Practice
- As a user, I want to see transcription with word-level timestamps to practice pronunciation
- As a user, I want to record my voice and compare with the original to improve
- As a user, I want AI analysis of sentence structure to understand grammar

### 5.3 Progress Tracking
- As a user, I want to see my practice history to track my learning progress
- As a user, I want to see total practice time for motivation

---

## 6. Notes

### 6.1 Phonetic Information
Phonetic transcriptions (IPA) are loaded on-demand from external pronunciation dictionaries (e.g., CMU Pronouncing Dictionary for English), not stored in the database.

### 6.2 Transcription Processing
Speech-to-text is performed using ASR models (e.g., Whisper, Wav2Vec2) to generate sentence and word-level timestamps.

### 6.3 Pronunciation Assessment
Pronunciation scoring (Accuracy, Fluency, Completeness, Prosody) is computed on-demand using ASR and AI models.

---

## 7. Future Enhancements (Out of Scope)

- Reading module with text-based materials
- Multi-language support in UI (i18n for the app itself)
- Cloud sync across devices
- Sharing materials with other users
- Pronunciation error visualization (phoneme-level feedback)
