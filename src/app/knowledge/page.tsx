"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Container, ArrowRight, Code, Server } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

interface KnowledgeCard {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
}

const knowledgeCards: KnowledgeCard[] = [
    {
        id: "docker-desktop",
        title: "Docker Desktop Guide",
        description: "อธิบายความหมายของแต่ละเมนูใน Docker Desktop รวมถึง Images, Containers, Volumes และ Builds",
        href: "/knowledge/docker-desktop",
        icon: Container,
        gradient: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-500/20 hover:border-blue-500/40",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
    },
    {
        id: "react-nextjs-hooks-guide",
        title: "React & Next.js Hooks Guide",
        description: "คู่มือการใช้งาน Hooks ที่นิยมใน React และ Next.js พร้อมตัวอย่างโค้ดและคำอธิบายภาษาไทย",
        href: "/knowledge/react-nextjs-hooks-guide",
        icon: Code,
        gradient: "from-purple-500 to-pink-500",
        borderColor: "border-purple-500/20 hover:border-purple-500/40",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
    },
    {
        id: "nestjs-guide",
        title: "NestJS Project Structure Guide",
        description: "คู่มือโครงสร้างโปรเจค NestJS แบบละเอียด พร้อมอธิบาย Request Lifecycle และหน้าที่ของแต่ละส่วน",
        href: "/knowledge/NestJS",
        icon: Server,
        gradient: "from-red-500 to-pink-500",
        borderColor: "border-red-500/20 hover:border-red-500/40",
        iconBg: "bg-red-500/20",
        iconColor: "text-red-400",
    }
];

export default function KnowledgePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Header with Back Button */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-medium">กลับสู่หน้าหลัก</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <BlurFade delay={0.2}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-6">
                            <BookOpen className="w-8 h-8 text-purple-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            Knowledge Base
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            คลังความรู้และคู่มือการใช้งานต่างๆ สำหรับนักพัฒนา
                        </p>
                    </div>
                </BlurFade>

                {/* Knowledge Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {knowledgeCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <BlurFade key={card.id} delay={0.3 + index * 0.1}>
                                <Link
                                    href={card.href}
                                >
                                    {/* Content */}
                                    <div className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border ${card.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10`}>
                                        {/* Icon */}
                                        <div className={`${card.iconBg} p-4 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`w-6 h-6 ${card.iconColor}`} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                            {card.description}
                                        </p>

                                        {/* Arrow Icon */}
                                        <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                                            <span className="text-sm font-medium">อ่านเพิ่มเติม</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>

                                </Link>
                            </BlurFade>
                        );
                    })}
                </div>

                {/* Empty State (if no cards) */}
                {knowledgeCards.length === 0 && (
                    <BlurFade delay={0.3}>
                        <div className="text-center py-12">
                            <p className="text-slate-400">ยังไม่มีเนื้อหาในขณะนี้</p>
                        </div>
                    </BlurFade>
                )}
            </div>
        </div>
    );
}