import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, HelpCircle, Users, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Empty'

interface Section {
  id: string
  title: string
  content: string
  keyPoints: string[]
  examples: string[]
}

interface PaperReaderProps {
  sections: Section[]
  onBackToSelection: () => void
}

const PaperReader: React.FC<PaperReaderProps> = ({ sections, onBackToSelection }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
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
            <BookOpen className="w-6 h-6 text-blue-600" />
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
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                核心要点
              </h3>
              <div className="grid gap-3">
                {currentSectionData.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples Toggle */}
            {currentSectionData.examples.length > 0 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowExample(!showExample)}
                  className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {showExample ? '隐藏案例' : '查看案例'}
                </button>

                {showExample && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      实际案例
                    </h4>
                    <div className="space-y-3">
                      {currentSectionData.examples.map((example, index) => (
                        <div key={index} className="text-green-700">
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
                    ? 'bg-blue-600'
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

export default PaperReader