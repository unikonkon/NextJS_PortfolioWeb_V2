"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Folder,
  Shield,
  Filter,
  Layers,
  Settings,
  FileCode,
  Database,
  Workflow,
  ChevronRight,
  AlertTriangle,
  BookOpen,
  Server
} from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

interface LifecycleStep {
  name: string;
  description: string;
  subSteps?: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    name: "1. Incoming Request",
    description: "Request เข้าสู่ระบบ",
    icon: Server,
    color: "emerald"
  },
  {
    name: "2. Middleware",
    description: "ประมวลผลก่อนเข้า route (logging, cors)",
    subSteps: ["Globally bound middleware (app.use())", "Module bound middleware"],
    icon: Layers,
    color: "blue"
  },
  {
    name: "3. Guards",
    description: "ตรวจสอบสิทธิ์ (auth, roles) ✅/❌",
    subSteps: ["Global guards", "Controller guards", "Route guards"],
    icon: Shield,
    color: "purple"
  },
  {
    name: "4. Interceptors (Pre)",
    description: "แปลง request ก่อนเข้า controller",
    subSteps: ["Global interceptors", "Controller interceptors", "Route interceptors"],
    icon: Filter,
    color: "cyan"
  },
  {
    name: "5. Pipes",
    description: "validate/transform ข้อมูล",
    subSteps: ["Global pipes", "Controller pipes", "Route pipes", "Route parameter pipes"],
    icon: Settings,
    color: "orange"
  },
  {
    name: "6. Controller",
    description: "รับ request และเรียก service",
    icon: FileCode,
    color: "pink"
  },
  {
    name: "7. Service",
    description: "Business logic, Database operations",
    icon: Database,
    color: "green"
  },
  {
    name: "8. Interceptors (Post)",
    description: "แปลง response (ลำดับกลับด้าน - FILO)",
    subSteps: ["Route interceptors", "Controller interceptors", "Global interceptors"],
    icon: Filter,
    color: "cyan"
  },
  {
    name: "9. Exception Filters",
    description: "จัดการ errors (ถ้ามี)",
    subSteps: ["Route filters", "Controller filters", "Global filters"],
    icon: AlertTriangle,
    color: "red"
  },
  {
    name: "10. Server Response",
    description: "ส่ง response กลับ",
    icon: Server,
    color: "emerald"
  }
];

const projectStructure = [
  {
    folder: "common/",
    icon: "📦",
    description: "โฟลเดอร์รวม utilities ที่ใช้ร่วมกันทั้งโปรเจค",
    children: [
      {
        folder: "decorators/",
        icon: "🏷️",
        description: "Custom Decorators - สร้าง metadata หรือ shortcut สำหรับ logic ที่ใช้ซ้ำ",
        files: [
          { name: "current-user.decorator.ts", desc: "ดึงข้อมูล user จาก request (@CurrentUser())" },
          { name: "roles.decorator.ts", desc: "กำหนด roles ที่อนุญาต (@Roles('admin'))" },
          { name: "public.decorator.ts", desc: "ระบุ endpoint ที่ไม่ต้อง auth (@Public())" }
        ]
      },
      {
        folder: "filters/",
        icon: "🚨",
        description: "Exception Filters - จัดการ error responses ให้เป็นรูปแบบเดียวกัน",
        files: [
          { name: "http-exception.filter.ts", desc: "จัดการ HTTP exceptions ทั่วไป" },
          { name: "validation.filter.ts", desc: "จัดการ validation errors" },
          { name: "all-exceptions.filter.ts", desc: "จับ error ทุกประเภท (catch-all)" }
        ]
      },
      {
        folder: "guards/",
        icon: "🛡️",
        description: "Guards (ตัวป้องกัน) - ตรวจสอบสิทธิ์ก่อนเข้าถึง route",
        files: [
          { name: "jwt-auth.guard.ts", desc: "ตรวจสอบ JWT token" },
          { name: "roles.guard.ts", desc: "ตรวจสอบ user role (admin, user)" },
          { name: "throttler.guard.ts", desc: "จำกัด rate limit" }
        ]
      },
      {
        folder: "interceptors/",
        icon: "🔄",
        description: "Interceptors (ตัวดักจับ) - แปลง request/response ก่อน-หลังเข้า handler",
        files: [
          { name: "transform.interceptor.ts", desc: "แปลง response เป็นรูปแบบมาตรฐาน" },
          { name: "logging.interceptor.ts", desc: "บันทึก log ทุก request" },
          { name: "timeout.interceptor.ts", desc: "กำหนด timeout สำหรับ request" },
          { name: "cache.interceptor.ts", desc: "จัดการ caching" }
        ]
      },
      {
        folder: "pipes/",
        icon: "🔧",
        description: "Pipes (ตัวแปลง/ตรวจสอบ) - แปลงหรือ validate ข้อมูลก่อนเข้า handler",
        files: [
          { name: "validation.pipe.ts", desc: "ตรวจสอบความถูกต้องของข้อมูล" },
          { name: "parse-int.pipe.ts", desc: "แปลง string เป็น number" },
          { name: "file-validation.pipe.ts", desc: "ตรวจสอบไฟล์ที่ upload" }
        ]
      }
    ]
  },
  {
    folder: "config/",
    icon: "⚙️",
    description: "Configuration Files - จัดการค่า settings และ environment variables",
    files: [
      { name: "configuration.ts", desc: "รวม config ทั้งหมด (database, jwt, app)" },
      { name: "database.config.ts", desc: "config สำหรับ database connection" },
      { name: "jwt.config.ts", desc: "config สำหรับ JWT (secret, expiry)" },
      { name: "swagger.config.ts", desc: "config สำหรับ API documentation" }
    ]
  },
  {
    folder: "modules/",
    icon: "📁",
    description: "Feature Modules - แยกโค้ดตาม business domain/feature",
    children: [
      {
        folder: "auth/",
        icon: "🔐",
        description: "Authentication Module - จัดการการยืนยันตัวตน",
        subFolders: [
          { name: "dto/", desc: "Data Transfer Objects - กำหนดรูปแบบข้อมูล input/output" },
          { name: "guards/", desc: "Auth-specific Guards" },
          { name: "strategies/", desc: "Passport Strategies - วิธีการยืนยันตัวตนแบบต่างๆ" }
        ],
        files: [
          { name: "auth.controller.ts", desc: "รับ HTTP requests เกี่ยวกับ auth" },
          { name: "auth.module.ts", desc: "รวม controller, service, imports ของ auth" },
          { name: "auth.service.ts", desc: "Logic: validateUser, login, generateToken" }
        ]
      },
      {
        folder: "users/",
        icon: "👤",
        description: "Users Module - จัดการข้อมูลผู้ใช้ (CRUD operations)",
        subFolders: [
          { name: "dto/", desc: "User DTOs" },
          { name: "entities/", desc: "Database Entities - โครงสร้างตารางใน database" }
        ],
        files: [
          { name: "users.controller.ts", desc: "รับ HTTP requests เกี่ยวกับ users" },
          { name: "users.module.ts", desc: "รวม controller, service, entity ของ users" },
          { name: "users.service.ts", desc: "Logic: findAll, findOne, create, update, delete" }
        ]
      }
    ]
  }
];

export default function NestJSGuidePage() {
  const [activeTab, setActiveTab] = useState<'structure' | 'lifecycle'>('structure');
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['common/', 'modules/']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    );
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', iconBg: 'bg-emerald-500/20' },
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', iconBg: 'bg-blue-500/20' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', iconBg: 'bg-purple-500/20' },
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', iconBg: 'bg-cyan-500/20' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', iconBg: 'bg-orange-500/20' },
      pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', iconBg: 'bg-pink-500/20' },
      green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', iconBg: 'bg-green-500/20' },
      red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', iconBg: 'bg-red-500/20' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-red-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 group"
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 mb-6">
              <BookOpen className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              NestJS Project Structure Guide
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              คู่มือโครงสร้างโปรเจค NestJS แบบละเอียด สำหรับการพัฒนา API
            </p>
          </div>
        </BlurFade>

        {/* Tabs Navigation */}
        <BlurFade delay={0.3}>
          <div className="mb-8">
            <div className="relative flex gap-2 p-1 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('structure')}
                className={`relative flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 z-10 ${activeTab === 'structure'
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Folder className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'structure' ? 'scale-110' : ''}`} />
                  <span className="text-sm md:text-base">📁 โครงสร้างโปรเจค</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('lifecycle')}
                className={`relative flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 z-10 ${activeTab === 'lifecycle'
                    ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/25 scale-105'
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Workflow className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'lifecycle' ? 'scale-110' : ''}`} />
                  <span className="text-sm md:text-base">🔄 Request Lifecycle</span>
                </div>
              </button>
            </div>
          </div>
        </BlurFade>

        {/* Content */}
        {activeTab === 'structure' ? (
          <div className="space-y-6">
            {/* Root Files */}
            <BlurFade delay={0.4}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📂</span> src/
                </h2>
                <div className="space-y-3">
                  {/* Root Files */}
                  <div className="ml-4 space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                      <span className="text-lg">🏠</span>
                      <div>
                        <code className="text-red-400 font-mono">app.module.ts</code>
                        <p className="text-slate-400 text-sm mt-1">Root Module - จุดรวมทุก modules, Config global providers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                      <span className="text-lg">🚀</span>
                      <div>
                        <code className="text-red-400 font-mono">main.ts</code>
                        <p className="text-slate-400 text-sm mt-1">Application Entry Point - สร้าง NestJS app, Setup global pipes, Start server</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Project Structure */}
            {projectStructure.map((item, index) => (
              <BlurFade key={item.folder} delay={0.5 + index * 0.1}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  {/* Main Folder Header */}
                  <button
                    onClick={() => toggleFolder(item.folder)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-red-500/20 rounded-lg">
                        <Folder className="w-6 h-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                          <span>{item.icon}</span>
                          <code className="font-mono">{item.folder}</code>
                          <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expandedFolders.includes(item.folder) ? 'rotate-90' : ''}`} />
                        </h2>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedFolders.includes(item.folder) && (
                    <div className="ml-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                      {/* Direct Files */}
                      {item.files && (
                        <div className="space-y-2">
                          {item.files.map((file) => (
                            <div key={file.name} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                              <FileCode className="w-4 h-4 text-slate-500 mt-1" />
                              <div>
                                <code className="text-cyan-400 font-mono text-sm">{file.name}</code>
                                <p className="text-slate-400 text-sm">{file.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Children Folders */}
                      {item.children?.map((child) => (
                        <div key={child.folder} className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">{child.icon}</span>
                            <code className="text-pink-400 font-mono font-semibold">{child.folder}</code>
                          </div>
                          <p className="text-slate-400 text-sm mb-3">{child.description}</p>

                          {/* Sub Folders */}
                          {'subFolders' in child && child.subFolders && (
                            <div className="space-y-2 mb-3">
                              {child.subFolders.map((sub) => (
                                <div key={sub.name} className="flex items-start gap-2 ml-4 p-2 bg-slate-800/50 rounded">
                                  <Folder className="w-4 h-4 text-slate-500 mt-0.5" />
                                  <div>
                                    <code className="text-yellow-400 font-mono text-sm">{sub.name}</code>
                                    <span className="text-slate-500 text-sm ml-2">{sub.desc}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Files */}
                          {child.files && (
                            <div className="space-y-2">
                              {child.files.map((file) => (
                                <div key={file.name} className="flex items-start gap-2 ml-4 p-2 bg-slate-800/50 rounded">
                                  <FileCode className="w-4 h-4 text-slate-500 mt-0.5" />
                                  <div>
                                    <code className="text-green-400 font-mono text-sm">{file.name}</code>
                                    <span className="text-slate-500 text-sm ml-2 block">{file.desc}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Lifecycle Flow */}
            <BlurFade delay={0.4}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  🔄 Request Lifecycle ใน NestJS
                </h2>
                <p className="text-slate-400 text-center mb-8">
                  อ้างอิงจาก{" "}
                  <a
                    href="https://docs.nestjs.com/faq/request-lifecycle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 underline"
                  >
                    NestJS Official Documentation
                  </a>
                </p>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-purple-500 to-emerald-500"></div>

                  {/* Steps */}
                  <div className="space-y-4">
                    {lifecycleSteps.map((step, index) => {
                      const colors = getColorClasses(step.color);
                      const Icon = step.icon;
                      return (
                        <BlurFade key={index} delay={0.5 + index * 0.05}>
                          <div className={`relative pl-20 ${colors.bg} rounded-xl p-4 border ${colors.border} transition-all duration-300 hover:scale-[1.02]`}>
                            {/* Icon Circle */}
                            <div className={`absolute left-4 top-4 w-8 h-8 rounded-full ${colors.iconBg} flex items-center justify-center z-10`}>
                              <Icon className={`w-4 h-4 ${colors.text}`} />
                            </div>

                            {/* Content */}
                            <div>
                              <h3 className={`font-bold ${colors.text} mb-1`}>{step.name}</h3>
                              <p className="text-slate-300 text-sm">{step.description}</p>

                              {step.subSteps && (
                                <div className="mt-3 space-y-1">
                                  {step.subSteps.map((sub, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                                      <span className="text-xs">→</span>
                                      <span>{sub}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </BlurFade>
                      );
                    })}
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Important Notes */}
            <BlurFade delay={0.9}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  ⚠️ ข้อควรจำสำคัญ
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {/* Middleware */}
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-500/20">
                    <h3 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Middleware
                    </h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Globally bound ทำงานก่อน Module bound เสมอ</li>
                      <li>• ทำงานตามลำดับที่ผูก (เหมือน Express)</li>
                      <li>• Root module ทำงานก่อน modules อื่น</li>
                    </ul>
                  </div>

                  {/* Guards */}
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/20">
                    <h3 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Guards
                    </h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• @UseGuards(Guard1, Guard2) → Guard1 ก่อน Guard2</li>
                      <li>• ถ้า Guard return false → reject ทันที</li>
                    </ul>
                  </div>

                  {/* Interceptors */}
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-cyan-500/20">
                    <h3 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Interceptors
                    </h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• ใช้ <code className="bg-slate-800 px-1 rounded">RxJS Observables</code></li>
                      <li>• Pre: Global → Controller → Route</li>
                      <li>• Post: Route → Controller → Global <span className="text-yellow-400">(กลับด้าน FILO)</span></li>
                    </ul>
                  </div>

                  {/* Pipes */}
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-orange-500/20">
                    <h3 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Pipes
                    </h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• ลำดับ: Global → Controller → Route</li>
                      <li>• Parameter Level: ทำงานจาก <span className="text-yellow-400">สุดท้ายไปแรก</span></li>
                      <li>• Query → Param → Body</li>
                    </ul>
                  </div>

                  {/* Exception Filters */}
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-red-500/20 md:col-span-2">
                    <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Exception Filters
                    </h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• <span className="text-yellow-400">ไม่ได้</span> resolve จาก Global ก่อน (ต่างจาก components อื่น)</li>
                      <li>• ทำงานจาก Route → Controller → Global</li>
                      <li>• Exception <span className="text-red-400">ไม่สามารถส่งต่อ</span> ระหว่าง filters ได้</li>
                      <li>• เมื่อเกิด uncaught exception → ข้าม lifecycle ที่เหลือ → ไปที่ filter ทันที</li>
                      <li>• try/catch ที่จับ exception ได้ → <span className="text-yellow-400">จะไม่</span> trigger Exception Filter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Summary Table */}
            <BlurFade delay={1.0}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">
                  📝 สรุป Request Lifecycle
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900/50">
                        <th className="px-4 py-3 text-left text-pink-400 font-semibold">ลำดับ</th>
                        <th className="px-4 py-3 text-left text-pink-400 font-semibold">Component</th>
                        <th className="px-4 py-3 text-left text-pink-400 font-semibold">Sub-order</th>
                        <th className="px-4 py-3 text-left text-pink-400 font-semibold">คำอธิบาย</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-emerald-400">1</td>
                        <td className="px-4 py-3 font-semibold text-white">Incoming Request</td>
                        <td className="px-4 py-3 text-slate-500">-</td>
                        <td className="px-4 py-3 text-slate-300">Request เข้าสู่ระบบ</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-blue-400">2</td>
                        <td className="px-4 py-3 font-semibold text-white">Middleware</td>
                        <td className="px-4 py-3 text-slate-400">Global → Module</td>
                        <td className="px-4 py-3 text-slate-300">app.use() ทำงานก่อน</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-purple-400">3</td>
                        <td className="px-4 py-3 font-semibold text-white">Guards</td>
                        <td className="px-4 py-3 text-slate-400">Global → Controller → Route</td>
                        <td className="px-4 py-3 text-slate-300">ตรวจสอบสิทธิ์</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-cyan-400">4</td>
                        <td className="px-4 py-3 font-semibold text-white">Interceptors (Pre)</td>
                        <td className="px-4 py-3 text-slate-400">Global → Controller → Route</td>
                        <td className="px-4 py-3 text-slate-300">ก่อนเข้า controller</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-orange-400">5</td>
                        <td className="px-4 py-3 font-semibold text-white">Pipes</td>
                        <td className="px-4 py-3 text-slate-400">Global → Controller → Route → Param</td>
                        <td className="px-4 py-3 text-slate-300">Validate/Transform</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-pink-400">6</td>
                        <td className="px-4 py-3 font-semibold text-white">Controller</td>
                        <td className="px-4 py-3 text-slate-500">-</td>
                        <td className="px-4 py-3 text-slate-300">Method handler</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-green-400">7</td>
                        <td className="px-4 py-3 font-semibold text-white">Service</td>
                        <td className="px-4 py-3 text-slate-500">-</td>
                        <td className="px-4 py-3 text-slate-300">Business logic</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-cyan-400">8</td>
                        <td className="px-4 py-3 font-semibold text-white">Interceptors (Post)</td>
                        <td className="px-4 py-3 text-yellow-400">Route → Controller → Global ⚠️</td>
                        <td className="px-4 py-3 text-slate-300">ลำดับกลับด้าน (FILO)</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-red-400">9</td>
                        <td className="px-4 py-3 font-semibold text-white">Exception Filters</td>
                        <td className="px-4 py-3 text-yellow-400">Route → Controller → Global ⚠️</td>
                        <td className="px-4 py-3 text-slate-300">เมื่อมี error</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 text-emerald-400">10</td>
                        <td className="px-4 py-3 font-semibold text-white">Server Response</td>
                        <td className="px-4 py-3 text-slate-500">-</td>
                        <td className="px-4 py-3 text-slate-300">ส่ง response กลับ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </BlurFade>
          </div>
        )}

        {/* Back to Knowledge */}
        <BlurFade delay={1.1}>
          <div className="mt-12 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-red-500/25"
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
