import { MessageCircle, Shield, FileText, Percent, Printer, Package, Building2, BarChart3, Users, Gift, Smartphone, CheckCircle, ArrowRight, Star, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "يعمل بدون إنترنت",
      description: "نظام موثوق يعمل حتى في حالة انقطاع الإنترنت",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "فواتير إلكترونية وورقية",
      description: "إصدار فواتير متوافقة مع معايير الضريبة العُمانية",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Percent className="w-8 h-8 text-green-600" />,
      title: "خصومات واسترجاع",
      description: "إدارة مرنة للخصومات والعروض والمرتجعات",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Printer className="w-8 h-8 text-green-600" />,
      title: "ربط الطابعات ودرج النقود",
      description: "اتصال سلس مع جميع أنواع الطابعات وأدراج النقود",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Package className="w-8 h-8 text-green-600" />,
      title: "إدارة المخزون الذكية",
      description: "تتبع الكميات مع تنبيهات انخفاض المخزون",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-600" />,
      title: "دعم الفروع المتعددة",
      description: "إدارة جميع فروعك من حساب واحد موحد",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "تقارير لحظية",
      description: "تقارير مبيعات وأرباح فورية ومفصلة",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "إدارة الموظفين",
      description: "تتبع ساعات العمل وأداء الموظفين",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Gift className="w-8 h-8 text-green-600" />,
      title: "نظام ولاء العملاء",
      description: "نقاط مكافآت وتتبع تاريخ المشتريات",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: "متوافق مع جميع الأجهزة",
      description: "يعمل على الجوال والتابلت وقارئ الباركود",
      color: "from-green-500 to-green-600"
    }
  ];

  const services = [
    {
      title: "إعداد النظام بالكامل",
      icon: <Zap className="w-6 h-6 text-green-600" />
    },
    {
      title: "رفع جميع المنتجات والأسعار",
      icon: <Package className="w-6 h-6 text-green-600" />
    },
    {
      title: "ربط الأجهزة والطابعات",
      icon: <Printer className="w-6 h-6 text-green-600" />
    },
    {
      title: "تدريب شامل للمستخدمين",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      title: "دعم فني مستمر",
      icon: <Shield className="w-6 h-6 text-green-600" />
    }
  ];

  const testimonials = [
    {
      name: "أحمد المعمري",
      business: "مطعم الأصالة",
      text: "النظام غيّر طريقة عملنا بالكامل! أصبحت العمليات أسرع والتقارير واضحة.",
      rating: 5,
      avatar: "🧑‍💼"
    },
    {
      name: "فاطمة الريامية",
      business: "بقالة النور",
      text: "إدارة المخزون أصبحت سهلة جداً، والتنبيهات تساعدني في طلب البضائع في الوقت المناسب.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "سالم البوسعيدي",
      business: "مجمع التسوق الجديد",
      text: "ربط الفروع كان حلم، والآن أتابع جميع فروعي من مكان واحد!",
      rating: 5,
      avatar: "👨‍💼"
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 text-gray-800 py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            نظام نقاط البيع المتكامل
          </h1>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-green-600 via-green-700 to-green-800 text-white py-24 px-6 overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              حوّل عملك إلى نظام
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-100 block mt-2">
                احترافي متكامل
              </span>
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl mb-10 text-green-100 max-w-3xl mx-auto leading-relaxed">
              نظام نقاط بيع شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان
            </p>
          </div>
          <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-white text-green-700 hover:bg-green-50 text-lg px-10 py-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover-lift"
            >
              <TrendingUp className="w-5 h-5 ml-2" />
              احصل على استشارة مجانية
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 transition-all duration-300 hover:scale-105 hover-lift glass-effect"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
              اكتشف الميزات
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent mb-6">
              ميزات تجعل عملك أكثر كفاءة
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">كل ما تحتاجه لإدارة عملك بنجاح في مكان واحد</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover-lift group animate-scale-in overflow-hidden relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-6">
              ماذا نقدم لك؟
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">خدمة شاملة من البداية حتى النهاية بأعلى معايير الجودة</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-green-100 animate-scale-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="ml-6 p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className="text-lg text-gray-800 font-medium leading-relaxed">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent mb-20 animate-fade-in-up">
            الفرق واضح
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in">
              <CardContent className="p-10">
                <h4 className="text-3xl font-bold text-red-700 mb-8 text-center">بدون نظام</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-red-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full ml-4 animate-pulse"></div>
                    <span className="text-lg">حسابات يدوية معرضة للأخطاء</span>
                  </li>
                  <li className="flex items-center text-red-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full ml-4 animate-pulse"></div>
                    <span className="text-lg">صعوبة في تتبع المخزون</span>
                  </li>
                  <li className="flex items-center text-red-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full ml-4 animate-pulse"></div>
                    <span className="text-lg">فقدان المعلومات المهمة</span>
                  </li>
                  <li className="flex items-center text-red-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full ml-4 animate-pulse"></div>
                    <span className="text-lg">وقت أطول في العمليات</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-10">
                <h4 className="text-3xl font-bold text-green-700 mb-8 text-center">مع النظام المتكامل</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="w-6 h-6 text-green-500 ml-4" />
                    <span className="text-lg">دقة 100% في الحسابات</span>
                  </li>
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="w-6 h-6 text-green-500 ml-4" />
                    <span className="text-lg">تتبع فوري للمخزون</span>
                  </li>
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="w-6 h-6 text-green-500 ml-4" />
                    <span className="text-lg">تقارير تفصيلية وتحليلات</span>
                  </li>
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="w-6 h-6 text-green-500 ml-4" />
                    <span className="text-lg">سرعة في إنجاز المعاملات</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-6">
              ماذا يقول عملاؤنا؟
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">تجارب حقيقية من عملاء راضين عن خدماتنا</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in overflow-hidden relative group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-6 flex items-center">
                    <div className="text-3xl ml-4">{testimonial.avatar}</div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-6">
              الأسئلة الشائعة
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">إجابات شاملة على أهم استفساراتك</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4 leading-relaxed">
                    {faq.question}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-l from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h3 className="text-5xl font-bold mb-8">جاهز لتطوير عملك؟</h3>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto leading-relaxed">
              تواصل معنا الآن واحصل على استشارة مجانية لتحديد أفضل حل لعملك
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-xl px-12 py-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover-lift"
            >
              <MessageCircle className="w-6 h-6 ml-3" />
              تواصل على الواتساب
            </Button>
          </div>
          <div className="animate-fade-in-up mt-6" style={{animationDelay: '0.6s'}}>
            <p className="text-green-200 text-lg">
              أو اتصل بنا على: <span className="font-bold text-white">{whatsappNumber}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-green-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-2xl mb-4 font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              نظام نقاط البيع المتكامل
            </p>
            <p className="text-gray-300 text-lg">حلول تقنية احترافية للبزنسات الصغيرة والمتوسطة في عُمان</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-50 animate-float">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
