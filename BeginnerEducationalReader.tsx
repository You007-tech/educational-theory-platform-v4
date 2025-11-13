import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart, GraduationCap, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Empty'

interface Section {
  id: string
  title: string
  content: string
  keyPoints: string[]
  lifeExamples: string[]
}

interface BeginnerEducationalReaderProps {
  sections: Section[]
  onBackToSelection: () => void
}

const BeginnerEducationalReader: React.FC<BeginnerEducationalReaderProps> = ({ sections, onBackToSelection }) => {
  const [currentSection, setCurrentSection] = useState(0)
  const [showExample, setShowExample] = useState(false)

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      setShowExample(false)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      setShowExample(false)
    }
  }

  const currentSectionData = sections[currentSection]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToSelection}
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            返回选择
          </button>
          
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-green-600" />
            <span className="text-lg font-semibold">
              {currentSection + 1} / {sections.length}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">
              {currentSectionData.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {currentSectionData.content}
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                核心概念
              </h3>
              <div className="grid gap-3">
                {currentSectionData.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Life Examples */}
            {currentSectionData.lifeExamples.length > 0 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowExample(!showExample)}
                  className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {showExample ? '隐藏生活案例' : '查看生活案例'}
                </button>

                {showExample && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">
                      生活化案例
                    </h4>
                    <div className="space-y-3">
                      {currentSectionData.lifeExamples.map((example, index) => (
                        <div key={index} className="text-blue-700 p-3 bg-white rounded border-l-4 border-blue-400">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className="flex items-center px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            上一节
          </button>

          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSection(index)
                  setShowExample(false)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSection
                    ? 'bg-green-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="flex items-center px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            下一节
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BeginnerEducationalReader