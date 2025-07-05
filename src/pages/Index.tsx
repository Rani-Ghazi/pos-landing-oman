
import { MessageCircle, Shield, FileText, Percent, Printer, Package, Building2, BarChart3, Users, Gift, Smartphone, CheckCircle, ArrowUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "يعمل بدون إنترنت",
      description: "نظام موثوق يعمل حتى في حالة انقطاع الإنترنت"
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: "فواتير إلكترونية وورقية",
      description: "إصدار فواتير متوافقة مع معايير الضريبة العُمانية"
    },
    {
      icon: <Percent className="w-8 h-8 text-orange-500" />,
      title: "خصومات واسترجاع",
      description: "إدارة مرنة للخصومات والعروض والمرتجعات"
    },
    {
      icon: <Printer className="w-8 h-8 text-orange-500" />,
      title: "ربط الطابعات ودرج النقود",
      description: "اتصال سلس مع جميع أنواع الطابعات وأدراج النقود"
    },
    {
      icon: <Package className="w-8 h-8 text-orange-500" />,
      title: "إدارة المخزون الذكية",
      description: "تتبع الكميات مع تنبيهات انخفاض المخزون"
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" />,
      title: "دعم الفروع المتعددة",
      description: "إدارة جميع فروعك من حساب واحد موحد"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "تقارير لحظية",
      description: "تقارير مبيعات وأرباح فورية ومفصلة"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "إدارة الموظفين",
      description: "تتبع ساعات العمل وأداء الموظفين"
    },
    {
      icon: <Gift className="w-8 h-8 text-orange-500" />,
      title: "نظام ولاء العملاء",
      description: "نقاط مكافآت وتتبع تاريخ المشتريات"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "متوافق مع جميع الأجهزة",
      description: "يعمل على الجوال والتابلت وقارئ الباركود"
    }
  ];

  const services = [
    "إعداد النظام بالكامل",
    "رفع جميع المنتجات والأسعار",
    "ربط الأجهزة والطابعات",
    "تدريب شامل للمستخدمين",
    "دعم فني مستمر"
  ];

  const testimonials = [
    {
      name: "أحمد المعمري",
      business: "مطعم الأصالة",
      text: "النظام غيّر طريقة عملنا بالكامل! أصبحت العمليات أسرع والتقارير واضحة."
    },
    {
      name: "فاطمة الريامية",
      business: "بقالة النور",
      text: "إدارة المخزون أصبحت سهلة جداً، والتنبيهات تساعدني في طلب البضائع في الوقت المناسب."
    },
    {
      name: "سالم البوسعيدي",
      business: "مجمع التسوق الجديد",
      text: "ربط الفروع كان حلم، والآن أتابع جميع فروعي من مكان واحد!"
    }
  ];

  const faqs = [
    {
      question: "هل يحتاج النظام إلى اتصال دائم بالإنترنت؟",
      answer: "لا، النظام يعمل بكفاءة حتى بدون إنترنت، ويتم المزامنة عند توفر الاتصال."
    },
    {
      question: "كم يستغرق إعداد النظام؟",
      answer: "عادة 1-3 أيام حسب حجم البيانات وعدد الأجهزة المطلوب ربطها."
    },
    {
      question: "هل النظام متوافق مع متطلبات الضريبة العُمانية؟",
      answer: "نعم، النظام مصمم ليتوافق مع جميع متطلبات الفوترة الإلكترونية في عُمان."
    },
    {
      question: "ماذا يشمل الدعم الفني؟",
      answer: "دعم فني كامل، تحديثات مجانية، وحل المشاكل عن بُعد أو بالزيارة حسب الحاجة."
    }
  ];

  const whatsappNumber = "+96895454284";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن نظام نقاط البيع";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-emerald-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">نظام نقاط البيع المتكامل</h1>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-emerald-800 to-emerald-900 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            حوّل عملك إلى نظام
            <span className="text-orange-400 block mt-2">احترافي متكامل</span>
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            نظام نقاط بيع شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4"
            >
              احصل على استشارة مجانية
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-800 text-lg px-8 py-4"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              اكتشف الميزات
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">ميزات تجعل عملك أكثر كفاءة</h3>
            <p className="text-xl text-gray-600">كل ما تحتاجه لإدارة عملك بنجاح</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">ماذا نقدم لك؟</h3>
            <p className="text-xl text-gray-600">خدمة شاملة من البداية حتى النهاية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-emerald-50 p-6 rounded-lg">
                <CheckCircle className="w-6 h-6 text-emerald-600 ml-4 flex-shrink-0" />
                <span className="text-lg text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">الفرق واضح</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-red-800 mb-6 text-center">بدون نظام</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                    حسابات يدوية معرضة للأخطاء
                  </li>
                  <li className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                    صعوبة في تتبع المخزون
                  </li>
                  <li className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                    فقدان المعلومات المهمة
                  </li>
                  <li className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                    وقت أطول في العمليات
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-emerald-800 mb-6 text-center">مع النظام المتكامل</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-emerald-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 ml-3" />
                    دقة 100% في الحسابات
                  </li>
                  <li className="flex items-center text-emerald-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 ml-3" />
                    تتبع فوري للمخزون
                  </li>
                  <li className="flex items-center text-emerald-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 ml-3" />
                    تقارير تفصيلية وتحليلات
                  </li>
                  <li className="flex items-center text-emerald-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 ml-3" />
                    سرعة في إنجاز المعاملات
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">ماذا يقول عملاؤنا؟</h3>
            <p className="text-xl text-gray-600">تجارب حقيقية من عملاء راضين</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <h5 className="font-semibold text-emerald-800">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h3>
            <p className="text-xl text-gray-600">إجابات على أهم استفساراتك</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-l from-emerald-800 to-emerald-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">جاهز لتطوير عملك؟</h3>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية لتحديد أفضل حل لعملك
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-4"
          >
            <MessageCircle className="w-6 h-6 ml-3" />
            تواصل على الواتساب
          </Button>
          <p className="mt-4 text-emerald-200">
            أو اتصل بنا على: {whatsappNumber}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">نظام نقاط البيع المتكامل</p>
          <p className="text-gray-400">حلول تقنية احترافية للبزنسات الصغيرة والمتوسطة في عُمان</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg animate-pulse"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
