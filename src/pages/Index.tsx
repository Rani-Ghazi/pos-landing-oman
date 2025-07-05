
import { MessageCircle, Shield, FileText, Percent, Printer, Package, Building2, BarChart3, Users, Gift, Smartphone, CheckCircle, ArrowRight, Star, Zap, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "يعمل بدون إنترنت",
      description: "نظام موثوق يعمل حتى في حالة انقطاع الإنترنت"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "فواتير إلكترونية وورقية",
      description: "إصدار فواتير متوافقة مع معايير الضريبة العُمانية"
    },
    {
      icon: <Percent className="w-6 h-6 text-green-600" />,
      title: "خصومات واسترجاع",
      description: "إدارة مرنة للخصومات والعروض والمرتجعات"
    },
    {
      icon: <Printer className="w-6 h-6 text-green-600" />,
      title: "ربط الطابعات ودرج النقود",
      description: "اتصال سلس مع جميع أنواع الطابعات وأدراج النقود"
    },
    {
      icon: <Package className="w-6 h-6 text-green-600" />,
      title: "إدارة المخزون الذكية",
      description: "تتبع الكميات مع تنبيهات انخفاض المخزون"
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      title: "دعم الفروع المتعددة",
      description: "إدارة جميع فروعك من حساب واحد موحد"
    }
  ];

  const benefits = [
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

  const whatsappNumber = "+96895454284";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن نظام نقاط البيع";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              نظام نقاط البيع المتكامل
            </h1>
          </div>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-6"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              الحل الشامل لإدارة الأعمال
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              نظام نقاط البيع
              <span className="text-green-500 block">المتكامل للجميع</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              حل شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان. 
              نظام احترافي يعمل بدون إنترنت مع إدارة متكاملة لجميع عملياتك التجارية.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-lg"
              >
                احصل على استشارة مجانية
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg"
              >
                <Play className="w-5 h-5 ml-2" />
                شاهد العرض التوضيحي
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 mr-4">نظام نقاط البيع</div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">لوحة التحكم الرئيسية</h3>
                  <p className="text-gray-600">إدارة شاملة لجميع عمليات البيع والمخزون</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              كل ما تحتاجه في مكان واحد
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              مجموعة شاملة من الميزات المتقدمة لتسهيل إدارة عملك وزيادة الكفاءة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl group"
              >
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-green-50 rounded-lg w-fit group-hover:bg-green-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                خدماتنا المتكاملة
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                نقوم بكل شيء من أجلك
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                لا تقلق بشأن التفاصيل التقنية. فريقنا المتخصص سيتولى إعداد النظام بالكامل وتدريبك عليه.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-lg mt-8"
              >
                ابدأ الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">إعداد شامل</h4>
                      <p className="text-sm text-gray-600">نظام جاهز للاستخدام فوراً</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">تدريب متكامل</h4>
                      <p className="text-sm text-gray-600">تدريب عملي لجميع المستخدمين</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">دعم مستمر</h4>
                      <p className="text-sm text-gray-600">مساعدة فنية على مدار الساعة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              ماذا يقول عملاؤنا؟
            </h3>
            <p className="text-xl text-gray-600">تجارب حقيقية من عملاء راضين</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
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
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            جاهز لتطوير عملك؟
          </h3>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            تواصل معنا الآن واحصل على استشارة مجانية لتحديد أفضل حل لعملك
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-white text-green-500 hover:bg-gray-50 px-12 py-4 text-lg rounded-lg font-semibold"
          >
            <MessageCircle className="w-6 h-6 ml-3" />
            تواصل على الواتساب
          </Button>
          <p className="text-green-200 mt-6">
            أو اتصل بنا على: <span className="font-bold text-white">{whatsappNumber}</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">نظام نقاط البيع المتكامل</span>
          </div>
          <p className="text-gray-400">حلول تقنية احترافية للبزنسات الصغيرة والمتوسطة في عُمان</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
