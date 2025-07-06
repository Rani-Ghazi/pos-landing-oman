
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
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                نظام نقاط البيع المتكامل
              </h1>
              <p className="text-sm text-green-600 font-medium hidden sm:block">الحل الأمثل للمحلات والمطاعم</p>
            </div>
          </div>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl px-4 sm:px-8 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            <span className="hidden sm:inline font-semibold">تواصل معنا</span>
            <span className="sm:hidden font-semibold">واتساب</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-green-50/40 to-blue-50/30 py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in-up shadow-sm border border-green-200/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              الحل الشامل لإدارة الأعمال في عُمان
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight animate-fade-in-up">
              نظام نقاط البيع
              <span className="text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text block mt-2">المتكامل والذكي</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium">
              حل شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان. 
              نظام احترافي يعمل بدون إنترنت مع إدارة متكاملة لجميع عملياتك التجارية.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95 group"
              >
                احصل على استشارة مجانية
                <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-5 text-xl rounded-2xl hover:shadow-xl transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95 group"
              >
                <Play className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                شاهد العرض التوضيحي
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in hover:scale-105 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-green-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 sm:px-8 py-4 sm:py-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full hover:bg-red-500 transition-colors cursor-pointer"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full hover:bg-green-500 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 mr-4">نظام نقاط البيع المتكامل</div>
                </div>
              </div>
              <div className="p-8 sm:p-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-[300px] sm:min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl animate-float hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-10 sm:w-16 h-10 sm:h-16 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mb-4 sm:mb-6">لوحة التحكم الرئيسية</h3>
                  <p className="text-gray-600 text-base sm:text-xl font-medium">إدارة شاملة لجميع عمليات البيع والمخزون والتقارير</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-15 animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8">
              كل ما تحتاجه في مكان واحد
            </h3>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              مجموعة شاملة من الميزات المتقدمة المصممة خصيصاً لتسهيل إدارة عملك وزيادة الكفاءة والأرباح
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 rounded-3xl group hover:-translate-y-3 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 sm:p-10">
                  <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl w-fit group-hover:bg-gradient-to-br group-hover:from-green-100 group-hover:to-green-200 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/40 to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-green-200/50">
                <Zap className="w-4 h-4" />
                خدماتنا المتكاملة
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                نقوم بكل شيء من أجلك
              </h3>
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
                لا تقلق بشأن التفاصيل التقنية. فريقنا المتخصص سيتولى إعداد النظام بالكامل وتدريبك عليه حتى تصبح خبيراً.
              </p>
              
              <div className="space-y-6 sm:space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-5 animate-fade-in-up group hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl text-gray-700 font-semibold">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 text-xl rounded-2xl mt-10 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95 group"
              >
                ابدأ الآن - مجاناً
                <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl border border-gray-100 p-8 sm:p-12 animate-fade-in-up hover:shadow-3xl transition-all duration-500">
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl">إعداد سريع</h4>
                      <p className="text-base text-gray-600 font-medium">نظام جاهز خلال 24 ساعة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl">تدريب شامل</h4>
                      <p className="text-base text-gray-600 font-medium">تدريب عملي لجميع المستخدمين</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl">دعم مستمر</h4>
                      <p className="text-base text-gray-600 font-medium">مساعدة فنية 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl">ضمان الجودة</h4>
                      <p className="text-base text-gray-600 font-medium">ضمان شامل لمدة سنة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8">
              ماذا يقول عملاؤنا؟
            </h3>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">تجارب حقيقية من أصحاب أعمال نجحوا معنا</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:border-green-200 transition-all duration-500 animate-fade-in-up group hover:-translate-y-2" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 sm:p-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="inline-block bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-sm px-4 py-2 rounded-full mb-6 font-semibold border border-green-200/50">
                    {testimonial.highlight}
                  </div>
                  <p className="text-gray-700 mb-8 italic leading-relaxed text-base sm:text-lg font-medium">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="text-3xl ml-5">{testimonial.avatar}</div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            جاهز لتطوير عملك؟
          </h3>
          <p className="text-xl sm:text-2xl text-green-100 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
            تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص لعملك. فريقنا جاهز لمساعدتك في أي وقت.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-white text-green-600 hover:bg-gray-50 px-16 py-6 text-xl rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95 group"
            >
              <MessageCircle className="w-7 h-7 ml-4" />
              تواصل على الواتساب
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white hover:text-green-600 px-16 py-6 text-xl rounded-2xl font-bold transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95 group"
            >
              <Phone className="w-7 h-7 ml-4" />
              اتصل بنا الآن
            </Button>
          </div>
          <p className="text-green-200 mt-8 text-lg sm:text-xl font-medium">
            أو اتصل بنا على: <span className="font-bold text-white">{whatsappNumber}</span>
          </p>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Package className="w-9 h-9 text-white" />
              </div>
              <div className="text-right">
                <span className="text-3xl font-black block">نظام نقاط البيع المتكامل</span>
                <span className="text-green-400 text-base font-medium">الحل الأمثل للأعمال العُمانية</span>
              </div>
            </div>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              نحن ملتزمون بتقديم حلول تقنية احترافية ومبتكرة للبزنسات الصغيرة والمتوسطة في سلطنة عُمان، 
              مع التركيز على الجودة والموثوقية والدعم المستمر.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm font-medium">© 2024 جميع الحقوق محفوظة - نظام نقاط البيع المتكامل</p>
              <div className="flex gap-6 text-sm">
                <span className="text-gray-500 font-medium">صنع بـ ❤️ في عُمان</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-7 h-7 sm:w-10 sm:h-10" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
