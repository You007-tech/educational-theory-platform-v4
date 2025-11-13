import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VersionSelection from './components/VersionSelection'
import PaperReader from './components/PaperReader'
import BeginnerEducationalReader from './components/BeginnerEducationalReader'
import { educationalTheoryContent } from './data/educationalTheoryContent'
import { beginnerEducationalContent } from './data/beginnerEducationalContent'

export default function App() {
  const [selectedVersion, setSelectedVersion] = useState<'comprehensive' | 'beginner' | null>(null)

  const handleVersionSelect = (version: 'comprehensive' | 'beginner') => {
    setSelectedVersion(version)
  }

  const handleBackToSelection = () => {
    setSelectedVersion(null)
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            selectedVersion === null ? (
              <VersionSelection onVersionSelect={handleVersionSelect} />
            ) : selectedVersion === 'comprehensive' ? (
              <PaperReader sections={educationalTheoryContent} onBackToSelection={handleBackToSelection} />
            ) : (
              <BeginnerEducationalReader sections={beginnerEducationalContent} onBackToSelection={handleBackToSelection} />
            )
          } 
        />
        <Route 
          path="/comprehensive" 
          element={<PaperReader sections={educationalTheoryContent} onBackToSelection={handleBackToSelection} />} 
        />
        <Route 
          path="/beginner" 
          element={<BeginnerEducationalReader sections={beginnerEducationalContent} onBackToSelection={handleBackToSelection} />} 
        />
      </Routes>
    </Router>
  )
}