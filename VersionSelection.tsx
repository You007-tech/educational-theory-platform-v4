import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Empty'

interface VersionSelectionProps {
  onVersionSelect: (version: 'comprehensive' | 'beginner') => void
}

const VersionSelection: React.FC<VersionSelectionProps> = ({ onVersionSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            教育理论学习平台
          </h1>
          <p className="text-lg text-gray-600">
            选择适合您的学习模式
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 全面版 */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => onVersionSelect('comprehensive')}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">全面版</CardTitle>
              <CardDescription className="text-base">
                深入学习教育理论，适合有一定基础的学习者
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 完整理论框架</li>
                <li>• 详细概念解析</li>
                <li>• 互动式学习组件</li>
                <li>• 知识图谱展示</li>
              </ul>
            </CardContent>
          </Card>

          {/* 精简版 */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => onVersionSelect('beginner')}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">精简版</CardTitle>
              <CardDescription className="text-base">
                生活化举例，适合初学者快速理解核心概念
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 生活化案例</li>
                <li>• 简化知识结构</li>
                <li>• 快速入门</li>
                <li>• 实用性强</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default VersionSelection