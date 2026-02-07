"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Bot, BrainCircuit, Activity, LineChart, Globe, Layers, ArrowRight, Zap, Shield, Sparkles, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import styles from './healthscale.module.css';

export default function HealthScalePage() {
    return (
        <div className={styles.container}>
            {/* Navigation */}
            <nav className={styles.nav}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    <span>Selfpreneur Ecosystem</span>
                </Link>
                <div className={styles.navLogo}>HealthScale<span className={styles.highlight}>.AI</span></div>
                <div style={{ width: 100 }}></div> {/* Spacer for balance */}
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                {/* Abstract Background */}
                <div className={styles.heroBackground}>
                    <div className={`${styles.blob} ${styles.blob1}`} />
                    <div className={`${styles.blob} ${styles.blob2}`} />
                    <div className={`${styles.blob} ${styles.blob3}`} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.heroContent}
                >
                    <div className={styles.badge}>
                        <Activity size={14} />
                        Healthcare & Wellness Vertical AI
                    </div>

                    <h1 className={styles.heroTitle}>
                        Smart Health <br />
                        <span className={styles.gradientText}>Intelligent Business</span>
                    </h1>

                    <p className={styles.heroDesc}>
                        ระบบปฏิบัติการ AI ที่ "เข้าใจ" ร่างกายมนุษย์และธุรกิจสุขภาพของคุณ<br />
                        เปลี่ยน Data สุขภาพให้เป็นยอดขายที่ยั่งยืน
                    </p>

                    <div className={styles.heroActions}>
                        <button className={styles.primaryBtn}>
                            ขอ Demo ระบบ
                            <ArrowRight size={18} />
                        </button>
                        <Link href="/" className={styles.secondaryBtn}>
                            ดู Roadmap การพัฒนา
                        </Link>
                    </div>
                </motion.div>

                {/* Dashboard Preview Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className={styles.dashboardPreview}
                >
                    <div className={styles.dashboardHeader}>
                        <div className={styles.windowDot} style={{ background: '#ef4444' }}></div>
                        <div className={styles.windowDot} style={{ background: '#fbbf24' }}></div>
                        <div className={styles.windowDot} style={{ background: '#22c55e' }}></div>
                    </div>
                    <div className={styles.dashboardContent}>
                        <BrainCircuit size={64} style={{ opacity: 0.3, marginBottom: 16 }} />
                        <p style={{ fontFamily: 'monospace', opacity: 0.5 }}>Simulated AI Core Dashboard</p>
                    </div>
                </motion.div>
            </section>

            {/* Core Features - Alternating Layout */}
            <section className={styles.features}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Why HealthScale?</h2>
                    <p className={styles.sectionDesc}>
                        เพราะธุรกิจสุขภาพมีความซับซ้อน เราจึงสร้าง AI ที่ถูกเทรนมาเฉพาะทาง
                    </p>
                </div>

                <div className={styles.featureGrid}>
                    {/* Feature 1: Symptom Analysis */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureImage}>
                            <div className={styles.imageCard}>
                                <div className={styles.chatBubbleCustomer}>
                                    <p className={styles.chatBubbleLabel}>Customer</p>
                                    <p>ช่วงนี้รู้สึกเพลียๆ นอนไม่ค่อยหลับ มีอาหารเสริมแนะนำไหมครับ?</p>
                                </div>
                                <div className={styles.chatBubbleAI}>
                                    <div className={styles.chatBubbleAILabel}>
                                        <Sparkles size={12} /> <span className={styles.chatBubbleAIText}>HealthScale AI Analysis</span>
                                    </div>
                                    <p className={styles.chatBubbleAIDesc}>
                                        อาการ: <span className={styles.chatBubbleAIHighlight}>Fatigue, Insomnia</span><br />
                                        สาเหตุที่เป็นไปได้: <span className={styles.chatBubbleAIHighlight}>Stress, Magnesium Deficiency</span><br />
                                        แนะนำ: <span className={styles.chatBubbleAIRecommendation}>Magnesium Complex + Melatonin</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureText}>
                            <div className={styles.featureIcon}>
                                <BrainCircuit size={24} />
                            </div>
                            <h3 className={styles.featureTitle}>Symptom-Based Analysis</h3>
                            <p className={styles.featureDesc}>
                                AI ของเราไม่ได้แค่ "เดา" แต่ "วิเคราะห์" อาการลูกค้าจากบทสนทนา เชื่อมโยงกับฐานข้อมูลทางการแพทย์ (Medical Knowledge Graph) เพื่อแนะนำสินค้าที่แก้ปัญหาได้ตรงจุดที่สุด เพิ่มโอกาสปิดการขายและสร้างความประทับใจ
                            </p>
                            <ul className={styles.checkList}>
                                {['วิเคราะห์ Keyword อาการเจ็บป่วย', 'แนะนำสินค้าแบบ Personalized', 'Warning ข้อควรระวัง/ยาตีกัน'].map((item, i) => (
                                    <li key={i} className={styles.checkItem}>
                                        <div className={styles.checkDot} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: LTV Predictor */}
                    <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
                        <div className={styles.featureText}>
                            <div className={styles.featureIcon} style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399' }}>
                                <LineChart size={24} />
                            </div>
                            <h3 className={styles.featureTitle}>LTV & Churn Prediction</h3>
                            <p className={styles.featureDesc}>
                                รู้ล่วงหน้าว่าลูกค้าคนไหนเป็น "VVIP" ตั้งแต่บิลแรก AI จะคำนวณ Customer Lifetime Value และทำนายช่วงเวลาที่สินค้าจะหมด เพื่อส่งข้อความเตือนให้ซื้อซ้ำในจังหวะที่ถูกต้องที่สุด
                            </p>
                            <button className={styles.secondaryBtn} style={{ border: 'none', paddingLeft: 0, justifyContent: 'flex-start', color: '#34d399' }}>
                                ดูวิธีการคำนวณ <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className={styles.featureImage}>
                            <div className={styles.imageCard} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 0 }}>
                                <div className={styles.chartBars}>
                                    <div className={styles.chartBar} style={{ height: '40%' }}>
                                        <div className={styles.chartLabel}>Nov</div>
                                    </div>
                                    <div className={styles.chartBar} style={{ height: '60%' }}>
                                        <div className={styles.chartLabel}>Dec</div>
                                    </div>
                                    <div className={`${styles.chartBar} ${styles.chartBarPredicted}`} style={{ height: '85%' }}>
                                        <div className={styles.chartValue}>+45%</div>
                                        <div className={styles.chartLabelPredicted}>Jan (Predicted)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Features */}
            <section className={styles.gridSection}>
                <div className={styles.grid}>
                    <GridCard
                        icon={<Bot size={28} />}
                        title="The Closer Agent"
                        desc="บอทปิดการขายที่เข้าใจบริบทสินค้าสุขภาพ ให้คำปรึกษาเบื้องต้นได้เหมือนเภสัชกรหรือผู้เชี่ยวชาญส่วนตัว"
                        color="#818cf8"
                    />
                    <GridCard
                        icon={<Globe size={28} />}
                        title="Omni-Channel Sync"
                        desc="เชื่อมต่อ Line OA, Facebook Messenger และ Website เป็นฐานข้อมูลเดียวกัน ไม่ตกหล่นทุกการติดต่อ"
                        color="#c084fc"
                    />
                    <GridCard
                        icon={<Layers size={28} />}
                        title="Automated Follow-up"
                        desc="ระบบติดตามผลหลังการขายอัตโนมัติ เตือนให้ซื้อซ้ำ หรือถามอาการเมื่อยาหมด พอดีเป๊ะตามรอบการใช้จริง"
                        color="#f472b6"
                    />
                    <GridCard
                        icon={<Shield size={28} />}
                        title="PDPA & Health Data Privacy"
                        desc="ออกแบบมาเพื่อรักษาความปลอดภัยข้อมูลสุขภาพโดยเฉพาะ สบายใจเรื่องกฎหมาย PDPA"
                        color="#fbbf24"
                    />
                    <GridCard
                        icon={<Zap size={28} />}
                        title="Instant Integration"
                        desc="เชื่อมต่อกับระบบสินค้าคงคลังและ Payment Gateway ชั้นนำของไทยได้ทันที"
                        color="#22d3ee"
                    />
                    <GridCard
                        icon={<LinkIcon size={28} />}
                        title="API-First Design"
                        desc="พร้อมเชื่อมต่อกับระบบ Hospital Information System (HIS) หรือ CRM เดิมของคุณ"
                        color="#94a3b8"
                    />
                </div>
            </section>

            {/* CTA Bottom */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>พร้อมยกระดับธุรกิจสุขภาพของคุณหรือยัง?</h2>
                <button className={styles.ctaButton}>
                    จองคิวปรึกษาทีมงาน
                </button>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2026 HealthScale AI by Selfpreneur.club</p>
            </footer>
        </div>
    );
}

function GridCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
    return (
        <div className={styles.gridCard}>
            <div className={styles.gridIcon} style={{ color: color, background: `${color}15` }}>
                {icon}
            </div>
            <h3 className={styles.gridTitle}>{title}</h3>
            <p className={styles.gridDesc}>{desc}</p>
        </div>
    );
}
