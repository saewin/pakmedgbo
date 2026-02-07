"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Briefcase, GraduationCap, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import styles from "./home.module.css";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className={`${styles.nav} glass-panel`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            Selfpreneur<span className={styles.logoHighlight}>.club</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="#ecosystem" className={styles.navLink}>Ecosystem</Link>
            <Link href="#services" className={styles.navLink}>Services</Link>
            <Link href="#roadmap" className={styles.navLink}>Roadmap</Link>
          </div>
          <button className={styles.launchButton}>
            จองคิวปรึกษา
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={styles.heroInner}
          >
            <motion.div variants={itemVariants} className={styles.badge}>
              <span className={styles.pingWrapper}>
                <span className={styles.ping}></span>
                <span className={styles.dot}></span>
              </span>
              Selfpreneur AI OS: ระบบปฏิบัติการธุรกิจยุคใหม่
            </motion.div>

            <motion.h1 variants={itemVariants} className={styles.heroTitle}>
              เราดูแลระบบให้คุณ <br />
              <span className="gradient-text">ก่อนส่งต่อความมั่งคั่งให้คุณดูแลเอง</span>
            </motion.h1>

            <motion.p variants={itemVariants} className={styles.heroDescription}>
              บริการ Managed Service วางระบบ AI Marketing ครบวงจร <strong className="text-white">ข้อมูล First Party Data เป็นของคุณ 100%</strong> เราดูแลให้ในช่วงแรกจนระบบเสถียร พร้อมส่งต่อให้คุณสร้างรายได้แบบ Build Once, Sell Many อย่างยั่งยืน
            </motion.p>

            <motion.div variants={itemVariants} className={styles.heroButtons}>
              <Link href="#services" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                ดูบริการของเรา <ArrowRight size={18} />
              </Link>
              <button className={styles.roadmapButton}>
                ดูขั้นตอนการทำงาน
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className={styles.ecosystem}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Selfpreneur Ecosystem</h2>
            <p className={styles.sectionSubtitle}>
              เครื่องมือและองค์ความรู้ที่ครบครัน เพื่อเปลี่ยนธุรกิจของคุณให้ขับเคลื่อนด้วย AI
            </p>
          </div>

          <div className={styles.grid}>
            <Link href="/healthscale" className="block group">
              <FeatureCard
                icon={<Brain size={32} color="var(--accent-primary)" />}
                title="HealthScale AI"
                description="ระบบจัดการข้อมูลและ AI Marketing เจาะลึกธุรกิจสุขภาพ (Flagship Vertical) ทำงานแทนคุณ 24/7"
                highlight="Core Platform"
              />
            </Link>
            <FeatureCard
              icon={<GraduationCap size={32} color="#818cf8" />}
              title="Selfpreneur Academy"
              description="แหล่งเรียนรู้ถอดรหัสการทำธุรกิจด้วย AI ยกระดับทีมของคุณให้เป็นผู้เชี่ยวชาญ (ในระยะถัดไป)"
              highlight="Education"
            />
            <FeatureCard
              icon={<Layers size={32} color="#34d399" />}
              title="Knowledge Assets"
              description="สินค้าดิจิทัล Templates และ Prompt Guides สร้างครั้งเดียว ขายได้ตลอดไป (Coming Soon)"
              highlight="Digital Assets"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className={styles.roadmap}>
        <div className="container">
          <div className={styles.roadmapFlex}>
            <div className={styles.column}>
              <h2 className={styles.sectionTitle}>Business Roadmap</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                แผนการเติบโตสู่ความมั่งคั่งที่ยั่งยืน เริ่มต้นจากการดูแลอย่างใกล้ชิด สู่ความเป็นอิสระทางธุรกิจ
              </p>

              <div className={styles.roadmapSteps}>
                <RoadmapStep
                  phase="Phase 1 (ปัจจุบัน)"
                  title="Managed Service & Setup"
                  items={[
                    "ทีมงาน Selfpreneur วางระบบและดูแลหลังบ้านให้ทั้งหมด",
                    "ติดตั้งระบบเก็บข้อมูล First Party Data ของคุณเอง 100%",
                    "ปรับจูน AI Agent ให้เรียนรู้สินค้าและบริการของคุณจนแม่นยำ"
                  ]}
                  active
                />
                <RoadmapStep
                  phase="Phase 2"
                  title="Training & Handover"
                  items={[
                    "อบรมการใช้งานระบบ (Selfpreneur Academy)",
                    "เริ่มถ่ายโอนงานให้ทีมของคุณดูแลเอง",
                    "ลดบทบาททีม Managed Service ลง แต่ยังคอย Support"
                  ]}
                />
                <RoadmapStep
                  phase="Phase 3"
                  title="Build Once, Sell Many"
                  items={[
                    "ระบบ Automation ทำงานได้เองเกือบ 100%",
                    "ขยายฐานลูกค้าด้วยระบบ Affiliate",
                    "ผู้ประกอบการมีเวลา มีเงิน และแรงสร้างสรรค์สิ่งใหม่"
                  ]}
                />
              </div>
            </div>
            <div className={styles.column}>
              {/* Abstract visual for roadmap */}
              <div className="glass-panel" style={{ padding: '2rem', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(99, 102, 241, 0.1))' }} />
                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}><CheckCircle2 size={80} /></div>
                  <div className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Your Data</div>
                  <div style={{ color: 'var(--text-secondary)' }}>100% Ownership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-[var(--bg-secondary)] relative">
        <BlogSection />
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Selfpreneur.club. สงวนลิขสิทธิ์</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description, highlight }: { icon: React.ReactNode, title: string, description: string, highlight: string }) {
  return (
    <div className={`${styles.card} glass-panel`}>
      <div className={styles.cardIconBox}>
        {icon}
      </div>
      <div className={styles.cardHighlight}>{highlight}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}

function RoadmapStep({ phase, title, items, active = false }: { phase: string, title: string, items: string[], active?: boolean }) {
  return (
    <div className={`${styles.step} ${active ? styles.stepActive : styles.stepInactive}`}>
      <div className={`${styles.stepDot} ${active ? styles.stepDotActive : styles.stepDotInactive}`} />
      <div className={styles.stepPhase}>{phase}</div>
      <div className={styles.stepTitle}>{title}</div>
      <ul className={styles.stepList}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
