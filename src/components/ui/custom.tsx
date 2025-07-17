'use client'

import React from 'react'

export default function CustomBorderBackground() {
    return (
        <div className="relative w-full h-[1px] overflow-hidden">
            {/* Deep space background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #000000 0%, #0b0f2a 50%, #0d1b2a 100%)'
                }}
            ></div>

            {/* Nebula layer */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(162, 89, 255, 0.15) 0%, rgba(0, 207, 255, 0.1) 30%, transparent 70%)'
                }}
            ></div>

            {/* Cosmic light path */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="w-full h-1 relative"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, #00cfff 20%, #a259ff 50%, #7df9ff 80%, transparent 100%)',
                        boxShadow: '0 0 20px rgba(0, 207, 255, 0.5), 0 0 40px rgba(162, 89, 255, 0.3), 0 0 60px rgba(125, 249, 255, 0.2)'
                    }}
                >
                </div>
            </div>

            {/* Floating star particles */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-4 left-1/6 w-1 h-1 rounded-full animate-ping"
                    style={{
                        background: '#ffffff',
                        animation: 'ping 3s infinite'
                    }}
                ></div>
                <div
                    className="absolute top-8 left-2/3 w-0.5 h-0.5 rounded-full animate-ping"
                    style={{
                        background: '#00cfff',
                        animation: 'ping 4s infinite 1s'
                    }}
                ></div>
                <div
                    className="absolute top-12 left-1/3 w-0.5 h-0.5 rounded-full animate-ping"
                    style={{
                        background: '#a259ff',
                        animation: 'ping 3.5s infinite 2s'
                    }}
                ></div>
                <div
                    className="absolute top-16 left-4/5 w-0.5 h-0.5 rounded-full animate-ping"
                    style={{
                        background: '#7df9ff',
                        animation: 'ping 4.5s infinite 0.5s'
                    }}
                ></div>
            </div>

            {/* Gradient overlay for smooth transition */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, transparent 30%, transparent 70%, rgba(11, 15, 42, 0.8) 100%)'
                }}
            ></div>
        </div>
    )
}