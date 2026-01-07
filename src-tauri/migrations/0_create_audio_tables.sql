-- Echo Audio Module Migration V1
-- Create tables for speaking feature

-- ============================================
-- Table: audio_materials
-- Description: Audio learning materials
-- ============================================
CREATE TABLE IF NOT EXISTS audio_materials (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    language TEXT NOT NULL,
    duration INTEGER NOT NULL,
    file_path TEXT NOT NULL,
    transcription TEXT,
    practice_count INTEGER DEFAULT 0,
    practice_duration INTEGER DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_audio_materials_language ON audio_materials(language);
CREATE INDEX IF NOT EXISTS idx_audio_materials_title ON audio_materials(title);

-- ============================================
-- Table: audio_practices
-- Description: User's practice recordings
-- ============================================
CREATE TABLE IF NOT EXISTS audio_practices (
    id TEXT PRIMARY KEY,
    material_id TEXT NOT NULL,
    sentence_id TEXT NOT NULL,
    file_path TEXT NOT NULL,
    duration INTEGER NOT NULL,
    created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_audio_practices_material ON audio_practices(material_id);
CREATE INDEX IF NOT EXISTS idx_audio_practices_sentence ON audio_practices(sentence_id);
CREATE INDEX IF NOT EXISTS idx_audio_practices_created ON audio_practices(created_at);

-- ============================================
-- Table: audio_notes
-- Description: User's notes for sentences
-- ============================================
CREATE TABLE IF NOT EXISTS audio_notes (
    id TEXT PRIMARY KEY,
    material_id TEXT NOT NULL,
    sentence_id TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_audio_notes_material ON audio_notes(material_id);
CREATE INDEX IF NOT EXISTS idx_audio_notes_sentence ON audio_notes(sentence_id);
