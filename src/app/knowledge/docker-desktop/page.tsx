"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Box, Container, Database, Hammer } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function KnowledgePageDockerDesktop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Docker Desktop Guide
            </h1>
            <p className="text-slate-400 text-lg">
              อธิบายความหมายของแต่ละเมนูใน Docker Desktop
            </p>
          </div>
        </BlurFade>

        {/* Docker Topics */}
        <div className="space-y-8">
          {/* 1. Images */}
          <BlurFade delay={0.3}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Box className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  1. Images (ภาพแบบ/พิมพ์เขียว) 📦
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-purple-300 mb-2">คือ:</p>
                  <p>แม่แบบ หรือ Template สำหรับสร้าง Container</p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300 mb-2">
                    เปรียบเหมือน: &quot;แบบแปลนบ้าน&quot; 📋
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>├─ มีข้อมูลว่าต้องสร้างยังไง</li>
                    <li>├─ ใช้แบบเดียวกันสร้างได้หลายหลัง</li>
                    <li>└─ เป็นแค่ไฟล์ ยังไม่มีการทำงาน</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-cyan-300 mb-2">
                    ตัวอย่าง:
                  </p>
                  <div className="bg-slate-900/50 p-3 rounded-lg text-sm">
                    <p>wellness-web-feature-we:latest → แบบแปลนของ Next.js app</p>
                    <p>expert-hub-frontend-expr:latest → แบบแปลนของอีก Next.js app</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-green-300 mb-2">
                    คำสั่งที่เกี่ยวข้อง:
                  </p>
                  <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
{`# ดู images ทั้งหมด
docker images

# สร้าง image จาก Dockerfile
docker build -t myapp:latest .

# ลบ image
docker rmi wellness-web-feature-we:latest

# ดาวน์โหลด image
docker pull postgres:15-alpine`}
                  </pre>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* 2. Containers */}
          <BlurFade delay={0.4}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Container className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  2. Containers (ตู้คอนเทนเนอร์/กล่องทำงาน) 🏃
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-purple-300 mb-2">คือ:</p>
                  <p>Application ที่กำลังทำงานจริง (สร้างมาจาก Image)</p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300 mb-2">
                    เปรียบเหมือน: &quot;บ้านที่สร้างเสร็จแล้ว&quot; 🏠
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>├─ สร้างจากแบบแปลน (Image)</li>
                    <li>├─ มีคนอยู่อาศัย (Process ทำงาน)</li>
                    <li>├─ ใช้ไฟฟ้า น้ำ (CPU, RAM)</li>
                    <li>└─ สร้างได้หลายหลังจากแบบเดียวกัน</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-cyan-300 mb-2">
                    สถานะของ Container:
                  </p>
                  <div className="bg-slate-900/50 p-3 rounded-lg space-y-1 text-sm">
                    <p>🟢 <span className="font-semibold">Running</span> - กำลังทำงานอยู่</p>
                    <p>🟡 <span className="font-semibold">Paused</span> - หยุดชั่วคราว</p>
                    <p>🔴 <span className="font-semibold">Stopped</span> - หยุดแล้ว</p>
                    <p>⚫ <span className="font-semibold">Exited</span> - ทำงานเสร็จแล้ว/ปิดไปแล้ว</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-green-300 mb-2">
                    คำสั่งที่เกี่ยวข้อง:
                  </p>
                  <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
{`# รัน Container จาก Image
docker run -d --name my-nextjs-app -p 3000:3000 wellness-web:latest

# ดู Containers ที่กำลังรัน
docker ps

# ดู Containers ทั้งหมด (รวมที่หยุด)
docker ps -a

# เข้าไปใน Container
docker exec -it my-nextjs-app sh

# หยุด/เริ่ม/ลบ Container
docker stop my-nextjs-app
docker start my-nextjs-app
docker rm my-nextjs-app`}
                  </pre>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* 3. Volumes */}
          <BlurFade delay={0.5}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  3. Volumes (พื้นที่เก็บข้อมูล) 💾
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-purple-300 mb-2">คือ:</p>
                  <p>พื้นที่จัดเก็บข้อมูลถาวร ที่ไม่หายแม้ Container จะถูกลบ</p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300 mb-2">
                    เปรียบเหมือน: &quot;คลังเก็บของนอกบ้าน&quot; 📦🏚️
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>├─ เก็บข้อมูลสำคัญ</li>
                    <li>├─ บ้าน(Container)รื้อแล้ว ของในคลังยังอยู่</li>
                    <li>├─ หลายบ้านใช้คลังเดียวกันได้</li>
                    <li>└─ ข้อมูลไม่หายเมื่อ restart</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-cyan-300 mb-2">ประโยชน์:</p>
                  <div className="bg-slate-900/50 p-3 rounded-lg space-y-1 text-sm">
                    <p>✅ ข้อมูลไม่หาย เมื่อ Container ถูกลบ</p>
                    <p>✅ ใช้ Volume ร่วมกันหลาย Containers ได้</p>
                    <p>✅ Backup ง่าย</p>
                    <p>✅ Performance ดีกว่า bind mounts</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-green-300 mb-2">
                    คำสั่งที่เกี่ยวข้อง:
                  </p>
                  <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
{`# ดู Volumes ทั้งหมด
docker volume ls

# สร้าง Volume
docker volume create my-data

# ดูรายละเอียด Volume
docker volume inspect postgres_data

# ลบ Volume (ระวัง! ข้อมูลหายถาวร)
docker volume rm my-data

# ลบ Volumes ที่ไม่ได้ใช้
docker volume prune`}
                  </pre>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* 4. Builds */}
          <BlurFade delay={0.6}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Hammer className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  4. Builds (ประวัติการ Build) 🔨
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-purple-300 mb-2">คือ:</p>
                  <p>ประวัติและกระบวนการ Build Docker Images</p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300 mb-2">
                    เปรียบเหมือน: &quot;บันทึกการก่อสร้าง&quot; 📝
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>├─ บันทึกว่า build เมื่อไหร่</li>
                    <li>├─ ใช้เวลานานแค่ไหน</li>
                    <li>├─ Build สำเร็จหรือไม่</li>
                    <li>└─ มี cache อะไรบ้าง</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-green-300 mb-2">
                    คำสั่งที่เกี่ยวข้อง:
                  </p>
                  <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
{`# Build image
docker build -t wellness-web:v1.0 .

# Build โดยไม่ใช้ cache
docker build --no-cache -t wellness-web:v1.0 .

# ดู build history
docker history wellness-web:v1.0

# ลบ build cache
docker builder prune`}
                  </pre>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Workflow Diagram */}
          <BlurFade delay={0.7}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-pink-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                ความสัมพันธ์ระหว่าง 4 อย่างนี้
              </h2>
              <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto text-slate-300 text-sm">
{`┌─────────────────────────────────────────────────────┐
│  Workflow การทำงาน                                  │
└─────────────────────────────────────────────────────┘

1. BUILDS (สร้าง)
   │
   ├─> อ่าน Dockerfile
   ├─> Download dependencies
   ├─> Build code
   └─> สร้างเป็น...
        │
        ▼
2. IMAGES (แม่แบบ)
   │
   ├─> wellness-web:latest
   ├─> postgres:15-alpine
   └─> เมื่อรัน จะกลายเป็น...
        │
        ▼
3. CONTAINERS (ทำงานจริง)
   │
   ├─> nextjs-container (เว็บกำลังรัน)
   ├─> postgres-container (DB กำลังรัน)
   └─> ต้องการเก็บข้อมูล ใช้...
        │
        ▼
4. VOLUMES (เก็บข้อมูล)
   │
   ├─> postgres_data (ข้อมูล DB)
   ├─> uploads (ไฟล์ upload)
   └─> logs (log files)`}
              </pre>
            </div>
          </BlurFade>

          {/* Docker Compose Example */}
          <BlurFade delay={0.8}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                ตัวอย่างการใช้งานจริง: Deploy Next.js + NestJS + PostgreSQL
              </h2>
              <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-slate-300 text-sm">
{`# docker-compose.yml
version: '3.8'

services:
  # ========== DATABASE ==========
  postgres:
    image: postgres:15-alpine        # ← IMAGE
    container_name: my_postgres      # ← CONTAINER
    volumes:
      - postgres_data:/var/lib/postgresql/data  # ← VOLUME
    ports:
      - "5432:5432"

  # ========== BACKEND API ==========
  backend:
    build: ./backend                 # ← BUILD
    container_name: my_nestjs
    volumes:
      - ./backend/logs:/app/logs     # ← VOLUME
    ports:
      - "4000:4000"

  # ========== FRONTEND ==========
  frontend:
    image: wellness-web:latest       # ← IMAGE
    container_name: my_nextjs
    volumes:
      - ./uploads:/app/public/uploads
    ports:
      - "3000:3000"

volumes:
  postgres_data:`}
              </pre>
            </div>
          </BlurFade>

          {/* Tips */}
          <BlurFade delay={0.9}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                เคล็ดลับการใช้งาน
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">
                    1. ลบของเก่าที่ไม่ใช้ (ประหยัดพื้นที่)
                  </h3>
                  <pre className="bg-slate-900 p-3 rounded-lg overflow-x-auto text-slate-300 text-sm">
{`docker container prune  # ลบ Containers ที่หยุดแล้ว
docker image prune -a   # ลบ Images ที่ไม่ได้ใช้
docker volume prune     # ลบ Volumes ที่ไม่ได้ใช้
docker system prune -a --volumes  # ลบทุกอย่าง (ระวัง!)`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">
                    2. ดู Logs
                  </h3>
                  <pre className="bg-slate-900 p-3 rounded-lg overflow-x-auto text-slate-300 text-sm">
{`docker logs my-nextjs      # ดู logs
docker logs -f my-nestjs   # ดู logs แบบ real-time`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">
                    3. Backup Volume
                  </h3>
                  <pre className="bg-slate-900 p-3 rounded-lg overflow-x-auto text-slate-300 text-sm">
{`docker run --rm \\
  -v postgres_data:/data \\
  -v $(pwd):/backup \\
  alpine tar czf /backup/db-backup.tar.gz /data`}
                  </pre>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Back to Knowledge */}
        <BlurFade delay={1.0}>
          <div className="mt-12 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25"
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

