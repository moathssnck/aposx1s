"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,#6f27ff,#3b1c77,#1b103f)] py-10 px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 relative overflow-hidden"
      >
        {/* خلفيات التأثيرات */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-white drop-shadow mb-6 text-center"
        >
          سياسة الخصوصية
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-200 text-center mb-8"
        >
          آخر تحديث: 01 / 02 / 2025
        </motion.p>

        <div className="space-y-10 relative z-10 text-gray-100">
          <Section
            title="المقدمة"
            content={`توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لخدمة الروابط الحيوية (BioLinks). من خلال الوصول إلى منصتنا أو استخدامها، فإنك توافق على جمع واستخدام المعلومات وفقًا لما هو موضح في هذه السياسة.`}
          />

          <Section
            title="المعلومات التي نقوم بجمعها"
            content={`قد نقوم بجمع عدة أنواع من البيانات، تشمل:
• البيانات الشخصية مثل الاسم والبريد الإلكتروني وروابط التواصل.
• بيانات الاستخدام مثل نوع الجهاز والمتصفح وطريقة التفاعل مع المنصة.
• ملفات تعريف الارتباط (Cookies) وتقنيات التتبع لتحسين تجربة المستخدم.`}
          />

          <Section
            title="كيفية استخدام المعلومات"
            content={`قد نستخدم بياناتك للأغراض التالية:
• تشغيل منصة BioLinks وتحسين أدائها.
• تخصيص تجربة المستخدم.
• تعزيز الأمان والتحليلات وتحسين الأداء.
• التواصل وتقديم الدعم الفني.`}
          />

          <Section
            title="أمان البيانات"
            content={`نلتزم بحماية بياناتك باستخدام تقنيات التشفير والخوادم الآمنة وآليات المراقبة. ورغم جهودنا للحفاظ على أعلى مستويات الأمان، لا توجد وسيلة نقل بيانات آمنة بنسبة 100٪.`}
          />

          <Section
            title="الخدمات الخارجية"
            content={`قد نستخدم خدمات جهة خارجية مثل أدوات التحليل أو بوابات الدفع. تعمل هذه الخدمات بشكل مستقل وقد تجمع المعلومات وفق سياسات الخصوصية الخاصة بها.`}
          />

          <Section
            title="حقوقك"
            content={`قد تكون لك حقوق معينة حسب موقعك الجغرافي، مثل:
• الوصول إلى بياناتك
• طلب حذف البيانات
• تحديث المعلومات غير الدقيقة
• إلغاء الاشتراك في التتبع أو التحليلات`}
          />

          <Section
            title="التعديلات على هذه السياسة"
            content={`قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ المراجعة.`}
          />

          <Section
            title="اتصل بنا"
            content={`إذا كانت لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد التالي:
support@biolinks.com`}
          />
        </div>
      </motion.div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
    >
      <h2 className="text-2xl font-bold text-purple-300 mb-3">{title}</h2>
      <p className="text-gray-200 whitespace-pre-line leading-relaxed">{content}</p>
    </motion.div>
  );
}
