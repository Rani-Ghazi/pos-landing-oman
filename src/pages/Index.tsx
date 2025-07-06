import { MessageCircle, Shield, FileText, Percent, Printer, Package, Building2, BarChart3, Users, Gift, Smartphone, CheckCircle, ArrowRight, Star, Zap, TrendingUp, Play, Clock, HeadphonesIcon, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "يعمل بدون إنترنت",
      description: "نظام موثوق يعمل حتى في حالة انقطاع الإنترنت مع حفظ تلقائي للبيانات"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "فواتير إلكترونية وورقية", 
      description: "إصدار فواتير متوافقة مع معايير الضريبة العُمانية والتشريعات المحلية"
    },
    {
      icon: <Percent className="w-6 h-6 text-green-600" />,
      title: "خصومات واسترجاع",
      description: "إدارة مرنة للخصومات والعروض والمرتجعات مع تتبع دقيق للأرباح"
    },
    {
      icon: <Printer className="w-6 h-6 text-green-600" />,
      title: "ربط الطابعات ودرج النقود",
      description: "اتصال سلس مع جميع أنواع الطابعات وأدراج النقود والأجهزة الطرفية"
    },
    {
      icon: <Package className="w-6 h-6 text-green-600" />,
      title: "إدارة المخزون الذكية",
      description: "تتبع الكميات مع تنبيهات انخفاض المخزون وتقارير حركة البضائع"
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      title: "دعم الفروع المتعددة",
      description: "إدارة جميع فروعك من حساب واحد مع مزامنة فورية للبيانات"
    }
  ];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "إعداد النظام بالكامل خلال 24 ساعة" },
    { icon: <Package className="w-5 h-5" />, text: "رفع جميع المنتجات والأسعار مجاناً" },
    { icon: <Printer className="w-5 h-5" />, text: "ربط وإعداد الأجهزة والطابعات" },
    { icon: <Users className="w-5 h-5" />, text: "تدريب شامل لجميع المستخدمين" },
    { icon: <HeadphonesIcon className="w-5 h-5" />, text: "دعم فني مستمر على مدار الساعة" }
  ];

  const testimonials = [
    {
      name: "أحمد المعمري",
      business: "مطعم الأصالة - مسقط",
      text: "النظام غيّر طريقة عملنا بالكامل! زادت سرعة الخدمة 50% والتقارير اليومية أصبحت واضحة ودقيقة.",
      rating: 5,
      avatar: "🧑‍💼",
      highlight: "زيادة 50% في السرعة"
    },
    {
      name: "فاطمة الريامية",
      business: "بقالة النور - صحار",
      text: "إدارة المخزون أصبحت سهلة جداً، والتنبيهات تساعدني في طلب البضائع في الوقت المناسب. وفرت عليّ ساعات يومياً.",
      rating: 5,
      avatar: "👩‍💼", 
      highlight: "توفير ساعات يومياً"
    },
    {
      name: "سالم البوسعيدي",
      business: "مجمع التسوق الجديد - نزوى",
      text: "ربط 5 فروع في نظام واحد كان حلماً، والآن أتابع جميع فروعي من هاتفي في أي مكان!",
      rating: 5,
      avatar: "👨‍💼",
      highlight: "5 فروع في نظام واحد"
    }
  ];

  const stats = [
    { number: "500+", label: "عميل راضي", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "فاتورة يومياً", icon: <FileText className="w-6 h-6" /> },
    { number: "99.9%", label: "وقت التشغيل", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "دعم فني", icon: <HeadphonesIcon className="w-6 h-6" /> }
  ];

  const whatsappNumber = "+96895454284";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن نظام نقاط البيع";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4 sm:px-6 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                نظام نقاط البيع المتكامل
              </h1>
              <p className="text-xs text-green-600 font-medium hidden sm:block">الحل الأمثل للمحلات والمطاعم</p>
            </div>
          </div>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            <span className="hidden sm:inline">تواصل معنا</span>
            <span className="sm:hidden">واتساب</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-green-50/30 to-white py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              الحل الشامل لإدارة الأعمال في عُمان
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              نظام نقاط البيع
              <span className="text-green-500 block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">المتكامل والذكي</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              حل شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان. 
              نظام احترافي يعمل بدون إنترنت مع إدارة متكاملة لجميع عملياتك التجارية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                احصل على استشارة مجانية
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="w-5 h-5 ml-2" />
                شاهد العرض التوضيحي
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-green-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 mr-4">نظام نقاط البيع المتكامل</div>
                </div>
              </div>
              <div className="p-6 sm:p-12 bg-gradient-to-br from-green-50 to-blue-50 min-h-[250px] sm:min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg animate-float">
                    <BarChart3 className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">لوحة التحكم الرئيسية</h3>
                  <p className="text-gray-600 text-sm sm:text-base">إدارة شاملة لجميع عمليات البيع والمخزون والتقارير</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              كل ما تحتاجه في مكان واحد
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مجموعة شاملة من الميزات المتقدمة المصممة خصيصاً لتسهيل إدارة عملك وزيادة الكفاءة والأرباح
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 rounded-2xl group hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 rounded-xl w-fit group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                خدماتنا المتكاملة
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                نقوم بكل شيء من أجلك
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                لا تقلق بشأن التفاصيل التقنية. فريقنا المتخصص سيتولى إعداد النظام بالكامل وتدريبك عليه حتى تصبح خبيراً.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <span className="text-base sm:text-lg text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-xl mt-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                ابدأ الآن - مجاناً
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 animate-fade-in-up">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">إعداد سريع</h4>
                      <p className="text-sm text-gray-600">نظام جاهز خلال 24 ساعة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">تدريب شامل</h4>
                      <p className="text-sm text-gray-600">تدريب عملي لجميع المستخدمين</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">دعم مستمر</h4>
                      <p className="text-sm text-gray-600">مساعدة فنية 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">ضمان الجودة</h4>
                      <p className="text-sm text-gray-600">ضمان شامل لمدة سنة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              ماذا يقول عملاؤنا؟
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">تجارب حقيقية من أصحاب أعمال نجحوا معنا</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                    {testimonial.highlight}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="text-2xl ml-4">{testimonial.avatar}</div>
                    <div>
                      <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            جاهز لتطوير عملك؟
          </h3>
          <p className="text-lg sm:text-xl text-green-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص لعملك. فريقنا جاهز لمساعدتك في أي وقت.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-white text-green-600 hover:bg-gray-50 px-12 py-4 text-lg rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 ml-3" />
              تواصل على الواتساب
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-12 py-4 text-lg rounded-xl font-bold transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="w-6 h-6 ml-3" />
              اتصل بنا الآن
            </Button>
          </div>
          <p className="text-green-200 mt-6 text-sm sm:text-base">
            أو اتصل بنا على: <span className="font-bold text-white">{whatsappNumber}</span>
          </p>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold block">نظام نقاط البيع المتكامل</span>
                <span className="text-green-400 text-sm">الحل الأمثل للأعمال العُمانية</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              نحن ملتزمون بتقديم حلول تقنية احترافية ومبتكرة للبزنسات الصغيرة والمتوسطة في سلطنة عُمان، 
              مع التركيز على الجودة والموثوقية والدعم المستمر.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© 2024 جميع الحقوق محفوظة - نظام نقاط البيع المتكامل</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-500">صنع بـ ❤️ في عُمان</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
