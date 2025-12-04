"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ArrowRight, ShieldCheck, AlertTriangle, FileText, Scale, UserX } from "lucide-react"
import Link from "next/link"



export default function TermsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-custom-gradient text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Back Button */}
        <Link href="/">
          <button
            className="mb-8 gap-2 flex items-center text-gray-100 hover:text-gray-100 hover:bg-gray-100/10 transition px-4 py-2 rounded-xl animate-fade-in"
            style={{
              animation: mounted ? "fade-in 0.7s ease-out" : "none",
            }}
          >
            <ArrowRight className="w-4 h-4 text-gray-100" />
            العودة للصفحة الرئيسية
          </button>
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#2d1d60] to-pink-700 shadow-[0_0_25px_rgba(255,0,128,0.35)] mb-4 animate-scale-in"
            style={{
              animation: mounted ? "scale-in 0.6s ease-out" : "none",
            }}
          >
            <ShieldCheck className="w-10 h-10 text-gray-100" />
          </div>

          <h1
            className="text-4xl font-bold mb-4 text-gray-100 tracking-wide animate-slide-up"
            style={{
              animation: mounted ? "slide-up 0.6s ease-out 0.1s both" : "none",
            }}
          >
            الشروط والأحكام
          </h1>

          <p
            className="text-gray-300 text-lg animate-fade-in"
            style={{
              animation: mounted ? "fade-in 0.7s ease-out 0.3s both" : "none",
            }}
          >
            آخر تحديث: {new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <Card
          className="p-8 mb-8 bg-black/40 border border-[#2d1d60]/20 rounded-2xl shadow-xl backdrop-blur-md animate-slide-up"
          style={{
            animation: mounted ? "slide-up 0.6s ease-out 0.2s both" : "none",
          }}
        >
          <div className="prose prose-invert prose-lg max-w-none" dir="rtl">

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-100">
                <FileText className="w-6 h-6 text-gray-100" />
                الموافقة على الشروط
              </h2>
              <p className="text-gray-300 leading-relaxed">
                باستخدام هذه الخدمة، فإنك توافق على الالتزام بهذه الشروط والأحكام.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-100">
                <Scale className="w-6 h-6 text-gray-100" />
                حقوق الملكية الفكرية
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                جميع المحتويات والمواد المتاحة على هذه المنصة مملوكة لنا وتخضع لحقوق الطبع والنشر.
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>لا يجوز نسخ أو توزيع المحتوى بدون إذن</li>
                <li>الاستخدام شخصي وغير تجاري</li>
                <li>يجب الإشارة للمصدر عند الاقتباس</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">قواعد الاستخدام</h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                يُحظر استخدام الخدمة في الأنشطة غير القانونية أو المخالفة.
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>نشر محتوى مسيء أو مضلل</li>
                <li>التلاعب بالأنظمة أو محاولة الوصول غير المصرح به</li>
                <li>نشر الفيروسات أو البريد المزعج</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-100">
                <ShieldCheck className="w-6 h-6 text-gray-100" />
                قواعد الأمان
              </h2>

              <h3 className="text-xl font-semibold text-yellow-200 mb-2">أمان الحساب</h3>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4 mb-6">
                <li>الحفاظ على سرية كلمة المرور</li>
                <li>استخدام كلمات مرور قوية</li>
                <li>تفعيل المصادقة الثنائية</li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-200 mb-2">أمان البيانات</h3>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>استخدام تشفير SSL/TLS</li>
                <li>تخزين كلمات المرور بشكل مشفر</li>
                <li>تدقيقات أمان منتظمة</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                إخلاء المسؤولية
              </h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>الخدمة تقدّم "كما هي"</li>
                <li>لا نضمن خلو الخدمة من الأخطاء</li>
                <li>لا نتحمل مسؤولية الأضرار الناتجة عن الاستخدام</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">الروابط الخارجية</h2>

              <p className="text-gray-300 leading-relaxed">
                نحن لسنا مسؤولين عن محتوى أو ممارسات المواقع الخارجية.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-400">
                <UserX className="w-6 h-6 text-red-500" />
                إنهاء الخدمة
              </h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>انتهاك الشروط</li>
                <li>نشاط مشبوه</li>
                <li>طلب حذف الحساب</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">الامتثال لسياسات Google</h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>لا محتوى محظور</li>
                <li>الشفافية وحماية البيانات</li>
                <li>الالتزام بمعايير الجودة</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">القانون الساري</h2>

              <p className="text-gray-300">
                تخضع هذه الشروط للقوانين المعمول بها في المملكة العربية السعودية.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-100">اتصل بنا</h2>

              <div className="mt-4 p-5 bg-pink-500/10 border border-pink-500/20 rounded-xl">
                <p className="font-semibold text-pink-400">البريد الإلكتروني: legal@bceudr.com</p>
                <p className="font-semibold text-pink-400">الهاتف: +966-11-444-999</p>
                <p className="font-semibold text-pink-400">الرياض، المملكة العربية السعودية</p>
              </div>
            </section>

          </div>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-4 animate-fade-in">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
