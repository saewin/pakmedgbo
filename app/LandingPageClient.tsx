'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle, ArrowRight, Star, Leaf, Activity, Eye, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function LandingPageClient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className="font-sans selection:bg-green-200 selection:text-green-900 overflow-x-hidden">

            {/* --- NAVBAR --- */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">P</div>
                            <span className="font-bold text-xl tracking-tight text-green-900">PakMed <span className="text-green-600">GBO</span></span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#why-gbo" className="text-gray-600 hover:text-green-600 font-medium transition-colors">ทำไมต้อง GBO</a>
                            <a href="#ingredients" className="text-gray-600 hover:text-green-600 font-medium transition-colors">ส่วนประกอบ</a>
                            <a href="#reviews" className="text-gray-600 hover:text-green-600 font-medium transition-colors">รีวิว</a>
                            <a href="#order" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-green-200 transition-all hover:scale-105 flex items-center gap-2">
                                <ShoppingCart size={18} /> สั่งซื้อทันที
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-green-600">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 shadow-xl"
                    >
                        <div className="flex flex-col space-y-4 pt-4">
                            <a href="#why-gbo" className="text-gray-700 font-medium p-2 text-lg" onClick={() => setIsMenuOpen(false)}>ทำไมต้อง GBO</a>
                            <a href="#ingredients" className="text-gray-700 font-medium p-2 text-lg" onClick={() => setIsMenuOpen(false)}>ส่วนประกอบ</a>
                            <a href="#reviews" className="text-gray-700 font-medium p-2 text-lg" onClick={() => setIsMenuOpen(false)}>รีวิว</a>
                            <a href="#order" className="bg-green-600 text-center text-white p-3 rounded-lg font-bold text-lg" onClick={() => setIsMenuOpen(false)}>
                                สั่งซื้อสินค้า
                            </a>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#f8fafc]">

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-green-50 to-transparent opacity-60 z-0"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-50 to-transparent opacity-60 z-0 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="text-center lg:text-left"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm mb-6 border border-green-200">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                นวัตกรรมใหม่ล่าสุด 2024
                            </motion.div>

                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                                มิติใหม่แห่งการกินผัก... <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">1 เม็ด = ผัก 2 กิโล</span>
                            </motion.h1>

                            <motion.p variants={fadeIn} className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                กู้ร่างพัง ล้างสารพิษในเลือด เติมผิวใส ด้วย <span className="font-semibold text-green-700">Green Blood Detox</span> จากสารสกัดธรรมชาติ 9 ชนิด ดูแลครบจบในเม็ดเดียว
                            </motion.p>

                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#order" className="group bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-200 hover:bg-green-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                    ลองทานเลย (ส่งฟรี)
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#video" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    ดูวิดีโอแนะนำ
                                </a>
                            </motion.div>

                            <motion.div variants={fadeIn} className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-green-500" /> อย. รับรอง
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-green-500" /> สารสกัดธรรมชาติ 100%
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Glass Card Behind */}
                            <div className="absolute inset-0 bg-green-200 rounded-[3rem] opacity-20 blur-3xl -z-10 transform rotate-6 scale-90"></div>

                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
                                    alt="PakMed GBO Bottle"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-1 bg-green-100 rounded-full"><Leaf size={16} className="text-green-600" /></div>
                                        <span className="font-bold text-sm text-green-800">เข้มข้นพิเศษ</span>
                                    </div>
                                    <p className="text-xs text-slate-600">วีทกราส + อัลฟัลฟ่า สกัดเย็น คงคุณค่า 99%</p>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- PAIN POINTS SECTION --- */}
            <section id="why-gbo" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">คุณกำลังเสี่ยงโดยไม่รู้ตัวหรือเปล่า?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">ไลฟ์สไตล์คนยุคใหม่ทำร้ายร่างกายมากกว่าที่คิด เช็คดูซิว่าคุณมีอาการเหล่านี้ไหม?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">❌</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">ทานผักน้อย ท้องผูก</h3>
                            <p className="text-slate-500 leading-relaxed">ขับถ่ายยาก สารพิษตกค้างในลำไส้ ส่งผลให้เป็นสิว ผิวหมองคล้ำ และมีกลิ่นตัว</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">😴</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">เพลียเรื้อรัง สมองตื้อ</h3>
                            <p className="text-slate-500 leading-relaxed">เลือดเป็นกรด ออกซิเจนในเลือดต่ำ ทำให้ง่วงนอนตลอดวัน โฟกัสงานไม่ได้</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">💻</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">จ้องจอนาน ตาล้า</h3>
                            <p className="text-slate-500 leading-relaxed">แสงสีฟ้าทำลายจอประสาทตา ทำให้ตาแห้ง พร่ามัว เสี่ยงต้อกระจกก่อนวัย</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SOLUTION SECTION (THE SCIENCE) --- */}
            <section id="ingredients" className="py-24 bg-green-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Secret Solution</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Dual-Detox Synergy <br /><span className="text-green-400">Green Blood Oral</span></h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-700/50 flex items-center justify-center flex-shrink-0 text-green-300"><Activity /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">ฟอกเลือด (Blood Detox)</h4>
                                        <p className="text-green-100/80 font-light">
                                            ด้วย <strong className="text-white">Wheatgrass</strong> ที่มีคลอโรฟิลล์โครงสร้างคล้ายเม็ดเลือดแดง ช่วยเพิ่มออกซิเจนและล้างความเป็นกรดในเลือด
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-700/50 flex items-center justify-center flex-shrink-0 text-green-300"><Leaf /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">ล้างลำไส้ (Gut Cleanse)</h4>
                                        <p className="text-green-100/80 font-light">
                                            ด้วย <strong className="text-white">Alfalfa</strong> ที่มีสารซาโปนิน เปรียบเสมือนแม่บ้านที่คอยดักจับไขมันและเกาะผนังลำไส้ให้หลุดออก
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-700/50 flex items-center justify-center flex-shrink-0 text-green-300"><Eye /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">ปกป้องดวงตา (Eye Care)</h4>
                                        <p className="text-green-100/80 font-light">
                                            เสริมด้วย <strong className="text-white">Lutein & Goji Berry</strong> ช่วยกรองแสงสีฟ้าและฟื้นฟูจอประสาทตาที่เสื่อมสภาพ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl">
                                <Image
                                    src="https://plus.unsplash.com/premium_photo-1661320857508-2517865f7690?auto=format&fit=crop&w=800&q=80"
                                    alt="Green Vegetable Extract"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-2xl mb-6"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-green-300 uppercase tracking-wider">Active Ingredients</p>
                                        <p className="font-bold text-xl">9 Premium Extracts</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-bold text-green-400">100%</p>
                                        <p className="text-xs text-white/50">Natural</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decoration Circles */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-30"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- REVIEWS (SOCIAL PROOF) --- */}
            <section id="reviews" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16">เสียงยืนยันจากผู้ทานจริง</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Review 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden relative">
                                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="User 1" fill className="object-cover" />
                            </div>
                            <div className="flex text-yellow-400 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                            <p className="text-slate-600 italic mb-6">"ปกติลูกไม่ทานผักเลย ขับถ่ายยากมาก พอให้ลองแกะ GBO ผสมน้ำให้กิน น้องทานง่ายขึ้น ถ่ายคล่องขึ้นเยอะเลยค่ะ แม่ปลื้มมาก"</p>
                            <p className="font-bold text-slate-900">- คุณแม่น้องออโต้</p>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center scale-105 border-green-200 relative">
                            <div className="absolute -top-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Top Review</div>
                            <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden relative">
                                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User 2" fill className="object-cover" />
                            </div>
                            <div className="flex text-yellow-400 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                            <p className="text-slate-600 italic mb-6">"ทำงานโปรแกรมเมอร์จ้องคอมวันละ 10 ชม. ตาเบลอมาก ทานตัวนี้มา 2 อาทิตย์ รู้สึกตาใสขึ้น ไม่ค่อยล้า สมองตื่นตัวดีครับ"</p>
                            <p className="font-bold text-slate-900">- คุณวิศรุต (Programmer)</p>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden relative">
                                <Image src="https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&q=80" alt="User 3" fill className="object-cover" />
                            </div>
                            <div className="flex text-yellow-400 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                            <p className="text-slate-600 italic mb-6">"อายุเยอะแล้วระบบย่อยไม่ค่อยดี ท้องอืดบ่อย เพื่อนแนะนำตัวนี้ ทานแล้วสบายท้องมาก เหมือนได้ล้างลำไส้จริงๆ ผิวดูสดใสขึ้นด้วย"</p>
                            <p className="font-bold text-slate-900">- คุณป้าสมศรี</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OFFER SECTION --- */}
            <section id="order" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-50"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">โปรโมชั่นพิเศษจำนวนจำกัด! 🔥</h2>
                                <p className="text-slate-500 mb-8">เริ่มกู้ร่างพังวันนี้ เพื่อสุขภาพที่ดีในระยะยาว คุ้มค่าที่สุดกับโปรโมชั่นเซตขายดี</p>

                                <div className="p-6 bg-green-50 rounded-2xl border border-green-200 mb-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">BEST SELLER</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-1">เซตกู้ร่างเร่งด่วน (ซื้อ 2 แถม 1)</h3>
                                    <p className="text-sm text-green-600 mb-4">ทานได้ 3 เดือน / ดูแลครบสูตร</p>
                                    <div className="flex items-end gap-3">
                                        <span className="text-4xl font-bold text-slate-900">990.-</span>
                                        <span className="text-lg text-slate-400 line-through mb-1">1,560.-</span>
                                    </div>
                                </div>

                                <a href="https://lin.ee/882Y78M" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-5 rounded-full font-bold text-xl shadow-lg shadow-green-200 transition-all hover:scale-[1.02]">
                                    สั่งซื้อผ่าน LINE OA (คลิก)
                                </a>
                                <p className="text-center text-xs text-slate-400 mt-4">มีบริการเก็บเงินปลายทาง • ส่งฟรีทั่วประเทศ</p>
                            </div>
                            <div className="relative bg-green-800 min-h-[300px] lg:min-h-full">
                                <Image src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80" alt="Promotion" fill className="object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex flex-col justify-end p-10">
                                    <p className="text-white text-lg font-medium opacity-90">"การลงทุนที่คุ้มค่าที่สุด คือการลงทุนกับสุขภาพของคุณเอง"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
